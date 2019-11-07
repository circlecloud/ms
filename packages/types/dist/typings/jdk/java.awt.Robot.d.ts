declare namespace java {
    namespace awt {
        // @ts-ignore
         class Robot extends java.lang.Object {
            /**
             * Constructs a Robot object in the coordinate system of the primary screen.
             * <p>
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a Robot for the given screen device. Coordinates passed
             * to Robot method calls like mouseMove and createScreenCapture will
             * be interpreted as being in the same coordinate system as the
             * specified screen. Note that depending on the platform configuration,
             * multiple screens may either:
             * <ul>
             * <li>share the same coordinate system to form a combined virtual screen</li>
             * <li>use different coordinate systems to act as independent screens</li>
             * </ul>
             * This constructor is meant for the latter case.
             * <p>
             * If screen devices are reconfigured such that the coordinate system is
             * affected, the behavior of existing Robot objects is undefined.
             */
            // @ts-ignore
            constructor(screen: java.awt.GraphicsDevice)
            /**
             * Moves mouse pointer to given screen coordinates.
             */
            // @ts-ignore
            public mouseMove(x: number, y: number): void;
            /**
             * Presses one or more mouse buttons.  The mouse buttons should
             * be released using the {@link #mouseRelease(int)} method.
             */
            // @ts-ignore
            public mousePress(buttons: number): void;
            /**
             * Releases one or more mouse buttons.
             */
            // @ts-ignore
            public mouseRelease(buttons: number): void;
            /**
             * Rotates the scroll wheel on wheel-equipped mice.
             */
            // @ts-ignore
            public mouseWheel(wheelAmt: number): void;
            /**
             * Presses a given key.  The key should be released using the
             * <code>keyRelease</code> method.
             * <p>
             * Key codes that have more than one physical key associated with them
             * (e.g. <code>KeyEvent.VK_SHIFT</code> could mean either the
             * left or right shift key) will map to the left key.
             */
            // @ts-ignore
            public keyPress(keycode: number): void;
            /**
             * Releases a given key.
             * <p>
             * Key codes that have more than one physical key associated with them
             * (e.g. <code>KeyEvent.VK_SHIFT</code> could mean either the
             * left or right shift key) will map to the left key.
             */
            // @ts-ignore
            public keyRelease(keycode: number): void;
            /**
             * Returns the color of a pixel at the given screen coordinates.
             */
            // @ts-ignore
            public getPixelColor(x: number, y: number): java.awt.Color;
            /**
             * Creates an image containing pixels read from the screen.  This image does
             * not include the mouse cursor.
             */
            // @ts-ignore
            public createScreenCapture(screenRect: java.awt.Rectangle): java.awt.image.BufferedImage;
            /**
             * Returns whether this Robot automatically invokes <code>waitForIdle</code>
             * after generating an event.
             */
            // @ts-ignore
            public isAutoWaitForIdle(): boolean;
            /**
             * Sets whether this Robot automatically invokes <code>waitForIdle</code>
             * after generating an event.
             */
            // @ts-ignore
            public setAutoWaitForIdle(isOn: boolean): void;
            /**
             * Returns the number of milliseconds this Robot sleeps after generating an event.
             */
            // @ts-ignore
            public getAutoDelay(): number;
            /**
             * Sets the number of milliseconds this Robot sleeps after generating an event.
             */
            // @ts-ignore
            public setAutoDelay(ms: number): void;
            /**
             * Sleeps for the specified time.
             * To catch any <code>InterruptedException</code>s that occur,
             * <code>Thread.sleep()</code> may be used instead.
             */
            // @ts-ignore
            public delay(ms: number): void;
            /**
             * Waits until all events currently on the event queue have been processed.
             */
            // @ts-ignore
            public waitForIdle(): void;
            /**
             * Returns a string representation of this Robot.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
