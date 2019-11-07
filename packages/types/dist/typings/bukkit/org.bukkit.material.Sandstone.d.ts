declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Sandstone extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.SandstoneType)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current type of this sandstone
                 */
                // @ts-ignore
                public getType(): org.bukkit.SandstoneType;
                /**
                 * Sets the type of this sandstone
                 */
                // @ts-ignore
                public setType(type: org.bukkit.SandstoneType): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Sandstone;
            }
        }
    }
}
