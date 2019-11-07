declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                // @ts-ignore
                interface Team {
                    /**
                     * Creates a new {@link Builder} to build a {@link Team}.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.scoreboard.Team.Builder;
                    /**
                     * Gets the name of this team.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the name displayed to users for this team.
                     */
                    // @ts-ignore
                     getDisplayName(): org.spongepowered.api.text.Text;
                    /**
                     * Sets the name displayed to users for this team.
                     */
                    // @ts-ignore
                     setDisplayName(displayName: org.spongepowered.api.text.Text): void;
                    /**
                     * Gets the color of this team.
                     * <p>The team's color is a distinct concept from its prefix or suffix.
                     * It is only used for colored sidebar display slots, and certain statistic
                     * criteria.</p>
                     */
                    // @ts-ignore
                     getColor(): org.spongepowered.api.text.format.TextColor;
                    /**
                     * Sets the color of this team.
                     * <p>The team's color is a distinct concept from its prefix or suffix.
                     * It is only used for colored sidebar display slots, and certain statistic
                     * criteria.</p>
                     */
                    // @ts-ignore
                     setColor(color: org.spongepowered.api.text.format.TextColor): void;
                    /**
                     * Gets the prefix prepended to the display name of users on this team.
                     */
                    // @ts-ignore
                     getPrefix(): org.spongepowered.api.text.Text;
                    /**
                     * Sets the prefix prepended to the display name of users on this team.
                     */
                    // @ts-ignore
                     setPrefix(prefix: org.spongepowered.api.text.Text): void;
                    /**
                     * Gets the suffix appended to the display name of users on this team.
                     */
                    // @ts-ignore
                     getSuffix(): org.spongepowered.api.text.Text;
                    /**
                     * Sets the suffix appended to the display name of users on this team.
                     */
                    // @ts-ignore
                     setSuffix(suffix: org.spongepowered.api.text.Text): void;
                    /**
                     * Gets whether friendly fire is enabled.
                     * <p>This option only controls players attacking other players. It has no
                     * affect other entities attacking other entities, or players attacking
                     * other entities (or vice-versa).</p>
                     */
                    // @ts-ignore
                     allowFriendlyFire(): boolean;
                    /**
                     * Sets whether friendly fire is enabled.
                     */
                    // @ts-ignore
                     setAllowFriendlyFire(enabled: boolean): void;
                    /**
                     * Gets whether invisible team members are shown.
                     */
                    // @ts-ignore
                     canSeeFriendlyInvisibles(): boolean;
                    /**
                     * Sets whether invisible team members are shown.
                     */
                    // @ts-ignore
                     setCanSeeFriendlyInvisibles(enabled: boolean): void;
                    /**
                     * Gets the {@link Visibility} which controls to who nametags
                     * of players on this team are visible to.
                     */
                    // @ts-ignore
                     getNameTagVisibility(): org.spongepowered.api.scoreboard.Visibility;
                    /**
                     * Sets the {@link Visibility} which controls to who nametags
                     * of players on this team are visible to.
                     */
                    // @ts-ignore
                     setNameTagVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): void;
                    /**
                     * Gets the {@link Visibility} which controls who death Texts
                     * for players on this team are visible to.
                     */
                    // @ts-ignore
                     getDeathMessageVisibility(): org.spongepowered.api.scoreboard.Visibility;
                    /**
                     * Sets the {@link Visibility} which controls who death Texts
                     * of players on this team are visible to.
                     */
                    // @ts-ignore
                     setDeathMessageVisibility(visibility: org.spongepowered.api.scoreboard.Visibility): void;
                    /**
                     * Gets the {@link CollisionRule} for entities on this team.
                     */
                    // @ts-ignore
                     getCollisionRule(): org.spongepowered.api.scoreboard.CollisionRule;
                    /**
                     * Sets the {@link CollisionRule} for entities on this team.
                     */
                    // @ts-ignore
                     setCollisionRule(rule: org.spongepowered.api.scoreboard.CollisionRule): void;
                    /**
                     * Gets the {@link Text}s representing the members of this team.
                     */
                    // @ts-ignore
                     getMembers(): java.util.Set;
                    /**
                     * Adds the specified {@link Text} to this team.
                     * <p>While any {@link Text} may be added, the {@link Text} to use should
                     * normally be obtained by calling
                     * {@link TeamMember#getTeamRepresentation()} on a {@link TeamMember}, such
                     * as a {@link Player}.</p>
                     */
                    // @ts-ignore
                     addMember(member: org.spongepowered.api.text.Text): void;
                    /**
                     * Removes the specified {@link Text} from this team.
                     * <p>While any {@link Text} may be removed, the {@link Text}
                     * to use should normally be obtained by calling {@link TeamMember#getTeamRepresentation()}
                     * on a {@link TeamMember}, such as a {@link Player}.</p>
                     */
                    // @ts-ignore
                     removeMember(member: org.spongepowered.api.text.Text): boolean;
                    /**
                     * Returns the scoreboard this team is registered on, if available.
                     * <p>This will return {@link Optional#empty()} when a team has
                     * been removed from its {@link Scoreboard}, or has been created
                     * but not yet registered.</p>
                     */
                    // @ts-ignore
                     getScoreboard(): java.util.Optional;
                    /**
                     * Unregisters this team from its {@link Scoreboard}, if present.
                     * <p>A team can still be fully used after being unregistered. However,
                     * it will not affect the game in any way until registered to a
                     * {@link Scoreboard} again, through
                     * {@link Scoreboard#registerTeam(Team)}.</p>
                     */
                    // @ts-ignore
                     unregister(): boolean;
                }
            }
        }
    }
}
