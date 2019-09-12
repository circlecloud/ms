declare namespace org {
    namespace bukkit {
        namespace material {
            class RedstoneTorch {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 */
                public isPowered(): boolean;
                public toString(): string;
                public clone(): org.bukkit.material.RedstoneTorch;
            }
        }
    }
}
