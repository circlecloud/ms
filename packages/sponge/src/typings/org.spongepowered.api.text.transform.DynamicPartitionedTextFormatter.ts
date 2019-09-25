declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    // @ts-ignore
                     class DynamicPartitionedTextFormatter implements org.spongepowered.api.text.transform.PartitionedTextFormatter {
                        /**
                         * Creates a new {@link DynamicPartitionedTextFormatter}.
                         */
                        constructor(initialSize: number)
                        /**
                         * creates a new partitioned text formatter.
                         */
                        constructor()
                        // @ts-ignore
                        protected partitions: any[] /*java.util.List*/;
                        // @ts-ignore
                        public getAll(): any;
                        // @ts-ignore
                        public get(i: number): org.spongepowered.api.text.transform.SimpleTextFormatter;
                        // @ts-ignore
                        public set(i: number, element: org.spongepowered.api.text.transform.SimpleTextFormatter): org.spongepowered.api.text.transform.SimpleTextFormatter;
                        // @ts-ignore
                        public size(): number;
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public contains(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean;
                        // @ts-ignore
                        public clear(): void;
                        // @ts-ignore
                        public add(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean;
                        // @ts-ignore
                        public add(elements: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public insert(i: number, element: org.spongepowered.api.text.transform.SimpleTextFormatter): void;
                        // @ts-ignore
                        public insert(i: number, elements: any[] /*java.util.Collection*/): void;
                        // @ts-ignore
                        public remove(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean;
                        // @ts-ignore
                        public remove(elements: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public retain(elements: any[] /*java.util.Collection*/): boolean;
                    }
                }
            }
        }
    }
}
