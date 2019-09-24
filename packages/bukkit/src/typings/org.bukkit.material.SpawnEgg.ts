declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class SpawnEgg {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                constructor(data: number)
                constructor(type: org.bukkit.entity.EntityType)
                /**
                 * Get the type of entity this egg will spawn.
                 */
                public getSpawnedType(): org.bukkit.entity.EntityType;
                /**
                 * Set the type of entity this egg will spawn.
                 */
                public setSpawnedType(type: org.bukkit.entity.EntityType): void;
                public toString(): string;
                public clone(): org.bukkit.material.SpawnEgg;
            }
        }
    }
}
