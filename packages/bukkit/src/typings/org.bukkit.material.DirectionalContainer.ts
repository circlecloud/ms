declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class DirectionalContainer implements org.bukkit.material.Directional {
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.DirectionalContainer;
            }
        }
    }
}
