declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class DiscreteTransform3 {
                    // @ts-ignore
                    public static IDENTITY: org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns the matrix representation of the transform.
                     * It is 4D to allow it to include a translation.
                     */
                    // @ts-ignore
                    public getMatrix(): any /*Matrix4d*/;
                    /**
                     * Transforms a vector using this transforms.
                     */
                    // @ts-ignore
                    public transform(vector: any /*Vector3i*/): any /*Vector3i*/;
                    /**
                     * Transform a vector represented as a pair of
                     * coordinates using this transform.
                     */
                    // @ts-ignore
                    public transform(x: number, y: number, z: number): any /*Vector3i*/;
                    /**
                     * Transforms the x coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     */
                    // @ts-ignore
                    public transformX(vector: any /*Vector3i*/): number;
                    /**
                     * Transforms the x coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     */
                    // @ts-ignore
                    public transformX(x: number, y: number, z: number): number;
                    /**
                     * Transforms the y coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     */
                    // @ts-ignore
                    public transformY(vector: any /*Vector3i*/): number;
                    /**
                     * Transforms the y coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     */
                    // @ts-ignore
                    public transformY(x: number, y: number, z: number): number;
                    /**
                     * Transforms the z coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     */
                    // @ts-ignore
                    public transformZ(vector: any /*Vector3i*/): number;
                    /**
                     * Transforms the z coordinate of a vector
                     * using this transform. Only creates a new
                     * object on the first call.
                     */
                    // @ts-ignore
                    public transformZ(x: number, y: number, z: number): number;
                    /**
                     * Inverts the transform and returns it as a new transform.
                     */
                    // @ts-ignore
                    public invert(): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a transform that is the composition of this transform and the
                     * given transform. The result will apply this transformation after the
                     * given one.
                     */
                    // @ts-ignore
                    public compose(that: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a transform that is the composition of the given transform with
                     * this transform. The result will apply the given transformation after this
                     * one.
                     */
                    // @ts-ignore
                    public andThen(that: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a translation to this transform and returns
                     * it as a new transform.
                     */
                    // @ts-ignore
                    public withTranslation(vector: any /*Vector3i*/): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a translation to this transform and returns
                     * it as a new transform.
                     */
                    // @ts-ignore
                    public withTranslation(x: number, y: number, z: number): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a scale factor to this transform and returns
                     * it as a new transform. This factor must be non-zero.
                     */
                    // @ts-ignore
                    public withScale(a: number): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a scale factor for each axis to this transform
                     * and returns it as a new transform. The factors must
                     * be non-zero.
                     */
                    // @ts-ignore
                    public withScale(vector: any /*Vector3i*/): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a scale factor for each axis to this transform
                     * and returns it as a new transform. The factors must
                     * be non-zero.
                     */
                    // @ts-ignore
                    public withScale(x: number, y: number, z: number): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a rotation to this transform, around an axis,
                     * around the origin and returns it as a new transform.
                     * The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}.
                     * The rotation is around the block center, not the corner.
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number, axis: org.spongepowered.api.util.Axis): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a a rotation to this transform, around an axis,
                     * around a given point, and returns it as a new transform.
                     * The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. The block corner flag changes
                     * the point to be the block upper corner instead of the center.
                     */
                    // @ts-ignore
                    public withRotation(quarterTurns: number, axis: org.spongepowered.api.util.Axis, point: any /*Vector3i*/, blockCorner: boolean): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds a a rotation to this transform, around an axis,
                     * around a given point. The rotation is given is half turns.
                     * The actual rotation is {@code halfTurns * 180}. The block corner
                     * flags change the point to be the block corner or edge instead
                     * of the center. When all flags are false, the center is used.
                     * When only one is true the face traversed by the axis of flag is used.
                     * When two are true the edge in the direction of the remaining flag
                     * is used. When all are true the upper corner is used.
                     */
                    // @ts-ignore
                    public withRotation(halfTurns: number, axis: org.spongepowered.api.util.Axis, point: any /*Vector3i*/, blockCornerX: boolean, blockCornerY: boolean, blockCornerZ: boolean): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Adds another transformation to this transformation and
                     * returns int as a new transform.
                     */
                    // @ts-ignore
                    public withTransformation(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform from the given transformation matrix, if the
                     * resulting transform would be discrete.
                     */
                    // @ts-ignore
                    public static of(matrix: any /*Matrix4d*/): any;
                    /**
                     * Returns a new transform representing a translation.
                     */
                    // @ts-ignore
                    public static fromTranslation(vector: any /*Vector3i*/): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a translation.
                     */
                    // @ts-ignore
                    public static fromTranslation(x: number, y: number, z: number): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a scaling.
                     * The scale factor must be non-zero.
                     */
                    // @ts-ignore
                    public static fromScale(a: number): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a scaling on each axis.
                     * The scale factors must be non-zero.
                     */
                    // @ts-ignore
                    public static fromScale(vector: any /*Vector3i*/): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a scaling on each axis.
                     * The scale factors must be non-zero.
                     */
                    // @ts-ignore
                    public static fromScale(x: number, y: number, z: number): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a rotation around an
                     * axis around the origin. The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}.
                     * The rotation is around the block center, not the corner.
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number, axis: org.spongepowered.api.util.Axis): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a rotation around an axis,
                     * around a given point. The rotation is given is quarter turns.
                     * The actual rotation is {@code quarterTurns * 90}. The block corner
                     * flag change the point to be the block corner instead of the center.
                     */
                    // @ts-ignore
                    public static fromRotation(quarterTurns: number, axis: org.spongepowered.api.util.Axis, point: any /*Vector3i*/, blockCorner: boolean): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a rotation around an axis,
                     * around a given point. The rotation is given in half turns.
                     * The actual rotation is {@code halfTurns * 180}. When all flags are
                     * false, the center is used. When only one is true the face traversed
                     * by the axis of flag is used. When two are true the edge in the
                     * direction of the remaining flag is used. When all are true the
                     * upper corner is used.
                     */
                    // @ts-ignore
                    public static fromRotation(halfTurns: number, axis: org.spongepowered.api.util.Axis, point: any /*Vector3i*/, blockCornerX: boolean, blockCornerY: boolean, blockCornerZ: boolean): org.spongepowered.api.util.DiscreteTransform3;
                    /**
                     * Returns a new transform representing a centered rotation of an volume
                     * of blocks. The rotation is given is quarter turns. The actual rotation
                     * is {@code quarterTurns * 90}. Volumes with differing parities on the
                     * axes can only be rotated by multiples of 180 degrees.
                     */
                    // @ts-ignore
                    public static rotationAroundCenter(quarterTurns: number, axis: org.spongepowered.api.util.Axis, size: any /*Vector3i*/): org.spongepowered.api.util.DiscreteTransform3;
                }
            }
        }
    }
}
