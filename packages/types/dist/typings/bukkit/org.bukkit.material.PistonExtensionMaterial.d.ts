// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PistonExtensionMaterial extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Checks if this piston extension is sticky, and returns true if so
                 */
                // @ts-ignore
                public isSticky(): boolean;
                /**
                 * Sets whether or not this extension is sticky
                 */
                // @ts-ignore
                public setSticky(sticky: boolean): void;
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public clone(): org.bukkit.material.PistonExtensionMaterial;
            }
        }
    }
}
