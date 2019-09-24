declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Pumpkin extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                constructor()
                /**
                 * Instantiate a pumpkin facing in a particular direction.
                 */
                constructor(direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isLit(): boolean;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Pumpkin;
            }
        }
    }
}
