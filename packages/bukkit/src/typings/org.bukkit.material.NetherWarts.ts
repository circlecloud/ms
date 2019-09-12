declare namespace org {
    namespace bukkit {
        namespace material {
            class NetherWarts {
                constructor()
                constructor(state: org.bukkit.NetherWartsState)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current growth state of this nether wart
                 */
                public getState(): org.bukkit.NetherWartsState;
                /**
                 * Sets the growth state of this nether wart
                 */
                public setState(state: org.bukkit.NetherWartsState): void;
                public toString(): string;
                public clone(): org.bukkit.material.NetherWarts;
            }
        }
    }
}
