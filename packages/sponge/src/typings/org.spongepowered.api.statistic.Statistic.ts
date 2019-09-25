declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace statistic {
                // @ts-ignore
                interface Statistic extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                    /**
                     * Returns the objective {@link Criterion} for this statistic.
                     */
                    // @ts-ignore
                     getCriterion(): any;
                    /**
                     * Returns the {@link NumberFormat} used to format the value of this
                     * statistic.
                     */
                    // @ts-ignore
                     getFormat(): any;
                    /**
                     * Returns this statistic's {@link StatisticType}.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.statistic.StatisticType;
                }
            }
        }
    }
}
