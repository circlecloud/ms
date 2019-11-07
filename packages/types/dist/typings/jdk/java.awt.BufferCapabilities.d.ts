// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class BufferCapabilities extends java.lang.Object {
            /**
             * Creates a new object for specifying buffering capabilities
             */
            // @ts-ignore
            constructor(frontCaps: java.awt.ImageCapabilities, backCaps: java.awt.ImageCapabilities, flipContents: java.awt.BufferCapabilities.FlipContents)
            // @ts-ignore
            public getFrontBufferCapabilities(): java.awt.ImageCapabilities;
            // @ts-ignore
            public getBackBufferCapabilities(): java.awt.ImageCapabilities;
            // @ts-ignore
            public isPageFlipping(): boolean;
            // @ts-ignore
            public getFlipContents(): java.awt.BufferCapabilities.FlipContents;
            // @ts-ignore
            public isFullScreenRequired(): boolean;
            // @ts-ignore
            public isMultiBufferAvailable(): boolean;
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
