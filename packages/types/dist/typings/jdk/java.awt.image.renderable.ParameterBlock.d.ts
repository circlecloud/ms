// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                 class ParameterBlock extends java.lang.Object {
                    /**
                     * A dummy constructor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a <code>ParameterBlock</code> with a given Vector
                     * of sources.
                     */
                    // @ts-ignore
                    constructor(sources: java.util.Vector)
                    /**
                     * Constructs a <code>ParameterBlock</code> with a given Vector of sources and
                     * Vector of parameters.
                     */
                    // @ts-ignore
                    constructor(sources: java.util.Vector, parameters: java.util.Vector)
                    // @ts-ignore
                    protected sources: java.util.Vector;
                    // @ts-ignore
                    protected parameters: java.util.Vector;
                    /**
                     * Creates a shallow copy of a <code>ParameterBlock</code>.  The source and
                     * parameter Vectors are copied by reference -- additions or
                     * changes will be visible to both versions.
                     */
                    // @ts-ignore
                    public shallowClone(): java.lang.Object;
                    /**
                     * Creates a copy of a <code>ParameterBlock</code>.  The source and parameter
                     * Vectors are cloned, but the actual sources and parameters are
                     * copied by reference.  This allows modifications to the order
                     * and number of sources and parameters in the clone to be invisible
                     * to the original <code>ParameterBlock</code>.  Changes to the shared sources or
                     * parameters themselves will still be visible.
                     */
                    // @ts-ignore
                    public clone(): java.lang.Object;
                    /**
                     * Adds an image to end of the list of sources.  The image is
                     * stored as an object in order to allow new node types in the
                     * future.
                     */
                    // @ts-ignore
                    public addSource(source: java.lang.Object): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Returns a source as a general Object.  The caller must cast it into
                     * an appropriate type.
                     */
                    // @ts-ignore
                    public getSource(index: number): java.lang.Object;
                    /**
                     * Replaces an entry in the list of source with a new source.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public setSource(source: java.lang.Object, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Returns a source as a <code>RenderedImage</code>.  This method is
                     * a convenience method.
                     * An exception will be thrown if the source is not a RenderedImage.
                     */
                    // @ts-ignore
                    public getRenderedSource(index: number): java.awt.image.RenderedImage;
                    /**
                     * Returns a source as a RenderableImage.  This method is a
                     * convenience method.
                     * An exception will be thrown if the sources is not a RenderableImage.
                     */
                    // @ts-ignore
                    public getRenderableSource(index: number): java.awt.image.renderable.RenderableImage;
                    /**
                     * Returns the number of source images.
                     */
                    // @ts-ignore
                    public getNumSources(): number;
                    /**
                     * Returns the entire Vector of sources.
                     */
                    // @ts-ignore
                    public getSources(): java.util.Vector;
                    /**
                     * Sets the entire Vector of sources to a given Vector.
                     */
                    // @ts-ignore
                    public setSources(sources: java.util.Vector): void;
                    /**
                     * Clears the list of source images.
                     */
                    // @ts-ignore
                    public removeSources(): void;
                    /**
                     * Returns the number of parameters (not including source images).
                     */
                    // @ts-ignore
                    public getNumParameters(): number;
                    /**
                     * Returns the entire Vector of parameters.
                     */
                    // @ts-ignore
                    public getParameters(): java.util.Vector;
                    /**
                     * Sets the entire Vector of parameters to a given Vector.
                     */
                    // @ts-ignore
                    public setParameters(parameters: java.util.Vector): void;
                    /**
                     * Clears the list of parameters.
                     */
                    // @ts-ignore
                    public removeParameters(): void;
                    /**
                     * Adds an object to the list of parameters.
                     */
                    // @ts-ignore
                    public add(obj: java.lang.Object): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Byte to the list of parameters.
                     */
                    // @ts-ignore
                    public add(b: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Character to the list of parameters.
                     */
                    // @ts-ignore
                    public add(c: string): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Short to the list of parameters.
                     */
                    // @ts-ignore
                    public add(s: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Integer to the list of parameters.
                     */
                    // @ts-ignore
                    public add(i: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Long to the list of parameters.
                     */
                    // @ts-ignore
                    public add(l: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Float to the list of parameters.
                     */
                    // @ts-ignore
                    public add(f: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Adds a Double to the list of parameters.
                     */
                    // @ts-ignore
                    public add(d: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(obj: java.lang.Object, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with a Byte.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(b: number, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with a Character.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(c: string, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with a Short.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(s: number, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with an Integer.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(i: number, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with a Long.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(l: number, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with a Float.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(f: number, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Replaces an Object in the list of parameters with a Double.
                     * If the index lies beyond the current source list,
                     * the list is extended with nulls as needed.
                     */
                    // @ts-ignore
                    public set(d: number, index: number): java.awt.image.renderable.ParameterBlock;
                    /**
                     * Gets a parameter as an object.
                     */
                    // @ts-ignore
                    public getObjectParameter(index: number): java.lang.Object;
                    /**
                     * A convenience method to return a parameter as a byte.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Byte</code>.
                     */
                    // @ts-ignore
                    public getByteParameter(index: number): number;
                    /**
                     * A convenience method to return a parameter as a char.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Character</code>.
                     */
                    // @ts-ignore
                    public getCharParameter(index: number): string;
                    /**
                     * A convenience method to return a parameter as a short.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Short</code>.
                     */
                    // @ts-ignore
                    public getShortParameter(index: number): number;
                    /**
                     * A convenience method to return a parameter as an int.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not an <code>Integer</code>.
                     */
                    // @ts-ignore
                    public getIntParameter(index: number): number;
                    /**
                     * A convenience method to return a parameter as a long.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Long</code>.
                     */
                    // @ts-ignore
                    public getLongParameter(index: number): number;
                    /**
                     * A convenience method to return a parameter as a float.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Float</code>.
                     */
                    // @ts-ignore
                    public getFloatParameter(index: number): number;
                    /**
                     * A convenience method to return a parameter as a double.  An
                     * exception is thrown if the parameter is
                     * <code>null</code> or not a <code>Double</code>.
                     */
                    // @ts-ignore
                    public getDoubleParameter(index: number): number;
                    /**
                     * Returns an array of Class objects describing the types
                     * of the parameters.
                     */
                    // @ts-ignore
                    public getParamClasses(): java.lang.Class[];
                }
            }
        }
    }
}
