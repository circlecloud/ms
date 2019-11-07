// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                 class Transform extends java.lang.Object {
                    /**
                     * Creates a new {@link Transform} based on the provided {@link Location}.
                     */
                    // @ts-ignore
                    constructor(location: org.spongepowered.api.world.Location)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Extent extent}.
                     * The default position is {@link Vector3d#ZERO}.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Extent extent}
                     * and {@link Vector3d position}.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, position: any /*Vector3d*/)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Extent extent},
                     * {@link Vector3d position}, and {@link Vector3d rotation}.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, position: any /*Vector3d*/, rotation: any /*Vector3d*/)
                    /**
                     * Creates a new {@link Transform} with the provided {@link Location},
                     * {@link Vector3d rotation}, and {@link Vector3d scale}.
                     */
                    // @ts-ignore
                    constructor(location: org.spongepowered.api.world.Location, rotation: any /*Vector3d*/, scale: any /*Vector3d*/)
                    /**
                     * Creates a new {@link Transform}.
                     */
                    // @ts-ignore
                    constructor(extent: org.spongepowered.api.world.extent.Extent, position: any /*Vector3d*/, rotation: any /*Vector3d*/, scale: any /*Vector3d*/)
                    /**
                     * Gets the {@link Location} this transform contains. This is the position
                     * and the extent.
                     */
                    // @ts-ignore
                    public getLocation(): org.spongepowered.api.world.Location;
                    /**
                     * Creates a copy of this transform and sets the {@link Location}. This sets
                     * both the position and the extent.
                     */
                    // @ts-ignore
                    public setLocation(location: org.spongepowered.api.world.Location): org.spongepowered.api.entity.Transform;
                    /**
                     * Gets the {@link Extent} this transform contains.
                     * <p>Note: This can be null if the {@link Extent} is unloaded and garbage
                     * collected.</p>
                     */
                    // @ts-ignore
                    public getExtent(): org.spongepowered.api.world.extent.Extent;
                    /**
                     * Creates a copy of this transform and sets the {@link Extent}.
                     */
                    // @ts-ignore
                    public setExtent(extent: org.spongepowered.api.world.extent.Extent): org.spongepowered.api.entity.Transform;
                    /**
                     * Gets the coordinates of this transform.
                     */
                    // @ts-ignore
                    public getPosition(): any /*Vector3d*/;
                    /**
                     * Creates a copy of this transform while setting the position of the new
                     * one.
                     */
                    // @ts-ignore
                    public setPosition(position: any /*Vector3d*/): org.spongepowered.api.entity.Transform;
                    /**
                     * Gets the rotation of this transform, as a {@link Vector3d}.
                     * <p>The format of the rotation is represented by:</p>
                     * <ul>
                     * <li><code>x -> pitch</code></li>
                     * <li><code>y -> yaw</code></li>
                     * <li><code>z -> roll</code></li>
                     * </ul>
                     */
                    // @ts-ignore
                    public getRotation(): any /*Vector3d*/;
                    /**
                     * Creates a copy of this transform and sets the rotation.
                     * <p>The format of the rotation is represented by:</p>
                     * <ul>
                     * <li><code>x -> pitch</code></li>
                     * <li><code>y -> yaw</code></li>
                     * <li><code>z -> roll</code></li>
                     * </ul>
                     */
                    // @ts-ignore
                    public setRotation(rotation: any /*Quaterniond*/): org.spongepowered.api.entity.Transform;
                    /**
                     * Creates a copy of this transform and sets the rotation as a quaternion.
                     * <p>Quaternions are objectively better than the Euler angles preferred by
                     * Minecraft. This is for compatibility with the flow-math library.</p>
                     */
                    // @ts-ignore
                    public setRotation(rotation: any /*Vector3d*/): org.spongepowered.api.entity.Transform;
                    /**
                     * Returns the rotation as a quaternion.
                     * <p>Quaternions are objectively better than the Euler angles preferred by
                     * Minecraft. This is for compatibility with the flow-math library.</p>
                     */
                    // @ts-ignore
                    public getRotationAsQuaternion(): any /*Quaterniond*/;
                    /**
                     * Gets the pitch component of this transform rotation.
                     */
                    // @ts-ignore
                    public getPitch(): number;
                    /**
                     * Gets the yaw component of this transform rotation.
                     */
                    // @ts-ignore
                    public getYaw(): number;
                    /**
                     * Gets the roll component of this transform rotation.
                     */
                    // @ts-ignore
                    public getRoll(): number;
                    /**
                     * Gets the scale of the transform for each axis.
                     */
                    // @ts-ignore
                    public getScale(): any /*Vector3d*/;
                    /**
                     * Creates a copy of this transform and sets the scale for each axis.
                     */
                    // @ts-ignore
                    public setScale(scale: any /*Vector3d*/): org.spongepowered.api.entity.Transform;
                    /**
                     * "Adds" another transform to this one. This is equivalent to adding the
                     * translation, rotation and scale individually.
                     * <p>Returns the results as a new copy.</p>
                     */
                    // @ts-ignore
                    public add(other: org.spongepowered.api.entity.Transform): org.spongepowered.api.entity.Transform;
                    /**
                     * Adds a translation to this transform.
                     * <p>Returns the results as a new copy.</p>
                     */
                    // @ts-ignore
                    public addTranslation(translation: any /*Vector3d*/): org.spongepowered.api.entity.Transform;
                    /**
                     * Adds a rotation to this transform. Returns the results as a new copy.
                     */
                    // @ts-ignore
                    public addRotation(rotation: any /*Vector3d*/): org.spongepowered.api.entity.Transform;
                    /**
                     * Adds a rotation to this transform.
                     * <p>Quaternions are objectively better than the Euler angles preferred by
                     * Minecraft. This is the preferred method when dealing with rotation
                     * additions. This is for compatibility with the flow-math library.</p>
                     * <p>Returns the results as a new copy.</p>
                     */
                    // @ts-ignore
                    public addRotation(rotation: any /*Quaterniond*/): org.spongepowered.api.entity.Transform;
                    /**
                     * "Adds" a scale to this transform. Scales are multiplicative, so this
                     * actually multiplies the current scale.
                     * <p>Returns the results as a new copy.</p>
                     */
                    // @ts-ignore
                    public addScale(scale: any /*Vector3d*/): org.spongepowered.api.entity.Transform;
                    /**
                     * Returns a matrix representation of this transform.
                     * <p>This includes the position, rotation and scale. To apply the transform
                     * to a vector, use the following:</p>
                     * <blockquote><code>Vector3d original = ...;<br />
                     * Transform transform = ...;<br /><br />
                     * Vector3d transformed =
                     * transform.toMatrix().transform(original.toVector4(1)).toVector3();<br />
                     * }</code></blockquote>
                     * <p>This converts the original 3D vector to 4D by appending 1 as the w
                     * coordinate, applies the transformation, then converts it back to 3D by
                     * dropping the w coordinate.</p>
                     * <p>Using a 4D matrix and a w coordinate with value 1 is what allows for
                     * the position to be included in the transformation applied by the matrix.
                     * </p>
                     */
                    // @ts-ignore
                    public toMatrix(): any /*Matrix4d*/;
                    /**
                     * Returns if this {@link Transform} is still valid.
                     * <p>Examples of invalid Transforms are:</p>
                     * <ul>
                     * <li>A Transform without an {@link Extent}</li>
                     * <li>A Transform whose {@link Extent} object is no longer present</li>
                     * <li>A Transform whose coordinates are illegal (defined by the
                     * implementation)</li>
                     * </ul>
                     */
                    // @ts-ignore
                    public isValid(): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(other: java.lang.Object): boolean;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
