declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class BoundingBox extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                /**
                 * Creates a new (degenerate) bounding box with all corner coordinates at
                 * <code>0</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new bounding box from the given corner coordinates.
                 */
                // @ts-ignore
                constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number)
                /**
                 * Creates a new bounding box using the coordinates of the given vectors as
                 * corners.
                 */
                // @ts-ignore
                public static of(corner1: org.bukkit.util.Vector, corner2: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the coordinates of the given locations
                 * as corners.
                 */
                // @ts-ignore
                public static of(corner1: org.bukkit.Location, corner2: org.bukkit.Location): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the coordinates of the given blocks as
                 * corners.
                 * <p>
                 * The bounding box will be sized to fully contain both blocks.
                 */
                // @ts-ignore
                public static of(corner1: org.bukkit.block.Block, corner2: org.bukkit.block.Block): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new 1x1x1 sized bounding box containing the given block.
                 */
                // @ts-ignore
                public static of(block: org.bukkit.block.Block): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the given center and extents.
                 */
                // @ts-ignore
                public static of(center: org.bukkit.util.Vector, x: number, y: number, z: number): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the given center and extents.
                 */
                // @ts-ignore
                public static of(center: org.bukkit.Location, x: number, y: number, z: number): org.bukkit.util.BoundingBox;
                /**
                 * Resizes this bounding box.
                 */
                // @ts-ignore
                public resize(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): org.bukkit.util.BoundingBox;
                /**
                 * Gets the minimum x value.
                 */
                // @ts-ignore
                public getMinX(): number;
                /**
                 * Gets the minimum y value.
                 */
                // @ts-ignore
                public getMinY(): number;
                /**
                 * Gets the minimum z value.
                 */
                // @ts-ignore
                public getMinZ(): number;
                /**
                 * Gets the minimum corner as vector.
                 */
                // @ts-ignore
                public getMin(): org.bukkit.util.Vector;
                /**
                 * Gets the maximum x value.
                 */
                // @ts-ignore
                public getMaxX(): number;
                /**
                 * Gets the maximum y value.
                 */
                // @ts-ignore
                public getMaxY(): number;
                /**
                 * Gets the maximum z value.
                 */
                // @ts-ignore
                public getMaxZ(): number;
                /**
                 * Gets the maximum corner as vector.
                 */
                // @ts-ignore
                public getMax(): org.bukkit.util.Vector;
                /**
                 * Gets the width of the bounding box in the x direction.
                 */
                // @ts-ignore
                public getWidthX(): number;
                /**
                 * Gets the width of the bounding box in the z direction.
                 */
                // @ts-ignore
                public getWidthZ(): number;
                /**
                 * Gets the height of the bounding box.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Gets the volume of the bounding box.
                 */
                // @ts-ignore
                public getVolume(): number;
                /**
                 * Gets the x coordinate of the center of the bounding box.
                 */
                // @ts-ignore
                public getCenterX(): number;
                /**
                 * Gets the y coordinate of the center of the bounding box.
                 */
                // @ts-ignore
                public getCenterY(): number;
                /**
                 * Gets the z coordinate of the center of the bounding box.
                 */
                // @ts-ignore
                public getCenterZ(): number;
                /**
                 * Gets the center of the bounding box.
                 */
                // @ts-ignore
                public getCenter(): org.bukkit.util.Vector;
                /**
                 * Copies another bounding box.
                 */
                // @ts-ignore
                public copy(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box by the given values in the corresponding
                 * directions.
                 * <p>
                 * Negative values will shrink the bounding box in the corresponding
                 * direction. Shrinking will be limited to the point where the affected
                 * opposite faces would meet if the they shrank at uniform speeds.
                 */
                // @ts-ignore
                public expand(negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box uniformly by the given values in both positive
                 * and negative directions.
                 * <p>
                 * Negative values will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 */
                // @ts-ignore
                public expand(x: number, y: number, z: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box uniformly by the given values in both positive
                 * and negative directions.
                 * <p>
                 * Negative values will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 */
                // @ts-ignore
                public expand(expansion: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box uniformly by the given value in all directions.
                 * <p>
                 * A negative value will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 */
                // @ts-ignore
                public expand(expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * The magnitude of the direction will scale the expansion. A negative
                 * expansion value will shrink the bounding box in this direction. Shrinking
                 * will be limited to the bounding box's current size.
                 */
                // @ts-ignore
                public expand(dirX: number, dirY: number, dirZ: number, expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * The magnitude of the direction will scale the expansion. A negative
                 * expansion value will shrink the bounding box in this direction. Shrinking
                 * will be limited to the bounding box's current size.
                 */
                // @ts-ignore
                public expand(direction: org.bukkit.util.Vector, expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the direction specified by the given block
                 * face.
                 * <p>
                 * A negative expansion value will shrink the bounding box in this
                 * direction. Shrinking will be limited to the bounding box's current size.
                 */
                // @ts-ignore
                public expand(blockFace: org.bukkit.block.BlockFace, expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * Negative values will expand the bounding box in the negative direction,
                 * positive values will expand it in the positive direction. The magnitudes
                 * of the direction components determine the corresponding amounts of
                 * expansion.
                 */
                // @ts-ignore
                public expandDirectional(dirX: number, dirY: number, dirZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * Negative values will expand the bounding box in the negative direction,
                 * positive values will expand it in the positive direction. The magnitude
                 * of the direction vector determines the amount of expansion.
                 */
                // @ts-ignore
                public expandDirectional(direction: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 */
                // @ts-ignore
                public union(posX: number, posY: number, posZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 */
                // @ts-ignore
                public union(position: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 */
                // @ts-ignore
                public union(position: org.bukkit.Location): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain both this and the given bounding
                 * box.
                 */
                // @ts-ignore
                public union(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox;
                /**
                 * Resizes this bounding box to represent the intersection of this and the
                 * given bounding box.
                 */
                // @ts-ignore
                public intersection(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox;
                /**
                 * Shifts this bounding box by the given amounts.
                 */
                // @ts-ignore
                public shift(shiftX: number, shiftY: number, shiftZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Shifts this bounding box by the given amounts.
                 */
                // @ts-ignore
                public shift(shift: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Shifts this bounding box by the given amounts.
                 */
                // @ts-ignore
                public shift(shift: org.bukkit.Location): org.bukkit.util.BoundingBox;
                /**
                 * Checks if this bounding box overlaps with the given bounding box.
                 * <p>
                 * Bounding boxes that are only intersecting at the borders are not
                 * considered overlapping.
                 */
                // @ts-ignore
                public overlaps(other: org.bukkit.util.BoundingBox): boolean;
                /**
                 * Checks if this bounding box overlaps with the bounding box that is
                 * defined by the given corners.
                 * <p>
                 * Bounding boxes that are only intersecting at the borders are not
                 * considered overlapping.
                 */
                // @ts-ignore
                public overlaps(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean;
                /**
                 * Checks if this bounding box contains the specified position.
                 * <p>
                 * Positions exactly on the minimum borders of the bounding box are
                 * considered to be inside the bounding box, while positions exactly on the
                 * maximum borders are considered to be outside. This allows bounding boxes
                 * to reside directly next to each other with positions always only residing
                 * in exactly one of them.
                 */
                // @ts-ignore
                public contains(x: number, y: number, z: number): boolean;
                /**
                 * Checks if this bounding box contains the specified position.
                 * <p>
                 * Positions exactly on the minimum borders of the bounding box are
                 * considered to be inside the bounding box, while positions exactly on the
                 * maximum borders are considered to be outside. This allows bounding boxes
                 * to reside directly next to each other with positions always only residing
                 * in exactly one of them.
                 */
                // @ts-ignore
                public contains(position: org.bukkit.util.Vector): boolean;
                /**
                 * Checks if this bounding box fully contains the given bounding box.
                 */
                // @ts-ignore
                public contains(other: org.bukkit.util.BoundingBox): boolean;
                /**
                 * Checks if this bounding box fully contains the bounding box that is
                 * defined by the given corners.
                 */
                // @ts-ignore
                public contains(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean;
                /**
                 * Calculates the intersection of this bounding box with the specified line
                 * segment.
                 * <p>
                 * Intersections at edges and corners yield one of the affected block faces
                 * as hit result, but it is not defined which of them.
                 */
                // @ts-ignore
                public rayTrace(start: org.bukkit.util.Vector, direction: org.bukkit.util.Vector, maxDistance: number): org.bukkit.util.RayTraceResult;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public toString(): string;
                /**
                 * Creates a copy of this bounding box.
                 */
                // @ts-ignore
                public clone(): org.bukkit.util.BoundingBox;
                // @ts-ignore
                public serialize(): java.util.Map;
                // @ts-ignore
                public static deserialize(args: java.util.Map): org.bukkit.util.BoundingBox;
            }
        }
    }
}
