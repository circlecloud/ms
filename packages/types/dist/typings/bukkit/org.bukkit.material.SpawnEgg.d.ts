// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class SpawnEgg extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                constructor(data: number)
                // @ts-ignore
                constructor(type: org.bukkit.entity.EntityType)
                /**
                 * Get the type of entity this egg will spawn.
                 */
                // @ts-ignore
                public getSpawnedType(): org.bukkit.entity.EntityType;
                /**
                 * Set the type of entity this egg will spawn.
                 */
                // @ts-ignore
                public setSpawnedType(type: org.bukkit.entity.EntityType): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.SpawnEgg;
            }
        }
    }
}
