declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class RedstoneWire extends org.bukkit.material.MaterialData implements org.bukkit.material.Redstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 */
                // @ts-ignore
                public isPowered(): boolean;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.RedstoneWire;
            }
        }
    }
}
