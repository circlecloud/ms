declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    // @ts-ignore
                    abstract class AbstractDataBuilder implements org.spongepowered.api.data.persistence.DataBuilder {
                        constructor(requiredClass: any, supportedVersion: number)
                        /**
                         * Builds the currently {@link #supportedVersion} variant of the intended
                         * {@link DataSerializable}, such that all content upgrades have already
                         * been handled by {@link #build(DataView)}. This otherwise follows the
                         * same contract as {@link DataBuilder#build(DataView)}.
                         */
                        // @ts-ignore
                        protected abstract buildContent(container: org.spongepowered.api.data.DataView): any;
                        // @ts-ignore
                        public build(container: org.spongepowered.api.data.DataView): any;
                    }
                }
            }
        }
    }
}
