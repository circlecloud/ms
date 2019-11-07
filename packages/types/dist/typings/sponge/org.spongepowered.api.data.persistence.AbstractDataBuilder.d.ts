// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    // @ts-ignore
                    abstract class AbstractDataBuilder extends java.lang.Object implements org.spongepowered.api.data.persistence.DataBuilder {
                        // @ts-ignore
                        constructor(requiredClass: java.lang.Class, supportedVersion: number)
                        /**
                         * Builds the currently {@link #supportedVersion} variant of the intended
                         * {@link DataSerializable}, such that all content upgrades have already
                         * been handled by {@link #build(DataView)}. This otherwise follows the
                         * same contract as {@link DataBuilder#build(DataView)}.
                         */
                        // @ts-ignore
                        protected abstract buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional;
                        // @ts-ignore
                        public build(container: org.spongepowered.api.data.DataView): java.util.Optional;
                    }
                }
            }
        }
    }
}
