// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Dye extends org.bukkit.material.MaterialData implements org.bukkit.material.Colorable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(color: org.bukkit.DyeColor)
                /**
                 * Gets the current color of this dye
                 */
                // @ts-ignore
                public getColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of this dye
                 */
                // @ts-ignore
                public setColor(color: org.bukkit.DyeColor): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Dye;
            }
        }
    }
}
