// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Sign extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Check if this sign is attached to a wall
                 */
                // @ts-ignore
                public isWallSign(): boolean;
                /**
                 * Gets the face that this block is attached on
                 */
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Gets the direction that this sign is currently facing
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Sign;
            }
        }
    }
}
