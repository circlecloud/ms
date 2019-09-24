declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ItemSpawnEvent {
                    constructor(spawnee: org.bukkit.entity.Item, loc: org.bukkit.Location)
                    constructor(spawnee: org.bukkit.entity.Item)
                    public getEntity(): org.bukkit.entity.Item;
                }
            }
        }
    }
}
