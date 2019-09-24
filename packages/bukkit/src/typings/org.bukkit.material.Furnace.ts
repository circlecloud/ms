declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Furnace {
                constructor()
                /**
                 * Instantiate a furnace facing in a particular direction.
                 */
                constructor(direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public clone(): org.bukkit.material.Furnace;
            }
        }
    }
}
