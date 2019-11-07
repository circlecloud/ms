declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Cauldron extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(data: number)
                /**
                 * Check if the cauldron is full.
                 */
                // @ts-ignore
                public isFull(): boolean;
                /**
                 * Check if the cauldron is empty.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Cauldron;
            }
        }
    }
}
