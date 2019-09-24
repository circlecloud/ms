declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Sandstone extends org.bukkit.material.MaterialData {
                constructor()
                constructor(type: org.bukkit.SandstoneType)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Gets the current type of this sandstone
                 */
                public getType(): org.bukkit.SandstoneType;
                /**
                 * Sets the type of this sandstone
                 */
                public setType(type: org.bukkit.SandstoneType): void;
                public toString(): string;
                public clone(): org.bukkit.material.Sandstone;
            }
        }
    }
}
