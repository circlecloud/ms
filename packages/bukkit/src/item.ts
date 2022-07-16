import { item } from "@ccms/api"
import { provideSingleton } from "@ccms/container"

import { itemIds } from './internal/item'

const Material: typeof org.bukkit.Material = Java.type('org.bukkit.Material')
const ItemStack: typeof org.bukkit.inventory.ItemStack = Java.type('org.bukkit.inventory.ItemStack')

@provideSingleton(item.Item)
export class BukkitItem extends item.Item {
    private CraftItemStack: any
    private NBTTagCompound: any
    private nmsSaveNBTMethodName: any
    private MojangsonParser: any
    private nmsItemStack: any
    private mpParseMethodName: any
    private nmsVersion: any
    constructor() {
        super()
        this.reflect()
    }
    builder(): item.ItemBuilder {
        return new BukkitItemBuilder()
    }
    toJson(item: any): string {
        let nbt = new this.NBTTagCompound()
        return this.CraftItemStack.asNMSCopy(item)[this.nmsSaveNBTMethodName](nbt).toString()
    }
    fromJson(json: string) {
        return this.CraftItemStack.asBukkitCopy(new this.nmsItemStack(this.MojangsonParser[this.mpParseMethodName](json)))
    }
    private obcCls(name: string) {
        return base.getClass(['org.bukkit.craftbukkit', this.nmsVersion, name].join('.'))
    }
    private nmsCls(name: string) {
        return base.getClass(['net.minecraft.server', this.nmsVersion, name].join('.'))
    }
    private reflect() {
        try {
            let Bukkit: typeof org.bukkit.Bukkit = Java.type('org.bukkit.Bukkit')
            // @ts-ignore
            this.nmsVersion = Bukkit.getServer().class.name.split('.')[3]
            let CraftItemStackClass = this.obcCls('inventory.CraftItemStack')
            this.CraftItemStack = Java.type(CraftItemStackClass.getName())
            // @ts-ignore
            let asNMSCopyMethod = CraftItemStackClass.getMethod('asNMSCopy', ItemStack.class)
            let nmsItemStackClass = asNMSCopyMethod.getReturnType()
            this.nmsItemStack = Java.type(nmsItemStackClass.getName())
            let nmsNBTTagCompoundClass = undefined
            for (let method of Java.from(nmsItemStackClass.getMethods())) {
                let rt = method.getReturnType()
                if (method.getParameterTypes().length == 0 && "NBTTagCompound" == rt.getSimpleName()) {
                    nmsNBTTagCompoundClass = rt
                }
            }
            this.NBTTagCompound = Java.type(nmsNBTTagCompoundClass.getName())
            for (let method of Java.from(nmsItemStackClass.getMethods())) {
                let params = method.getParameterTypes()
                let rt = method.getReturnType()
                if (params.length == 1 && "NBTTagCompound" == params[0].getSimpleName() && "NBTTagCompound" == rt.getSimpleName()) {
                    this.nmsSaveNBTMethodName = method.getName()
                    break
                }
            }
            try {
                this.MojangsonParser = this.nmsCls('MojangsonParser').static
            } catch (error) {
                this.MojangsonParser = Java.type('net.minecraft.nbt.MojangsonParser')
            }
            for (let method of Java.from(this.MojangsonParser.class.getMethods())) {
                let params = method.getParameterTypes()
                let rt = method.getReturnType()
                if (params.length == 1 && "String" == params[0].getSimpleName() && "NBTTagCompound" == rt.getSimpleName()) {
                    this.mpParseMethodName = method.getName()
                }
            }
        } catch (error: any) {
            console.log('Bukkit 物品管理器初始化失败:', error)
            if (global.debug) {
                console.ex(error)
            }
        }
    }
}

export class BukkitItemBuilder implements item.ItemBuilder {
    private itemStack: org.bukkit.inventory.ItemStack
    private itemMeta: org.bukkit.inventory.meta.ItemMeta

    from(itemStack: any): item.ItemBuilder {
        this.itemStack = itemStack
        this.itemMeta = this.itemStack.getItemMeta()
        return this
    }
    create(type: string | number): item.ItemBuilder {
        let material = undefined
        if (typeof type == 'number') {
            type = itemIds[type]
        }
        material = Material[type] || Material[Material['LEGACY_PREFIX'] + type]
        this.itemStack = new ItemStack(material)
        this.itemMeta = this.itemStack.getItemMeta()
        return this
    }
    name(name: string): item.ItemBuilder {
        this.itemMeta.setDisplayName(name)
        return this
    }
    lore(...lores: string[]): item.ItemBuilder {
        this.itemMeta.setLore(lores)
        return this
    }
    amount(amount: number): item.ItemBuilder {
        this.itemStack.setAmount(amount)
        return this
    }
    durability(durability: number): item.ItemBuilder {
        this.itemStack.setDurability(durability)
        return this
    }
    clone() {
        return this.build().clone()
    }
    build() {
        this.itemStack.setItemMeta(this.itemMeta)
        return this.itemStack
    }
}
