declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
             class EntityHuman extends cn.nukkit.entity.EntityHumanType {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public static DATA_PLAYER_FLAG_SLEEP: number;
                // @ts-ignore
                public static DATA_PLAYER_FLAG_DEAD: number;
                // @ts-ignore
                public static DATA_PLAYER_FLAGS: number;
                // @ts-ignore
                public static DATA_PLAYER_BED_POSITION: number;
                // @ts-ignore
                public static DATA_PLAYER_BUTTON_TEXT: number;
                // @ts-ignore
                protected uuid: java.util.UUID;
                // @ts-ignore
                protected rawUUID: number[];
                // @ts-ignore
                protected skin: cn.nukkit.entity.data.Skin;
                // @ts-ignore
                public getWidth(): number;
                // @ts-ignore
                public getLength(): number;
                // @ts-ignore
                public getHeight(): number;
                // @ts-ignore
                public getEyeHeight(): number;
                // @ts-ignore
                protected getBaseOffset(): number;
                // @ts-ignore
                public getNetworkId(): number;
                // @ts-ignore
                public getSkin(): cn.nukkit.entity.data.Skin;
                // @ts-ignore
                public getUniqueId(): java.util.UUID;
                // @ts-ignore
                public getRawUniqueId(): number[];
                // @ts-ignore
                public setSkin(skin: cn.nukkit.entity.data.Skin): void;
                // @ts-ignore
                protected initEntity(): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public spawnTo(player: cn.nukkit.Player): void;
                // @ts-ignore
                public despawnFrom(player: cn.nukkit.Player): void;
                // @ts-ignore
                public close(): void;
            }
        }
    }
}
