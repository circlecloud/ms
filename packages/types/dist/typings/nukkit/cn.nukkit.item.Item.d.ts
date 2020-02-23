declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class Item extends java.lang.Object implements cn.nukkit.block.BlockID, cn.nukkit.item.ItemID {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number, name: string)
                // @ts-ignore
                protected static UNKNOWN_STR: string;
                // @ts-ignore
                public static list: java.lang.Class[];
                // @ts-ignore
                protected block: cn.nukkit.block.Block;
                // @ts-ignore
                protected id: number;
                // @ts-ignore
                protected meta: number;
                // @ts-ignore
                public count: number;
                // @ts-ignore
                protected durability: number;
                // @ts-ignore
                protected name: string;
                // @ts-ignore
                public hasMeta(): boolean;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public static init(): void;
                // @ts-ignore
                public static clearCreativeItems(): void;
                // @ts-ignore
                public static getCreativeItems(): java.util.ArrayList;
                // @ts-ignore
                public static addCreativeItem(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public static removeCreativeItem(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public static isCreativeItem(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public static getCreativeItem(index: number): cn.nukkit.item.Item;
                // @ts-ignore
                public static getCreativeItemIndex(item: cn.nukkit.item.Item): number;
                // @ts-ignore
                public static get(id: number): cn.nukkit.item.Item;
                // @ts-ignore
                public static get(id: number, meta: java.lang.Integer): cn.nukkit.item.Item;
                // @ts-ignore
                public static get(id: number, meta: java.lang.Integer, count: number): cn.nukkit.item.Item;
                // @ts-ignore
                public static get(id: number, meta: java.lang.Integer, count: number, tags: number): cn.nukkit.item.Item;
                // @ts-ignore
                public static fromString(str: string): cn.nukkit.item.Item;
                // @ts-ignore
                public static fromJson(data: java.util.Map): cn.nukkit.item.Item;
                // @ts-ignore
                public static fromStringMultiple(str: string): cn.nukkit.item.Item[];
                // @ts-ignore
                public setCompoundTag(tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item;
                // @ts-ignore
                public setCompoundTag(tags: number): cn.nukkit.item.Item;
                // @ts-ignore
                public getCompoundTag(): number[];
                // @ts-ignore
                public hasCompoundTag(): boolean;
                // @ts-ignore
                public hasCustomBlockData(): boolean;
                // @ts-ignore
                public clearCustomBlockData(): cn.nukkit.item.Item;
                // @ts-ignore
                public setCustomBlockData(compoundTag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item;
                // @ts-ignore
                public getCustomBlockData(): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public hasEnchantments(): boolean;
                // @ts-ignore
                public getEnchantment(id: number): cn.nukkit.item.enchantment.Enchantment;
                // @ts-ignore
                public getEnchantment(id: number): cn.nukkit.item.enchantment.Enchantment;
                // @ts-ignore
                public addEnchantment(enchantments: cn.nukkit.item.enchantment.Enchantment): void;
                // @ts-ignore
                public getEnchantments(): cn.nukkit.item.enchantment.Enchantment[];
                // @ts-ignore
                public hasCustomName(): boolean;
                // @ts-ignore
                public getCustomName(): string;
                // @ts-ignore
                public setCustomName(name: string): cn.nukkit.item.Item;
                // @ts-ignore
                public clearCustomName(): cn.nukkit.item.Item;
                // @ts-ignore
                public getLore(): java.lang.String[];
                // @ts-ignore
                public setLore(lines: string): cn.nukkit.item.Item;
                // @ts-ignore
                public getNamedTagEntry(name: string): cn.nukkit.nbt.tag.Tag;
                // @ts-ignore
                public getNamedTag(): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public setNamedTag(tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.item.Item;
                // @ts-ignore
                public clearNamedTag(): cn.nukkit.item.Item;
                // @ts-ignore
                public static parseCompoundTag(tag: number): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public writeCompoundTag(tag: cn.nukkit.nbt.tag.CompoundTag): number[];
                // @ts-ignore
                public getCount(): number;
                // @ts-ignore
                public setCount(count: number): void;
                // @ts-ignore
                public isNull(): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public canBePlaced(): boolean;
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getDamage(): number;
                // @ts-ignore
                public setDamage(meta: java.lang.Integer): void;
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public getFuelTime(): java.lang.Short;
                // @ts-ignore
                public useOn(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                public useOn(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public isTool(): boolean;
                // @ts-ignore
                public getMaxDurability(): number;
                // @ts-ignore
                public getTier(): number;
                // @ts-ignore
                public isPickaxe(): boolean;
                // @ts-ignore
                public isAxe(): boolean;
                // @ts-ignore
                public isSword(): boolean;
                // @ts-ignore
                public isShovel(): boolean;
                // @ts-ignore
                public isHoe(): boolean;
                // @ts-ignore
                public isShears(): boolean;
                // @ts-ignore
                public isArmor(): boolean;
                // @ts-ignore
                public isHelmet(): boolean;
                // @ts-ignore
                public isChestplate(): boolean;
                // @ts-ignore
                public isLeggings(): boolean;
                // @ts-ignore
                public isBoots(): boolean;
                // @ts-ignore
                public getEnchantAbility(): number;
                // @ts-ignore
                public getAttackDamage(): number;
                // @ts-ignore
                public getArmorPoints(): number;
                // @ts-ignore
                public getToughness(): number;
                // @ts-ignore
                public isUnbreakable(): boolean;
                // @ts-ignore
                public onUse(player: cn.nukkit.Player, ticksUsed: number): boolean;
                // @ts-ignore
                public onRelease(player: cn.nukkit.Player, ticksUsed: number): boolean;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public getDestroySpeed(block: cn.nukkit.block.Block, player: cn.nukkit.Player): number;
                // @ts-ignore
                public onActivate(level: cn.nukkit.level.Level, player: cn.nukkit.Player, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number): boolean;
                /**
                 * Called when a player uses the item on air, for example throwing a projectile.
                 * Returns whether the item was changed, for example count decrease or durability change.
                 */
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                public equals(item: java.lang.Object): boolean;
                // @ts-ignore
                public equals(item: cn.nukkit.item.Item, checkDamage: boolean): boolean;
                // @ts-ignore
                public equals(item: cn.nukkit.item.Item, checkDamage: boolean, checkCompound: boolean): boolean;
                /**
                 * Returns whether the specified item stack has the same ID, damage, NBT and count as this item stack.
                 */
                // @ts-ignore
                public equalsExact(other: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public deepEquals(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public deepEquals(item: cn.nukkit.item.Item, checkDamage: boolean): boolean;
                // @ts-ignore
                public deepEquals(item: cn.nukkit.item.Item, checkDamage: boolean, checkCompound: boolean): boolean;
                // @ts-ignore
                public clone(): cn.nukkit.item.Item;
            }
        }
    }
}
