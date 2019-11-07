declare namespace org {
    namespace bukkit {
        namespace help {
            // @ts-ignore
            abstract class HelpTopic extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected name: string;
                // @ts-ignore
                protected shortText: string;
                // @ts-ignore
                protected fullText: string;
                // @ts-ignore
                protected amendedPermission: string;
                /**
                 * Determines if a {@link Player} is allowed to see this help topic.
                 * <p>
                 * HelpTopic implementations should take server administrator wishes into
                 * account as set by the {@link HelpTopic#amendCanSee(String)} function.
                 */
                // @ts-ignore
                public abstract canSee(player: org.bukkit.command.CommandSender): boolean;
                /**
                 * Allows the server administrator to override the permission required to
                 * see a help topic.
                 * <p>
                 * HelpTopic implementations should take this into account when
                 * determining topic visibility on the {@link
                 * HelpTopic#canSee(org.bukkit.command.CommandSender)} function.
                 */
                // @ts-ignore
                public amendCanSee(amendedPermission: string): void;
                /**
                 * Returns the name of this help topic.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Returns a brief description that will be displayed in the topic index.
                 */
                // @ts-ignore
                public getShortText(): string;
                /**
                 * Returns the full description of this help topic that is displayed when
                 * the user requests this topic's details.
                 * <p>
                 * The result will be paginated to properly fit the user's client.
                 */
                // @ts-ignore
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
                // @ts-ignore
                public amendTopic(amendedShortText: string, amendedFullText: string): void;
                /**
                 * Developers implementing their own custom HelpTopic implementations can
                 * use this utility method to ensure their implementations comply with the
                 * expected behavior of the {@link HelpTopic#amendTopic(String, String)}
                 * method.
                 */
                // @ts-ignore
                protected applyAmendment(baseText: string, amendment: string): string;
            }
        }
    }
}
