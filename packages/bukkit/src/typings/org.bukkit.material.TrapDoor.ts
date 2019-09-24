declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class TrapDoor implements org.bukkit.material.Openable {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isOpen(): boolean;
                public setOpen(isOpen: boolean): void;
                /**
                 * Test if trapdoor is inverted
                 */
                public isInverted(): boolean;
                /**
                 * Set trapdoor inverted state
                 */
                public setInverted(inv: boolean): void;
                public getAttachedFace(): org.bukkit.block.BlockFace;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public toString(): string;
                public clone(): org.bukkit.material.TrapDoor;
            }
        }
    }
}
