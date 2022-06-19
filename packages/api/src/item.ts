import { injectable } from '@ccms/container'

export namespace item {
    @injectable()
    export abstract class Item {
        abstract builder(): ItemBuilder
        abstract toJson(item: any): string
        abstract fromJSON(json: string): any
    }
    export interface ItemBuilder {
        from(item: any): ItemBuilder
        create(type: string | number): ItemBuilder
        name(name: string): ItemBuilder
        lore(...lores: string[]): ItemBuilder
        amount(amount: number): ItemBuilder
        durability(durability: number): ItemBuilder
        clone(): any
        build(): any
    }
}
