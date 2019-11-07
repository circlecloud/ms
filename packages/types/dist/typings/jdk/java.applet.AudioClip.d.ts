// @ts-nocheck
declare namespace java {
    namespace applet {
        // @ts-ignore
        interface AudioClip {
            /**
             * Starts playing this audio clip. Each time this method is called,
             * the clip is restarted from the beginning.
             */
            // @ts-ignore
             play(): void;
            /**
             * Starts playing this audio clip in a loop.
             */
            // @ts-ignore
             loop(): void;
            /**
             * Stops playing this audio clip.
             */
            // @ts-ignore
             stop(): void;
        }
    }
}
