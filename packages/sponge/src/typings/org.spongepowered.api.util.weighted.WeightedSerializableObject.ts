declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                     class WeightedSerializableObject extends org.spongepowered.api.util.weighted.WeightedObject implements org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link WeightedSerializableObject} with the provided
                         * {@link DataSerializable}.
                         */
                        constructor(object: org.spongepowered.api.data.DataSerializable, weight: number)
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: any): boolean;
                        // @ts-ignore
                        public getContentVersion(): number;
                        // @ts-ignore
                        public toContainer(): org.spongepowered.api.data.DataContainer;
                    }
                }
            }
        }
    }
}
