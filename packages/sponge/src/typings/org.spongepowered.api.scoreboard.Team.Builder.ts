declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace Team {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the name of the {@link Team}.
                         */
                        // @ts-ignore
                         name(name: string): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the color of the {@link Team}.
                         * <p>The team's color is a distinct concept from its prefix or suffix.
                         * It is only used for colored sidebar display slots, and certain
                         * statistic criteria.</p>
                         */
                        // @ts-ignore
                         color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the name displayed to users for the {@link Team}.
                         * <p>Display names may be truncated in order to meet an
                         * implementation-defined length limit. In Vanilla, this is sixteen
                         * characters.</p>
                         * <p>By default, this is set to {@link #name(String)}</p>
                         */
                        // @ts-ignore
                         displayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the prefix prepended to the display name of users on the
                         * {@link Team}.
                         * <p>Display names may be truncated in order to meet an
                         * implementation-defined length limit. In Vanilla, this is sixteen
                         * characters.</p>
                         */
                        // @ts-ignore
                         prefix(prefix: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the suffix appended to the display name of users on the
                         * {@link Team}.
                         * <p>Display names may be truncated in order to meet an
                         * implementation-defined length limit. In Vanilla, this is sixteen
                         * characters.</p>
                         */
                        // @ts-ignore
                         suffix(suffix: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets whether friendly fire is enabled for the {@link Team}.
                         */
                        // @ts-ignore
                         allowFriendlyFire(enabled: boolean): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets whether invisible team members are shown for the
                         * {@link Team}.
                         */
                        // @ts-ignore
                         canSeeFriendlyInvisibles(enabled: boolean): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the {@link Visibility} which controls to who nametags
                         * of players on the {@link Team} are visible to.
                         */
                        // @ts-ignore
                         nameTagVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the {@link Visibility} which controls who death Texts
                         * of players on the {@link Team} are visible to.
                         */
                        // @ts-ignore
                         deathTextVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the {@link CollisionRule} for this team's members.
                         */
                        // @ts-ignore
                         collisionRule(rule: org.spongepowered.api.scoreboard.CollisionRule): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Sets the set of {@link Text} members on the {@link Team}.
                         * <p>By default, this is the empty set.</p>
                         */
                        // @ts-ignore
                         members(users: any[] /*java.util.Set*/): org.spongepowered.api.scoreboard.Team.Builder;
                        /**
                         * Builds an instance of a {@link Team}.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.scoreboard.Team;
                    }
                }
            }
        }
    }
}
