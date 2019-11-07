declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace dispatcher {
                    // @ts-ignore
                    interface Disambiguator {
                        /**
                         * Disambiguate an alias in cases where there are multiple command mappings
                         * registered for a given alias.
                         */
                        // @ts-ignore
                         disambiguate(source: org.spongepowered.api.command.CommandSource, aliasUsed: string, availableOptions: java.util.List): java.util.Optional;
                    }
                }
            }
        }
    }
}
