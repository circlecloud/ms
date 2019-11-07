declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class TripwireHook extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(dir: org.bukkit.block.BlockFace)
                /**
                 * Test if tripwire is connected
                 */
                // @ts-ignore
                public isConnected(): boolean;
                /**
                 * Set tripwire connection state
                 */
                // @ts-ignore
                public setConnected(connected: boolean): void;
                /**
                 * Test if hook is currently activated
                 */
                // @ts-ignore
                public isActivated(): boolean;
                /**
                 * Set hook activated state
                 */
                // @ts-ignore
                public setActivated(act: boolean): void;
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public isPowered(): boolean;
                // @ts-ignore
                public clone(): org.bukkit.material.TripwireHook;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
