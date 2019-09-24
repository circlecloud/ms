declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class BlockIterator {
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                constructor(world: org.bukkit.World, start: org.bukkit.util.Vector, direction: org.bukkit.util.Vector, yOffset: number, maxDistance: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                constructor(loc: org.bukkit.Location, yOffset: number, maxDistance: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                constructor(loc: org.bukkit.Location, yOffset: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                constructor(loc: org.bukkit.Location)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                constructor(entity: org.bukkit.entity.LivingEntity, maxDistance: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                constructor(entity: org.bukkit.entity.LivingEntity)
                /**
                 * Returns true if the iteration has more elements
                 */
                public hasNext(): boolean;
                /**
                 * Returns the next Block in the trace
                 */
                public next(): org.bukkit.block.Block;
                public remove(): void;
            }
        }
    }
}
