declare namespace java {
    namespace awt {
        namespace geom {
            // @ts-ignore
             class GeneralPath extends java.awt.geom.Path2D.Float {
                /**
                 * Constructs a new empty single precision {@code GeneralPath} object
                 * with a default winding rule of {@link #WIND_NON_ZERO}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new <code>GeneralPath</code> object with the specified
                 * winding rule to control operations that require the interior of the
                 * path to be defined.
                 */
                // @ts-ignore
                constructor(rule: number)
                /**
                 * Constructs a new <code>GeneralPath</code> object with the specified
                 * winding rule and the specified initial capacity to store path
                 * coordinates.
                 * This number is an initial guess as to how many path segments
                 * will be added to the path, but the storage is expanded as
                 * needed to store whatever path segments are added.
                 */
                // @ts-ignore
                constructor(rule: number, initialCapacity: number)
                /**
                 * Constructs a new <code>GeneralPath</code> object from an arbitrary
                 * {@link Shape} object.
                 * All of the initial geometry and the winding rule for this path are
                 * taken from the specified <code>Shape</code> object.
                 */
                // @ts-ignore
                constructor(s: java.awt.Shape)
            }
        }
    }
}
