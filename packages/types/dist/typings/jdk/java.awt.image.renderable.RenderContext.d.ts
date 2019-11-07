declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                 class RenderContext extends java.lang.Object {
                    /**
                     * Constructs a RenderContext with a given transform.
                     * The area of interest is supplied as a Shape,
                     * and the rendering hints are supplied as a RenderingHints object.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform, aoi: java.awt.Shape, hints: java.awt.RenderingHints)
                    /**
                     * Constructs a RenderContext with a given transform.
                     * The area of interest is taken to be the entire renderable area.
                     * No rendering hints are used.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform)
                    /**
                     * Constructs a RenderContext with a given transform and rendering hints.
                     * The area of interest is taken to be the entire renderable area.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints)
                    /**
                     * Constructs a RenderContext with a given transform and area of interest.
                     * The area of interest is supplied as a Shape.
                     * No rendering hints are used.
                     */
                    // @ts-ignore
                    constructor(usr2dev: java.awt.geom.AffineTransform, aoi: java.awt.Shape)
                    /**
                     * Gets the rendering hints of this <code>RenderContext</code>.
                     */
                    // @ts-ignore
                    public getRenderingHints(): java.awt.RenderingHints;
                    /**
                     * Sets the rendering hints of this <code>RenderContext</code>.
                     */
                    // @ts-ignore
                    public setRenderingHints(hints: java.awt.RenderingHints): void;
                    /**
                     * Sets the current user-to-device AffineTransform contained
                     * in the RenderContext to a given transform.
                     */
                    // @ts-ignore
                    public setTransform(newTransform: java.awt.geom.AffineTransform): void;
                    /**
                     * Modifies the current user-to-device transform by prepending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [modTransform] x [this]
                     * </pre>
                     */
                    // @ts-ignore
                    public preConcatenateTransform(modTransform: java.awt.geom.AffineTransform): void;
                    /**
                     * Modifies the current user-to-device transform by prepending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [modTransform] x [this]
                     * </pre>
                     * This method does the same thing as the preConcatenateTransform
                     * method.  It is here for backward compatibility with previous releases
                     * which misspelled the method name.
                     */
                    // @ts-ignore
                    public preConcetenateTransform(modTransform: java.awt.geom.AffineTransform): void;
                    /**
                     * Modifies the current user-to-device transform by appending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [this] x [modTransform]
                     * </pre>
                     */
                    // @ts-ignore
                    public concatenateTransform(modTransform: java.awt.geom.AffineTransform): void;
                    /**
                     * Modifies the current user-to-device transform by appending another
                     * transform.  In matrix notation the operation is:
                     * <pre>
                     * [this] = [this] x [modTransform]
                     * </pre>
                     * This method does the same thing as the concatenateTransform
                     * method.  It is here for backward compatibility with previous releases
                     * which misspelled the method name.
                     */
                    // @ts-ignore
                    public concetenateTransform(modTransform: java.awt.geom.AffineTransform): void;
                    /**
                     * Gets the current user-to-device AffineTransform.
                     */
                    // @ts-ignore
                    public getTransform(): java.awt.geom.AffineTransform;
                    /**
                     * Sets the current area of interest.  The old area is discarded.
                     */
                    // @ts-ignore
                    public setAreaOfInterest(newAoi: java.awt.Shape): void;
                    /**
                     * Gets the ares of interest currently contained in the
                     * RenderContext.
                     */
                    // @ts-ignore
                    public getAreaOfInterest(): java.awt.Shape;
                    /**
                     * Makes a copy of a RenderContext. The area of interest is copied
                     * by reference.  The usr2dev AffineTransform and hints are cloned,
                     * while the area of interest is copied by reference.
                     */
                    // @ts-ignore
                    public clone(): java.lang.Object;
                }
            }
        }
    }
}
