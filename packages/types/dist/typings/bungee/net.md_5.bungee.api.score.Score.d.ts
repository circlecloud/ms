declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace score {
                    // @ts-ignore
                     class Score extends java.lang.Object {
                        // @ts-ignore
                        constructor(itemName: string, scoreName: string, value: number)
                        /**
                         * Name to be displayed in the list.
                         */
                        // @ts-ignore
                        public getItemName(): string;
                        /**
                         * Unique name of the score.
                         */
                        // @ts-ignore
                        public getScoreName(): string;
                        /**
                         * Value of the score.
                         */
                        // @ts-ignore
                        public getValue(): number;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
