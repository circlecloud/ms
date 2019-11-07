// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class DirectionalContainer extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.DirectionalContainer;
            }
        }
    }
}
