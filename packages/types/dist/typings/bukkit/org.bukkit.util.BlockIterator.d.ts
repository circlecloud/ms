declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class BlockIterator extends java.lang.Object {
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                constructor(world: org.bukkit.World, start: org.bukkit.util.Vector, direction: org.bukkit.util.Vector, yOffset: number, maxDistance: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                constructor(loc: org.bukkit.Location, yOffset: number, maxDistance: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                constructor(loc: org.bukkit.Location, yOffset: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                constructor(loc: org.bukkit.Location)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                constructor(entity: org.bukkit.entity.LivingEntity, maxDistance: number)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 */
                // @ts-ignore
                constructor(entity: org.bukkit.entity.LivingEntity)
                /**
                 * Returns true if the iteration has more elements
                 */
                // @ts-ignore
                public hasNext(): boolean;
                /**
                 * Returns the next Block in the trace
                 */
                // @ts-ignore
                public next(): org.bukkit.block.Block;
                // @ts-ignore
                public remove(): void;
            }
        }
    }
}
