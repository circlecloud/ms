declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PoweredRail extends org.bukkit.material.ExtendedRails implements org.bukkit.material.Redstone {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isPowered(): boolean;
                /**
                 * Set whether this PoweredRail should be powered or not.
                 */
                public setPowered(isPowered: boolean): void;
                public clone(): org.bukkit.material.PoweredRail;
            }
        }
    }
}
