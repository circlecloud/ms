declare namespace org {
    namespace bukkit {
        namespace material {
            class Lever {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 */
                public isPowered(): boolean;
                /**
                 * Set this lever to be powered or not.
                 */
                public setPowered(isPowered: boolean): void;
                /**
                 * Gets the face that this block is attached on
                 */
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Sets the direction this lever is pointing in
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.Lever;
            }
        }
    }
}
