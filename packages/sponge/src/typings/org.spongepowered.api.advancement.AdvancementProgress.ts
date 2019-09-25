declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                // @ts-ignore
                interface AdvancementProgress extends org.spongepowered.api.advancement.Progressable {
                    /**
                     * Gets the {@link Advancement}.
                     */
                    // @ts-ignore
                     getAdvancement(): org.spongepowered.api.advancement.Advancement;
                    /**
                     * Gets the {@link CriterionProgress} for the given
                     * {@link AdvancementCriterion} if the specified criterion is
                     * present on the {@link Advancement}.
                     * <p>For AND and OR criteria will wrapped {@link CriterionProgress} be
                     * provided that will interact with the {@link CriterionProgress}s
                     * for every child {@link AdvancementCriterion}s.</p>
                     */
                    // @ts-ignore
                     get(criterion: org.spongepowered.api.advancement.criteria.AdvancementCriterion): any;
                    /**
                     * Gets the {@link ScoreCriterionProgress} for the given
                     * {@link ScoreAdvancementCriterion} if the specified criterion is
                     * present on the {@link Advancement}.
                     */
                    // @ts-ignore
                     get(criterion: org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion): any;
                    /**
                     * Gets the {@link CriterionProgress} for the
                     * given {@link AdvancementCriterion}.
                     * <p>For AND and OR criteria will wrapped {@link CriterionProgress} be
                     * provided that will interact with the {@link CriterionProgress}s
                     * for every child {@link AdvancementCriterion}s.</p>
                     */
                    // @ts-ignore
                     require(criterion: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.criteria.CriterionProgress;
                    /**
                     * Gets the {@link ScoreCriterionProgress} for the
                     * given {@link ScoreAdvancementCriterion}.
                     */
                    // @ts-ignore
                     require(criterion: org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion): org.spongepowered.api.advancement.criteria.ScoreCriterionProgress;
                }
            }
        }
    }
}
