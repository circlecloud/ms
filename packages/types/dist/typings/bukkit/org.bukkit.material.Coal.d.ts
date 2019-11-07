declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Coal extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.CoalType)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current type of this coal
                 */
                // @ts-ignore
                public getType(): org.bukkit.CoalType;
                /**
                 * Sets the type of this coal
                 */
                // @ts-ignore
                public setType(type: org.bukkit.CoalType): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Coal;
            }
        }
    }
}
