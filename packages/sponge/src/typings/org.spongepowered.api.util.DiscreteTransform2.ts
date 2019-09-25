declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class DiscreteTransform2 {
                    // @ts-ignore
                    public static IDENTITY: org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns the matrix representation of the transform. It is 3D to allow it
                     * to include a translation.
                     */
                    // @ts-ignore
                    public getMatrix(): any /*Matrix3d*/;
                    /**
                     * Transforms a vector using this transforms.
                     */
                    // @ts-ignore
                    public transform(vector: any /*Vector2i*/): any /*Vector2i*/;
                    /**
                     * Transform a vector represented as a pair of coordinates using this
                     * transform.
                     */
                    // @ts-ignore
                    public transform(x: number, y: number): any /*Vector2i*/;
                    /**
                     * Transforms the x coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     */
                    // @ts-ignore
                    public transformX(vector: any /*Vector2i*/): number;
                    /**
                     * Transforms the x coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     */
                    // @ts-ignore
                    public transformX(x: number, y: number): number;
                    /**
                     * Transforms the y coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     */
                    // @ts-ignore
                    public transformY(vector: any /*Vector2i*/): number;
                    /**
                     * Transforms the y coordinate of a vector using this transform. Only
                     * creates a new object on the first call.
                     */
                    // @ts-ignore
                    public transformY(x: number, y: number): number;
                    /**
                     * Inverts the transform and returns it as a new transform.
                     */
                    // @ts-ignore
                    public invert(): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a transform that is the composition of this transform and the
                     * given transform. The result will apply this transformation after the
                     * given one.
                     */
                    // @ts-ignore
                    public compose(that: org.spongepowered.api.util.DiscreteTransform2): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a transform that is the composition of the given transform with
                     * this transform. The result will apply the given transformation after
                     * this one.
                     */
                    // @ts-ignore
                    public andThen(that: org.spongepowered.api.util.DiscreteTransform2): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a translation to this transform and returns it as a new transform.
                     */
                    // @ts-ignore
                    public withTranslation(vector: any /*Vector2i*/): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a translation to this transform and returns it as a new transform.
                     */
                    // @ts-ignore
                    public withTranslation(x: number, y: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a scale factor to this transform and returns it as a new transform.
                     * This factor must be non-zero.
                     */
                    // @ts-ignore
                    public withScale(a: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a scale factor for each axis to this transform and returns it as a
                     * new transform. The factors must be non-zero.
                     */
                    // @ts-ignore
                    public withScale(vector: any /*Vector2i*/): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a scale factor for each axis to this transform and returns it as a
                     * new transform. The factors must be non-zero.
                     */
                    // @ts-ignore
                    public withScale(x: number, y: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a rotation to this transform, in the xy plane, around the origin and
                     * returns it as a new transform. The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}. The rotation is around
                     * the block center, not the corner.
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a a rotation to this transform, in the xy plane, around a given
                     * point, and returns it as a new transform. The rotation is given is
                     * quarter turns. The actual rotation is {@code quarterTurns * 90}. The tile
                     * corner flag changes the point to be the tile upper corner instead of the
                     * center.
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number, point: any /*Vector2i*/, tileCorner: boolean): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds a a rotation to this transform, in the xy plane, around a given
                     * point, and returns it as a new transform. The rotation is given is half
                     * turns. The actual rotation is {@code halfTurns * 180}. The tile corner
                     * flags change the point to be the tile corner or edge instead of the
                     * center. When both flags are false, the center is used. When only one is
                     * true the edge on the opposite axis to the flag is used. When both are
                     * true the upper corner is used.
                     */
                    // @ts-ignore
                    public withRotation(halfTurns: number, point: any /*Vector2i*/, tileCornerX: boolean, tileCornerY: boolean): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Adds another transformation to this transformation and returns int as a
                     * new transform.
                     */
                    // @ts-ignore
                    public withTransformation(transform: org.spongepowered.api.util.DiscreteTransform2): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform from the given transformation matrix, if the
                     * resulting transform would be discrete.
                     */
                    // @ts-ignore
                    public static of(matrix: any /*Matrix3d*/): any;
                    /**
                     * Returns a new transform representing a translation.
                     */
                    // @ts-ignore
                    public static fromTranslation(vector: any /*Vector2i*/): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a translation.
                     */
                    // @ts-ignore
                    public static fromTranslation(x: number, y: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a scaling.
                     * The scale factor must be non-zero.
                     */
                    // @ts-ignore
                    public static fromScale(a: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a scaling on each axis. The scale
                     * factors must be non-zero.
                     */
                    // @ts-ignore
                    public static fromScale(vector: any /*Vector2i*/): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a scaling on each axis. The scale
                     * factors must be non-zero.
                     */
                    // @ts-ignore
                    public static fromScale(x: number, y: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a rotation in the xy plane around
                     * the origin. The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. The rotation is around the block center,
                     * not the corner.
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a rotation in the xy plane, around a
                     * given point. The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. The tile corner flag change the point to be
                     * the tile corner instead of the center.
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number, point: any /*Vector2i*/, tileCorner: boolean): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a rotation in the xy plane, around a
                     * given point. The rotation is given is half turns. The actual rotation is
                     * {@code halfTurns * 180}. The tile corner flags change the point to be the
                     * tile corner or edge instead of the center. When both flags are false, the
                     * center is used. When only one is true the edge on the opposite axis to
                     * the flag is used. When both are true the upper corner is used.
                     */
                    // @ts-ignore
                    public static fromRotation(halfTurns: number, point: any /*Vector2i*/, tileCornerX: boolean, tileCornerY: boolean): org.spongepowered.api.util.DiscreteTransform2;
                    /**
                     * Returns a new transform representing a centered rotation of an area of
                     * tiles. The rotation is given is quarter turns. The actual rotation is
                     * {@code quarterTurns * 90}. Areas with differing parities on the axes can
                     * only be rotated by multiples of 180 degrees.
                     */
                    // @ts-ignore
                    public static rotationAroundCenter(quarterTurns: number, size: any /*Vector2i*/): org.spongepowered.api.util.DiscreteTransform2;
                }
            }
        }
    }
}
