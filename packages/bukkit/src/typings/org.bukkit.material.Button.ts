declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Button extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Redstone {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 */
                public isPowered(): boolean;
                /**
                 * Sets the current state of this button
                 */
                public setPowered(bool: boolean): void;
                /**
                 * Gets the face that this block is attached on
                 */
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Sets the direction this button is pointing toward
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.Button;
            }
        }
    }
}
