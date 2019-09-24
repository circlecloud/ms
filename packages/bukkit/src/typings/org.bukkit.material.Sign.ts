declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Sign implements org.bukkit.material.Attachable {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Check if this sign is attached to a wall
                 */
                public isWallSign(): boolean;
                /**
                 * Gets the face that this block is attached on
                 */
                public getAttachedFace(): org.bukkit.block.BlockFace;
                /**
                 * Gets the direction that this sign is currently facing
                 */
                public getFacing(): org.bukkit.block.BlockFace;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.Sign;
            }
        }
    }
}
