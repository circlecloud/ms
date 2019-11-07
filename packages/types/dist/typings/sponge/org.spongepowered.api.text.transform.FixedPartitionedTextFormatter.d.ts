// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    // @ts-ignore
                     class FixedPartitionedTextFormatter extends java.lang.Object implements org.spongepowered.api.text.transform.PartitionedTextFormatter {
                        /**
                         * Creates a new {@link FixedPartitionedTextFormatter} with
                         * the provided size of partitions.
                         */
                        // @ts-ignore
                        constructor(size: number)
                        /**
                         * Creates a new {@link FixedPartitionedTextFormatter} with
                         * the provided size of partitions.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getAll(): any;
                        // @ts-ignore
                        public get(i: number): org.spongepowered.api.text.transform.SimpleTextFormatter;
                        // @ts-ignore
                        public set(i: number, element: org.spongepowered.api.text.transform.SimpleTextFormatter): org.spongepowered.api.text.transform.SimpleTextFormatter;
                        // @ts-ignore
                        public size(): number;
                        /**
                         * Returns true if each partition is empty.
                         */
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public contains(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean;
                        /**
                         * Clears each partition. Retains the actual partitions themselves.
                         */
                        // @ts-ignore
                        public clear(): void;
                        // @ts-ignore
                        public add(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean;
                        // @ts-ignore
                        public add(elements: java.util.Collection): boolean;
                        // @ts-ignore
                        public insert(i: number, element: org.spongepowered.api.text.transform.SimpleTextFormatter): void;
                        // @ts-ignore
                        public insert(i: number, elements: java.util.Collection): void;
                        // @ts-ignore
                        public remove(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean;
                        // @ts-ignore
                        public remove(elements: java.util.Collection): boolean;
                        // @ts-ignore
                        public retain(elements: java.util.Collection): boolean;
                    }
                }
            }
        }
    }
}
