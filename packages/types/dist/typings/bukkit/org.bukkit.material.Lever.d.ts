declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Lever extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 */
                // @ts-ignore
                public isPowered(): boolean;
                /**
                 * Set this lever to be powered or not.
                 */
                // @ts-ignore
                public setPowered(isPowered: boolean): void;
                /**
                 * Gets the face that this block is attached on
                 */
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Sets the direction this lever is pointing in
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Lever;
            }
        }
    }
}
