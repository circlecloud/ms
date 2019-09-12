declare namespace org {
    namespace bukkit {
        namespace material {
            class Cauldron {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                constructor(data: number)
                /**
                 * Check if the cauldron is full.
                 */
                public isFull(): boolean;
                /**
                 * Check if the cauldron is empty.
                 */
                public isEmpty(): boolean;
                public toString(): string;
                public clone(): org.bukkit.material.Cauldron;
            }
        }
    }
}
