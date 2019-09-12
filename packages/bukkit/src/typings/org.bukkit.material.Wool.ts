declare namespace org {
    namespace bukkit {
        namespace material {
            class Wool {
                constructor()
                constructor(color: org.bukkit.DyeColor)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current color of this dye
                 */
                public getColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of this dye
                 */
                public setColor(color: org.bukkit.DyeColor): void;
                public toString(): string;
                public clone(): org.bukkit.material.Wool;
            }
        }
    }
}
