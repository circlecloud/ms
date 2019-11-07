declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PoweredRail extends org.bukkit.material.ExtendedRails implements org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isPowered(): boolean;
                /**
                 * Set whether this PoweredRail should be powered or not.
                 */
                // @ts-ignore
                public setPowered(isPowered: boolean): void;
                // @ts-ignore
                public clone(): org.bukkit.material.PoweredRail;
            }
        }
    }
}
