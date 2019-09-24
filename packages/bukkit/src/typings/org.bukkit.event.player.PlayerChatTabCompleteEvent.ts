declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChatTabCompleteEvent {
                    constructor(who: org.bukkit.entity.Player, message: string, completions: any[] /*java.util.Collection*/)
                    /**
                     * Gets the chat message being tab-completed.
                     */
                    public getChatMessage(): string;
                    /**
                     * Gets the last 'token' of the message being tab-completed.
                     * <p>
                     * The token is the substring starting with the character after the last
                     * space in the message.
                     */
                    public getLastToken(): string;
                    /**
                     * This is the collection of completions for this event.
                     */
                    public getTabCompletions(): any[] /*java.util.Collection*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
