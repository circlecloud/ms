declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PistonExtensionMaterial implements org.bukkit.material.Attachable {
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Checks if this piston extension is sticky, and returns true if so
                 */
                public isSticky(): boolean;
                /**
                 * Sets whether or not this extension is sticky
                 */
                public setSticky(sticky: boolean): void;
                public getAttachedFace(): org.bukkit.block.BlockFace;
                public clone(): org.bukkit.material.PistonExtensionMaterial;
            }
        }
    }
}
