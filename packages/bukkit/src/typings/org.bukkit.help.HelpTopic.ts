declare namespace org {
    namespace bukkit {
        namespace help {
            abstract class HelpTopic {
                constructor()
                protected name: string;
                protected shortText: string;
                protected fullText: string;
                protected amendedPermission: string;
                /**
                 * Determines if a {@link Player} is allowed to see this help topic.
                 * <p>
                 * HelpTopic implementations should take server administrator wishes into
                 * account as set by the {@link HelpTopic#amendCanSee(String)} function.
                 */
                public abstract canSee(player: org.bukkit.command.CommandSender): boolean;
                /**
                 * Allows the server administrator to override the permission required to
                 * see a help topic.
                 * <p>
                 * HelpTopic implementations should take this into account when
                 * determining topic visibility on the {@link
                 * HelpTopic#canSee(org.bukkit.command.CommandSender)} function.
                 */
                public amendCanSee(amendedPermission: string): void;
                /**
                 * Returns the name of this help topic.
                 */
                public getName(): string;
                /**
                 * Returns a brief description that will be displayed in the topic index.
                 */
                public getShortText(): string;
                /**
                 * Returns the full description of this help topic that is displayed when
                 * the user requests this topic's details.
                 * <p>
                 * The result will be paginated to properly fit the user's client.
                 */
                public getFullText(forWho: org.bukkit.command.CommandSender): string;
                /**
                 * Allows the server admin (or another plugin) to add or replace the
                 * contents of a help topic.
                 * <p>
                 * A null in either parameter will leave that part of the topic unchanged.
                 * In either amending parameter, the string {@literal <text>} is replaced
                 * with the existing contents in the help topic. Use this to append or
                 * prepend additional content into an automatically generated help topic.
                 */
                public amendTopic(amendedShortText: string, amendedFullText: string): void;
                /**
                 * Developers implementing their own custom HelpTopic implementations can
                 * use this utility method to ensure their implementations comply with the
                 * expected behavior of the {@link HelpTopic#amendTopic(String, String)}
                 * method.
                 */
                protected applyAmendment(baseText: string, amendment: string): string;
            }
        }
    }
}
