declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                // @ts-ignore
                interface TeamMember {
                    /**
                     * Gets a {@link Text} representing this team member, suitable for adding
                     * to an {@link Team} with {@link Team#addMember(Text)}.
                     */
                    // @ts-ignore
                     getTeamRepresentation(): org.spongepowered.api.text.Text;
                }
            }
        }
    }
}
