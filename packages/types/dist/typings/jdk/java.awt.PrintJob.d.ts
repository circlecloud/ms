// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class PrintJob extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Gets a Graphics object that will draw to the next page.
             * The page is sent to the printer when the graphics
             * object is disposed.  This graphics object will also implement
             * the PrintGraphics interface.
             */
            // @ts-ignore
            public abstract getGraphics(): java.awt.Graphics;
            /**
             * Returns the dimensions of the page in pixels.
             * The resolution of the page is chosen so that it
             * is similar to the screen resolution.
             */
            // @ts-ignore
            public abstract getPageDimension(): java.awt.Dimension;
            /**
             * Returns the resolution of the page in pixels per inch.
             * Note that this doesn't have to correspond to the physical
             * resolution of the printer.
             */
            // @ts-ignore
            public abstract getPageResolution(): number;
            /**
             * Returns true if the last page will be printed first.
             */
            // @ts-ignore
            public abstract lastPageFirst(): boolean;
            /**
             * Ends the print job and does any necessary cleanup.
             */
            // @ts-ignore
            public abstract end(): void;
            /**
             * Ends this print job once it is no longer referenced.
             */
            // @ts-ignore
            public finalize(): void;
        }
    }
}
