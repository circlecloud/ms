declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PistonBaseMaterial implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a PistonBaseMaterial.
                 */
                constructor(type: org.bukkit.Material, data: number)
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                public isPowered(): boolean;
                /**
                 * Sets the current state of this piston
                 */
                public setPowered(powered: boolean): void;
                /**
                 * Checks if this piston base is sticky, and returns true if so
                 */
                public isSticky(): boolean;
                public clone(): org.bukkit.material.PistonBaseMaterial;
            }
        }
    }
}
