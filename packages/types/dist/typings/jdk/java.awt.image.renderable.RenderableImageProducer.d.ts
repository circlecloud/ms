declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                // @ts-ignore
                 class RenderableImageProducer extends java.lang.Object {
                    /**
                     * Constructs a new RenderableImageProducer from a RenderableImage
                     * and a RenderContext.
                     */
                    // @ts-ignore
                    constructor(rdblImage: java.awt.image.renderable.RenderableImage, rc: java.awt.image.renderable.RenderContext)
                    /**
                     * Sets a new RenderContext to use for the next startProduction() call.
                     */
                    // @ts-ignore
                    public setRenderContext(rc: java.awt.image.renderable.RenderContext): void;
                    /**
                     * Adds an ImageConsumer to the list of consumers interested in
                     * data for this image.
                     */
                    // @ts-ignore
                    public addConsumer(ic: java.awt.image.ImageConsumer): void;
                    /**
                     * Determine if an ImageConsumer is on the list of consumers
                     * currently interested in data for this image.
                     */
                    // @ts-ignore
                    public isConsumer(ic: java.awt.image.ImageConsumer): boolean;
                    /**
                     * Remove an ImageConsumer from the list of consumers interested in
                     * data for this image.
                     */
                    // @ts-ignore
                    public removeConsumer(ic: java.awt.image.ImageConsumer): void;
                    /**
                     * Adds an ImageConsumer to the list of consumers interested in
                     * data for this image, and immediately starts delivery of the
                     * image data through the ImageConsumer interface.
                     */
                    // @ts-ignore
                    public startProduction(ic: java.awt.image.ImageConsumer): void;
                    /**
                     * Requests that a given ImageConsumer have the image data delivered
                     * one more time in top-down, left-right order.
                     */
                    // @ts-ignore
                    public requestTopDownLeftRightResend(ic: java.awt.image.ImageConsumer): void;
                    /**
                     * The runnable method for this class. This will produce an image using
                     * the current RenderableImage and RenderContext and send it to all the
                     * ImageConsumer currently registered with this class.
                     */
                    // @ts-ignore
                    public run(): void;
                }
            }
        }
    }
}
