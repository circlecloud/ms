declare namespace org {
    namespace bukkit {
        namespace util {
            class BoundingBox {
                /**
                 * Creates a new (degenerate) bounding box with all corner coordinates at
                 * <code>0</code>.
                 */
                constructor()
                /**
                 * Creates a new bounding box from the given corner coordinates.
                 */
                constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number)
                /**
                 * Creates a new bounding box using the coordinates of the given vectors as
                 * corners.
                 */
                public static of(corner1: org.bukkit.util.Vector, corner2: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the coordinates of the given locations
                 * as corners.
                 */
                public static of(corner1: org.bukkit.Location, corner2: org.bukkit.Location): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the coordinates of the given blocks as
                 * corners.
                 * <p>
                 * The bounding box will be sized to fully contain both blocks.
                 */
                public static of(corner1: org.bukkit.block.Block, corner2: org.bukkit.block.Block): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new 1x1x1 sized bounding box containing the given block.
                 */
                public static of(block: org.bukkit.block.Block): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the given center and extents.
                 */
                public static of(center: org.bukkit.util.Vector, x: number, y: number, z: number): org.bukkit.util.BoundingBox;
                /**
                 * Creates a new bounding box using the given center and extents.
                 */
                public static of(center: org.bukkit.Location, x: number, y: number, z: number): org.bukkit.util.BoundingBox;
                /**
                 * Resizes this bounding box.
                 */
                public resize(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): org.bukkit.util.BoundingBox;
                /**
                 * Gets the minimum x value.
                 */
                public getMinX(): number;
                /**
                 * Gets the minimum y value.
                 */
                public getMinY(): number;
                /**
                 * Gets the minimum z value.
                 */
                public getMinZ(): number;
                /**
                 * Gets the minimum corner as vector.
                 */
                public getMin(): org.bukkit.util.Vector;
                /**
                 * Gets the maximum x value.
                 */
                public getMaxX(): number;
                /**
                 * Gets the maximum y value.
                 */
                public getMaxY(): number;
                /**
                 * Gets the maximum z value.
                 */
                public getMaxZ(): number;
                /**
                 * Gets the maximum corner as vector.
                 */
                public getMax(): org.bukkit.util.Vector;
                /**
                 * Gets the width of the bounding box in the x direction.
                 */
                public getWidthX(): number;
                /**
                 * Gets the width of the bounding box in the z direction.
                 */
                public getWidthZ(): number;
                /**
                 * Gets the height of the bounding box.
                 */
                public getHeight(): number;
                /**
                 * Gets the volume of the bounding box.
                 */
                public getVolume(): number;
                /**
                 * Gets the x coordinate of the center of the bounding box.
                 */
                public getCenterX(): number;
                /**
                 * Gets the y coordinate of the center of the bounding box.
                 */
                public getCenterY(): number;
                /**
                 * Gets the z coordinate of the center of the bounding box.
                 */
                public getCenterZ(): number;
                /**
                 * Gets the center of the bounding box.
                 */
                public getCenter(): org.bukkit.util.Vector;
                /**
                 * Copies another bounding box.
                 */
                public copy(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box by the given values in the corresponding
                 * directions.
                 * <p>
                 * Negative values will shrink the bounding box in the corresponding
                 * direction. Shrinking will be limited to the point where the affected
                 * opposite faces would meet if the they shrank at uniform speeds.
                 */
                public expand(negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box uniformly by the given values in both positive
                 * and negative directions.
                 * <p>
                 * Negative values will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 */
                public expand(x: number, y: number, z: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box uniformly by the given values in both positive
                 * and negative directions.
                 * <p>
                 * Negative values will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 */
                public expand(expansion: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box uniformly by the given value in all directions.
                 * <p>
                 * A negative value will shrink the bounding box. Shrinking will be limited
                 * to the bounding box's current size.
                 */
                public expand(expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * The magnitude of the direction will scale the expansion. A negative
                 * expansion value will shrink the bounding box in this direction. Shrinking
                 * will be limited to the bounding box's current size.
                 */
                public expand(dirX: number, dirY: number, dirZ: number, expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * The magnitude of the direction will scale the expansion. A negative
                 * expansion value will shrink the bounding box in this direction. Shrinking
                 * will be limited to the bounding box's current size.
                 */
                public expand(direction: org.bukkit.util.Vector, expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the direction specified by the given block
                 * face.
                 * <p>
                 * A negative expansion value will shrink the bounding box in this
                 * direction. Shrinking will be limited to the bounding box's current size.
                 */
                public expand(blockFace: org.bukkit.block.BlockFace, expansion: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * Negative values will expand the bounding box in the negative direction,
                 * positive values will expand it in the positive direction. The magnitudes
                 * of the direction components determine the corresponding amounts of
                 * expansion.
                 */
                public expandDirectional(dirX: number, dirY: number, dirZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box in the specified direction.
                 * <p>
                 * Negative values will expand the bounding box in the negative direction,
                 * positive values will expand it in the positive direction. The magnitude
                 * of the direction vector determines the amount of expansion.
                 */
                public expandDirectional(direction: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 */
                public union(posX: number, posY: number, posZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 */
                public union(position: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain (or border) the specified position.
                 */
                public union(position: org.bukkit.Location): org.bukkit.util.BoundingBox;
                /**
                 * Expands this bounding box to contain both this and the given bounding
                 * box.
                 */
                public union(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox;
                /**
                 * Resizes this bounding box to represent the intersection of this and the
                 * given bounding box.
                 */
                public intersection(other: org.bukkit.util.BoundingBox): org.bukkit.util.BoundingBox;
                /**
                 * Shifts this bounding box by the given amounts.
                 */
                public shift(shiftX: number, shiftY: number, shiftZ: number): org.bukkit.util.BoundingBox;
                /**
                 * Shifts this bounding box by the given amounts.
                 */
                public shift(shift: org.bukkit.util.Vector): org.bukkit.util.BoundingBox;
                /**
                 * Shifts this bounding box by the given amounts.
                 */
                public shift(shift: org.bukkit.Location): org.bukkit.util.BoundingBox;
                /**
                 * Checks if this bounding box overlaps with the given bounding box.
                 * <p>
                 * Bounding boxes that are only intersecting at the borders are not
                 * considered overlapping.
                 */
                public overlaps(other: org.bukkit.util.BoundingBox): boolean;
                /**
                 * Checks if this bounding box overlaps with the bounding box that is
                 * defined by the given corners.
                 * <p>
                 * Bounding boxes that are only intersecting at the borders are not
                 * considered overlapping.
                 */
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
                public contains(position: org.bukkit.util.Vector): boolean;
                /**
                 * Checks if this bounding box fully contains the given bounding box.
                 */
                public contains(other: org.bukkit.util.BoundingBox): boolean;
                /**
                 * Checks if this bounding box fully contains the bounding box that is
                 * defined by the given corners.
                 */
                public contains(min: org.bukkit.util.Vector, max: org.bukkit.util.Vector): boolean;
                /**
                 * Calculates the intersection of this bounding box with the specified line
                 * segment.
                 * <p>
                 * Intersections at edges and corners yield one of the affected block faces
                 * as hit result, but it is not defined which of them.
                 */
                public rayTrace(start: org.bukkit.util.Vector, direction: org.bukkit.util.Vector, maxDistance: number): org.bukkit.util.RayTraceResult;
                public hashCode(): number;
                public equals(obj: any): boolean;
                public toString(): string;
                /**
                 * Creates a copy of this bounding box.
                 */
                public clone(): org.bukkit.util.BoundingBox;
                public serialize(): Map<any, any> /*java.util.Map*/;
                public static deserialize(args: Map<any, any> /*java.util.Map*/): org.bukkit.util.BoundingBox;
            }
        }
    }
}
