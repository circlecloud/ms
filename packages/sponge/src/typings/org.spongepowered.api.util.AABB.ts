declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class AABB {
                    /**
                     * Constructs a new bounding box from two opposite corners.
                     * Fails the resulting box would be degenerate (a dimension is 0).
                     */
                    constructor(firstCorner: any /*Vector3i*/, secondCorner: any /*Vector3i*/)
                    /**
                     * Constructs a new bounding box from two opposite corners.
                     * Fails the resulting box would be degenerate (a dimension is 0).
                     */
                    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number)
                    /**
                     * Constructs a new bounding box from two opposite corners.
                     * Fails the resulting box would be degenerate (a dimension is 0).
                     */
                    constructor(firstCorner: any /*Vector3d*/, secondCorner: any /*Vector3d*/)
                    /**
                     * The minimum corner of the box.
                     */
                    // @ts-ignore
                    public getMin(): any /*Vector3d*/;
                    /**
                     * The maximum corner of the box.
                     */
                    // @ts-ignore
                    public getMax(): any /*Vector3d*/;
                    /**
                     * Returns the center of the box, halfway between each corner.
                     */
                    // @ts-ignore
                    public getCenter(): any /*Vector3d*/;
                    /**
                     * Gets the size of the box.
                     */
                    // @ts-ignore
                    public getSize(): any /*Vector3d*/;
                    /**
                     * Checks if the bounding box contains a point.
                     */
                    // @ts-ignore
                    public contains(point: any /*Vector3i*/): boolean;
                    /**
                     * Checks if the bounding box contains a point.
                     */
                    // @ts-ignore
                    public contains(point: any /*Vector3d*/): boolean;
                    /**
                     * Checks if the bounding box contains a point.
                     */
                    // @ts-ignore
                    public contains(x: number, y: number, z: number): boolean;
                    /**
                     * Checks if the bounding box intersects another.
                     */
                    // @ts-ignore
                    public intersects(other: org.spongepowered.api.util.AABB): boolean;
                    /**
                     * Tests for intersection between the box and a ray defined by a starting
                     * point and a direction.
                     */
                    // @ts-ignore
                    public intersects(start: any /*Vector3d*/, direction: any /*Vector3d*/): any;
                    /**
                     * Offsets this bounding box by a given amount and returns a new box.
                     */
                    // @ts-ignore
                    public offset(offset: any /*Vector3i*/): org.spongepowered.api.util.AABB;
                    /**
                     * Offsets this bounding box by a given amount and returns a new box.
                     */
                    // @ts-ignore
                    public offset(offset: any /*Vector3d*/): org.spongepowered.api.util.AABB;
                    /**
                     * Offsets this bounding box by a given amount and returns a new box.
                     */
                    // @ts-ignore
                    public offset(x: number, y: number, z: number): org.spongepowered.api.util.AABB;
                    /**
                     * Expands this bounding box by a given amount in both directions and
                     * returns a new box. The expansion is applied half and half to the
                     * minimum and maximum corners.
                     */
                    // @ts-ignore
                    public expand(amount: any /*Vector3i*/): org.spongepowered.api.util.AABB;
                    /**
                     * Expands this bounding box by a given amount in both directions and
                     * returns a new box. The expansion is applied half and half to the
                     * minimum and maximum corners.
                     */
                    // @ts-ignore
                    public expand(amount: any /*Vector3d*/): org.spongepowered.api.util.AABB;
                    /**
                     * Expands this bounding box by a given amount in both directions and
                     * returns a new box. The expansion is applied half and half to the
                     * minimum and maximum corners.
                     */
                    // @ts-ignore
                    public expand(x: number, y: number, z: number): org.spongepowered.api.util.AABB;
                    // @ts-ignore
                    public equals(other: any): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
