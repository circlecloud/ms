declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Coal {
                constructor()
                constructor(type: org.bukkit.CoalType)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current type of this coal
                 */
                public getType(): org.bukkit.CoalType;
                /**
                 * Sets the type of this coal
                 */
                public setType(type: org.bukkit.CoalType): void;
                public toString(): string;
                public clone(): org.bukkit.material.Coal;
            }
        }
    }
}
