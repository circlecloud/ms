declare namespace java {
    namespace awt {
        // @ts-ignore
         class MediaTracker extends java.lang.Object {
            /**
             * Creates a media tracker to track images for a given component.
             */
            // @ts-ignore
            constructor(comp: java.awt.Component)
            // @ts-ignore
            public static LOADING: number;
            // @ts-ignore
            public static ABORTED: number;
            // @ts-ignore
            public static ERRORED: number;
            // @ts-ignore
            public static COMPLETE: number;
            /**
             * Adds an image to the list of images being tracked by this media
             * tracker. The image will eventually be rendered at its default
             * (unscaled) size.
             */
            // @ts-ignore
            public addImage(image: java.awt.Image, id: number): void;
            /**
             * Adds a scaled image to the list of images being tracked
             * by this media tracker. The image will eventually be
             * rendered at the indicated width and height.
             */
            // @ts-ignore
            public addImage(image: java.awt.Image, id: number, w: number, h: number): void;
            /**
             * Checks to see if all images being tracked by this media tracker
             * have finished loading.
             * <p>
             * This method does not start loading the images if they are not
             * already loading.
             * <p>
             * If there is an error while loading or scaling an image, then that
             * image is considered to have finished loading. Use the
             * <code>isErrorAny</code> or <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public checkAll(): boolean;
            /**
             * Checks to see if all images being tracked by this media tracker
             * have finished loading.
             * <p>
             * If the value of the <code>load</code> flag is <code>true</code>,
             * then this method starts loading any images that are not yet
             * being loaded.
             * <p>
             * If there is an error while loading or scaling an image, that
             * image is considered to have finished loading. Use the
             * <code>isErrorAny</code> and <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public checkAll(load: boolean): boolean;
            /**
             * Checks the error status of all of the images.
             */
            // @ts-ignore
            public isErrorAny(): boolean;
            /**
             * Returns a list of all media that have encountered an error.
             */
            // @ts-ignore
            public getErrorsAny(): java.lang.Object[];
            /**
             * Starts loading all images tracked by this media tracker. This
             * method waits until all the images being tracked have finished
             * loading.
             * <p>
             * If there is an error while loading or scaling an image, then that
             * image is considered to have finished loading. Use the
             * <code>isErrorAny</code> or <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public waitForAll(): void;
            /**
             * Starts loading all images tracked by this media tracker. This
             * method waits until all the images being tracked have finished
             * loading, or until the length of time specified in milliseconds
             * by the <code>ms</code> argument has passed.
             * <p>
             * If there is an error while loading or scaling an image, then
             * that image is considered to have finished loading. Use the
             * <code>isErrorAny</code> or <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public waitForAll(ms: number): boolean;
            /**
             * Calculates and returns the bitwise inclusive <b>OR</b> of the
             * status of all media that are tracked by this media tracker.
             * <p>
             * Possible flags defined by the
             * <code>MediaTracker</code> class are <code>LOADING</code>,
             * <code>ABORTED</code>, <code>ERRORED</code>, and
             * <code>COMPLETE</code>. An image that hasn't started
             * loading has zero as its status.
             * <p>
             * If the value of <code>load</code> is <code>true</code>, then
             * this method starts loading any images that are not yet being loaded.
             */
            // @ts-ignore
            public statusAll(load: boolean): number;
            /**
             * Checks to see if all images tracked by this media tracker that
             * are tagged with the specified identifier have finished loading.
             * <p>
             * This method does not start loading the images if they are not
             * already loading.
             * <p>
             * If there is an error while loading or scaling an image, then that
             * image is considered to have finished loading. Use the
             * <code>isErrorAny</code> or <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public checkID(id: number): boolean;
            /**
             * Checks to see if all images tracked by this media tracker that
             * are tagged with the specified identifier have finished loading.
             * <p>
             * If the value of the <code>load</code> flag is <code>true</code>,
             * then this method starts loading any images that are not yet
             * being loaded.
             * <p>
             * If there is an error while loading or scaling an image, then that
             * image is considered to have finished loading. Use the
             * <code>isErrorAny</code> or <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public checkID(id: number, load: boolean): boolean;
            /**
             * Checks the error status of all of the images tracked by this
             * media tracker with the specified identifier.
             */
            // @ts-ignore
            public isErrorID(id: number): boolean;
            /**
             * Returns a list of media with the specified ID that
             * have encountered an error.
             */
            // @ts-ignore
            public getErrorsID(id: number): java.lang.Object[];
            /**
             * Starts loading all images tracked by this media tracker with the
             * specified identifier. This method waits until all the images with
             * the specified identifier have finished loading.
             * <p>
             * If there is an error while loading or scaling an image, then that
             * image is considered to have finished loading. Use the
             * <code>isErrorAny</code> and <code>isErrorID</code> methods to
             * check for errors.
             */
            // @ts-ignore
            public waitForID(id: number): void;
            /**
             * Starts loading all images tracked by this media tracker with the
             * specified identifier. This method waits until all the images with
             * the specified identifier have finished loading, or until the
             * length of time specified in milliseconds by the <code>ms</code>
             * argument has passed.
             * <p>
             * If there is an error while loading or scaling an image, then that
             * image is considered to have finished loading. Use the
             * <code>statusID</code>, <code>isErrorID</code>, and
             * <code>isErrorAny</code> methods to check for errors.
             */
            // @ts-ignore
            public waitForID(id: number, ms: number): boolean;
            /**
             * Calculates and returns the bitwise inclusive <b>OR</b> of the
             * status of all media with the specified identifier that are
             * tracked by this media tracker.
             * <p>
             * Possible flags defined by the
             * <code>MediaTracker</code> class are <code>LOADING</code>,
             * <code>ABORTED</code>, <code>ERRORED</code>, and
             * <code>COMPLETE</code>. An image that hasn't started
             * loading has zero as its status.
             * <p>
             * If the value of <code>load</code> is <code>true</code>, then
             * this method starts loading any images that are not yet being loaded.
             */
            // @ts-ignore
            public statusID(id: number, load: boolean): number;
            /**
             * Removes the specified image from this media tracker.
             * All instances of the specified image are removed,
             * regardless of scale or ID.
             */
            // @ts-ignore
            public removeImage(image: java.awt.Image): void;
            /**
             * Removes the specified image from the specified tracking
             * ID of this media tracker.
             * All instances of <code>Image</code> being tracked
             * under the specified ID are removed regardless of scale.
             */
            // @ts-ignore
            public removeImage(image: java.awt.Image, id: number): void;
            /**
             * Removes the specified image with the specified
             * width, height, and ID from this media tracker.
             * Only the specified instance (with any duplicates) is removed.
             */
            // @ts-ignore
            public removeImage(image: java.awt.Image, id: number, width: number, height: number): void;
        }
    }
}
