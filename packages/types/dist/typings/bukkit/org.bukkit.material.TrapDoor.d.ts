// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class TrapDoor extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Openable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isOpen(): boolean;
                // @ts-ignore
                public setOpen(isOpen: boolean): void;
                /**
                 * Test if trapdoor is inverted
                 */
                // @ts-ignore
                public isInverted(): boolean;
                /**
                 * Set trapdoor inverted state
                 */
                // @ts-ignore
                public setInverted(inv: boolean): void;
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.TrapDoor;
            }
        }
    }
}
