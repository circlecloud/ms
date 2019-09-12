declare namespace org {
    namespace bukkit {
        namespace material {
            class TripwireHook {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                constructor(dir: org.bukkit.block.BlockFace)
                /**
                 * Test if tripwire is connected
                 */
                public isConnected(): boolean;
                /**
                 * Set tripwire connection state
                 */
                public setConnected(connected: boolean): void;
                /**
                 * Test if hook is currently activated
                 */
                public isActivated(): boolean;
                /**
                 * Set hook activated state
                 */
                public setActivated(act: boolean): void;
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getAttachedFace(): org.bukkit.block.BlockFace;
                public isPowered(): boolean;
                public clone(): org.bukkit.material.TripwireHook;
                public toString(): string;
            }
        }
    }
}
