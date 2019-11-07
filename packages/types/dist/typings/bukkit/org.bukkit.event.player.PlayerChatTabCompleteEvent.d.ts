declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChatTabCompleteEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, message: string, completions: java.util.Collection)
                    /**
                     * Gets the chat message being tab-completed.
                     */
                    // @ts-ignore
                    public getChatMessage(): string;
                    /**
                     * Gets the last 'token' of the message being tab-completed.
                     * <p>
                     * The token is the substring starting with the character after the last
                     * space in the message.
                     */
                    // @ts-ignore
                    public getLastToken(): string;
                    /**
                     * This is the collection of completions for this event.
                     */
                    // @ts-ignore
                    public getTabCompletions(): java.util.Collection;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
