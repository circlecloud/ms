declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Banner extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isWallBanner(): boolean;
                public getAttachedFace(): org.bukkit.block.BlockFace;
                public getFacing(): org.bukkit.block.BlockFace;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.Banner;
            }
        }
    }
}
