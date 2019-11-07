declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PistonBaseMaterial extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a PistonBaseMaterial.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public isPowered(): boolean;
                /**
                 * Sets the current state of this piston
                 */
                // @ts-ignore
                public setPowered(powered: boolean): void;
                /**
                 * Checks if this piston base is sticky, and returns true if so
                 */
                // @ts-ignore
                public isSticky(): boolean;
                // @ts-ignore
                public clone(): org.bukkit.material.PistonBaseMaterial;
            }
        }
    }
}
