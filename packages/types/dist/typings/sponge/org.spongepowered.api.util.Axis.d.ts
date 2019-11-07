// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Axis extends java.lang.Enum implements org.spongepowered.api.util.Cycleable {
                    // @ts-ignore
                    public static X: org.spongepowered.api.util.Axis;
                    // @ts-ignore
                    public static Y: org.spongepowered.api.util.Axis;
                    // @ts-ignore
                    public static Z: org.spongepowered.api.util.Axis;
                    // @ts-ignore
                    public static values(): org.spongepowered.api.util.Axis[];
                    // @ts-ignore
                    public static valueOf(name: string): org.spongepowered.api.util.Axis;
                    /**
                     * Gets the closest horizontal direction from the given vector. If the
                     * vector is the 0-Vector, this method returns {@link #X}. If the vector has
                     * the same length in a horizontal and vertical direction, a horizontal axis
                     * will be returned. If the vector has the same length in x and in z
                     * direction {@link #X} will be returned.
                     */
                    // @ts-ignore
                    public static getClosest(vector: any /*Vector3d*/): org.spongepowered.api.util.Axis;
                    /**
                     * Returns whether the given vector is along this axis.
                     */
                    // @ts-ignore
                    public isVectorAlongAxis(vector: any /*Vector3d*/): boolean;
                    /**
                     * Gets the component of the vector denoted by this axis.
                     */
                    // @ts-ignore
                    public getComponent(vector3d: any /*Vector3d*/): number;
                    /**
                     * Gets the direction of the vector's component denoted by this axis.
                     */
                    // @ts-ignore
                    public getDirection(vector3d: any /*Vector3d*/): org.spongepowered.api.util.AxisDirection;
                    /**
                     * Gets the Vector3d backing this axis.
                     */
                    // @ts-ignore
                    public toVector3d(): any /*Vector3d*/;
                    /**
                     * Gets the Vector3d with the given {@link AxisDirection}.
                     */
                    // @ts-ignore
                    public toVector3dWithDirection(axisDirection: org.spongepowered.api.util.AxisDirection): any /*Vector3d*/;
                    // @ts-ignore
                    public cycleNext(): org.spongepowered.api.util.Axis;
                }
            }
        }
    }
}
