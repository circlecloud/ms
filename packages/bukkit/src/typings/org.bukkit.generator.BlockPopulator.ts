declare namespace org {
    namespace bukkit {
        namespace generator {
            abstract class BlockPopulator {
                constructor()
                /**
                 * Populates an area of blocks at or around the given chunk.
                 * <p>
                 * The chunks on each side of the specified chunk must already exist; that
                 * is, there must be one north, east, south and west of the specified
                 * chunk. The "corner" chunks may not exist, in which scenario the
                 * populator should record any changes required for those chunks and
                 * perform the changes when they are ready.
                 */
                public abstract populate(world: org.bukkit.World, random: any, source: org.bukkit.Chunk): void;
            }
        }
    }
}
