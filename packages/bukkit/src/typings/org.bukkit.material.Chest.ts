declare namespace org {
    namespace bukkit {
        namespace material {
            class Chest {
                constructor()
                /**
                 * Instantiate a chest facing in a particular direction.
                 */
                constructor(direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public clone(): org.bukkit.material.Chest;
            }
        }
    }
}
