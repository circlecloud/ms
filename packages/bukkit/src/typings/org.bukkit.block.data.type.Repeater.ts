declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    class Repeater {
                        /**
                         * Gets the value of the 'delay' property.
                         */
                        public getDelay(): number;
                        /**
                         * Sets the value of the 'delay' property.
                         */
                        public setDelay(delay: number): void;
                        /**
                         * Gets the minimum allowed value of the 'delay' property.
                         */
                        public getMinimumDelay(): number;
                        /**
                         * Gets the maximum allowed value of the 'delay' property.
                         */
                        public getMaximumDelay(): number;
                        /**
                         * Gets the value of the 'locked' property.
                         */
                        public isLocked(): boolean;
                        /**
                         * Sets the value of the 'locked' property.
                         */
                        public setLocked(locked: boolean): void;
                    }
                }
            }
        }
    }
}
