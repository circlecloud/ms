declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    // @ts-ignore
                    interface ScoreCriterionProgress extends org.spongepowered.api.advancement.criteria.CriterionProgress {
                        // @ts-ignore
                         getCriterion(): org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion;
                        /**
                         * Gets the goal value.
                         */
                        // @ts-ignore
                         getGoal(): number;
                        /**
                         * Gets the score value.
                         */
                        // @ts-ignore
                         getScore(): number;
                        /**
                         * Adds the target score value, the score cannot exceed
                         * the goal value ({@link #getGoal()}) or be under zero.
                         * The achieved time will be returned if the goal is met.
                         */
                        // @ts-ignore
                         set(score: number): java.util.Optional;
                        /**
                         * Adds the target score value, the score cannot exceed
                         * the goal value ({@link #getGoal()}). The achieved time
                         * will be returned if the goal is met.
                         */
                        // @ts-ignore
                         add(score: number): java.util.Optional;
                        /**
                         * Removes the target score value, the score cannot go under zero.
                         * The achieved time will be returned if the goal is met before.
                         */
                        // @ts-ignore
                         remove(score: number): java.util.Optional;
                    }
                }
            }
        }
    }
}
