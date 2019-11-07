// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class NetherWarts extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(state: org.bukkit.NetherWartsState)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current growth state of this nether wart
                 */
                // @ts-ignore
                public getState(): org.bukkit.NetherWartsState;
                /**
                 * Sets the growth state of this nether wart
                 */
                // @ts-ignore
                public setState(state: org.bukkit.NetherWartsState): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.NetherWarts;
            }
        }
    }
}
