declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Direction {
                    // @ts-ignore
                    public static NORTH: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static NORTH_NORTHEAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static NORTHEAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static EAST_NORTHEAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static EAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static EAST_SOUTHEAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static SOUTHEAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static SOUTH_SOUTHEAST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static SOUTH: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static SOUTH_SOUTHWEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static SOUTHWEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static WEST_SOUTHWEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static WEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static WEST_NORTHWEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static NORTHWEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static NORTH_NORTHWEST: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static UP: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static DOWN: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static NONE: org.spongepowered.api.util.Direction;
                    // @ts-ignore
                    public static values(): org.spongepowered.api.util.Direction[];
                    // @ts-ignore
                    public static valueOf(name: string): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the closest direction from the given vector. If the vector is the
                     * 0-Vector, this method returns {@link #NONE}. If the vector has the same
                     * horizontal and vertical length, a horizontal direction will be returned.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     */
                    // @ts-ignore
                    public static getClosest(vector: any /*Vector3d*/): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the closest direction from the given vector. If the vector is the
                     * 0-Vector, this method returns {@link #NONE}. If the vector has the same
                     * horizontal and vertical length, a horizontal direction will be returned.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     */
                    // @ts-ignore
                    public static getClosest(vector: any /*Vector3d*/, smallestDivision: org.spongepowered.api.util.Direction.Division): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the closest horizontal direction from the given vector. If the
                     * vector is the 0-Vector (ignoring y), this method returns {@link #NONE}.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     */
                    // @ts-ignore
                    public static getClosestHorizontal(vector: any /*Vector3d*/): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the closest horizontal direction from the given vector. If the
                     * vector is the 0-Vector (ignoring y), this method returns {@link #NONE}.
                     * If the vector is halfway between two directions the clockwise next will
                     * be selected.
                     */
                    // @ts-ignore
                    public static getClosestHorizontal(vector: any /*Vector3d*/, smallestDivision: org.spongepowered.api.util.Direction.Division): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the direction associated with the given axis.
                     */
                    // @ts-ignore
                    public static getFromAxis(axis: org.spongepowered.api.util.Axis): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the direction of the axis along the given {@link AxisDirection}.
                     */
                    // @ts-ignore
                    public static getFromAxis(axis: org.spongepowered.api.util.Axis, direction: org.spongepowered.api.util.AxisDirection): org.spongepowered.api.util.Direction;
                    /**
                     * Gets the opposite direction i.e. 180 degrees from this direction.
                     */
                    // @ts-ignore
                    public getOpposite(): org.spongepowered.api.util.Direction;
                    /**
                     * Returns whether the given direction is opposite this.
                     */
                    // @ts-ignore
                    public isOpposite(d: org.spongepowered.api.util.Direction): boolean;
                    /**
                     * Return true if the direction is of a cardinal direction (north, west
                     * east, and south).
                     * <p>This evaluates as false for directions that have a non-zero
                     * Y-component.</p>
                     */
                    // @ts-ignore
                    public isCardinal(): boolean;
                    /**
                     * Return true if the direction is of an ordinal direction (northwest,
                     * southwest, southeast, northeast).
                     */
                    // @ts-ignore
                    public isOrdinal(): boolean;
                    /**
                     * Return true if the direction is of a secondary ordinal direction
                     * (north-northwest, north-northeast, south-southwest, etc.).
                     */
                    // @ts-ignore
                    public isSecondaryOrdinal(): boolean;
                    /**
                     * Return whether Y component is non-zero.
                     */
                    // @ts-ignore
                    public isUpright(): boolean;
                    /**
                     * Returns the direction as a unit offset vector.
                     * This vector is also suitable as a unit direction vector.
                     */
                    // @ts-ignore
                    public asOffset(): any /*Vector3d*/;
                    /**
                     * Returns the direction as a block offset vector.
                     * For secondary ordinals the results are approximated to the nearest
                     * block.
                     * <p>The difference between this offset and {@link #asOffset()} is that
                     * a block offset has unit components instead of unit length.</p>
                     */
                    // @ts-ignore
                    public asBlockOffset(): any /*Vector3i*/;
                }
            }
        }
    }
}
