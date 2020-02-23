declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
            abstract class BlockEntity extends cn.nukkit.level.Position {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public static CHEST: string;
                // @ts-ignore
                public static ENDER_CHEST: string;
                // @ts-ignore
                public static FURNACE: string;
                // @ts-ignore
                public static SIGN: string;
                // @ts-ignore
                public static MOB_SPAWNER: string;
                // @ts-ignore
                public static ENCHANT_TABLE: string;
                // @ts-ignore
                public static SKULL: string;
                // @ts-ignore
                public static FLOWER_POT: string;
                // @ts-ignore
                public static BREWING_STAND: string;
                // @ts-ignore
                public static DAYLIGHT_DETECTOR: string;
                // @ts-ignore
                public static MUSIC: string;
                // @ts-ignore
                public static ITEM_FRAME: string;
                // @ts-ignore
                public static CAULDRON: string;
                // @ts-ignore
                public static BEACON: string;
                // @ts-ignore
                public static PISTON_ARM: string;
                // @ts-ignore
                public static MOVING_BLOCK: string;
                // @ts-ignore
                public static COMPARATOR: string;
                // @ts-ignore
                public static HOPPER: string;
                // @ts-ignore
                public static BED: string;
                // @ts-ignore
                public static JUKEBOX: string;
                // @ts-ignore
                public static SHULKER_BOX: string;
                // @ts-ignore
                public static BANNER: string;
                // @ts-ignore
                public static count: number;
                // @ts-ignore
                public chunk: cn.nukkit.level.format.FullChunk;
                // @ts-ignore
                public name: string;
                // @ts-ignore
                public id: number;
                // @ts-ignore
                public movable: boolean;
                // @ts-ignore
                public closed: boolean;
                // @ts-ignore
                public namedTag: cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                protected lastUpdate: number;
                // @ts-ignore
                protected server: cn.nukkit.Server;
                // @ts-ignore
                protected timing: any /*co.aikar.timings.Timing*/;
                // @ts-ignore
                protected initBlockEntity(): void;
                // @ts-ignore
                public static createBlockEntity(type: string, chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, args: java.lang.Object): cn.nukkit.blockentity.BlockEntity;
                // @ts-ignore
                public static registerBlockEntity(name: string, c: java.lang.Class): boolean;
                // @ts-ignore
                public getSaveId(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public getCleanedNBT(): cn.nukkit.nbt.tag.CompoundTag;
                // @ts-ignore
                public getBlock(): cn.nukkit.block.Block;
                // @ts-ignore
                public abstract isBlockEntityValid(): boolean;
                // @ts-ignore
                public onUpdate(): boolean;
                // @ts-ignore
                public scheduleUpdate(): void;
                // @ts-ignore
                public close(): void;
                // @ts-ignore
                public onBreak(): void;
                // @ts-ignore
                public setDirty(): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public isMovable(): boolean;
                // @ts-ignore
                public static getDefaultCompound(pos: cn.nukkit.math.Vector3, id: string): cn.nukkit.nbt.tag.CompoundTag;
            }
        }
    }
}
