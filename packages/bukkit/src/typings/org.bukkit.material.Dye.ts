declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Dye extends org.bukkit.material.MaterialData implements org.bukkit.material.Colorable {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                constructor(color: org.bukkit.DyeColor)
                /**
                 * Gets the current color of this dye
                 */
                public getColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of this dye
                 */
                public setColor(color: org.bukkit.DyeColor): void;
                public toString(): string;
                public clone(): org.bukkit.material.Dye;
            }
        }
    }
}
