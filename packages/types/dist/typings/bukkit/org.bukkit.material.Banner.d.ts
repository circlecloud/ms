declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Banner extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isWallBanner(): boolean;
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Banner;
            }
        }
    }
}
