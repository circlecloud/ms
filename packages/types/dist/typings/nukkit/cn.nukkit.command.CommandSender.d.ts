declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
            interface CommandSender extends cn.nukkit.permission.Permissible {
                /**
                 * 给命令发送者返回信息。<br>
                 * Sends a message to the command sender.
                 */
                // @ts-ignore
                 sendMessage(message: string): void;
                /**
                 * 给命令发送者返回信息。<br>
                 * Sends a message to the command sender.
                 */
                // @ts-ignore
                 sendMessage(message: cn.nukkit.lang.TextContainer): void;
                /**
                 * 返回命令发送者所在的服务器。<br>
                 * Returns the server of the command sender.
                 */
                // @ts-ignore
                 getServer(): cn.nukkit.Server;
                /**
                 * 返回命令发送者的名称。<br>
                 * Returns the name of the command sender.
                 * <p>如果命令发送者是一个玩家，将会返回他的玩家名字(name)不是显示名字(display name)。
                 * 如果命令发送者是控制台，将会返回{@code "CONSOLE"}。<br>
                 * If this command sender is a player, will return his/her player name(not display name).
                 * If it is a console, will return {@code "CONSOLE"}.</p>
                 * <p>当你需要判断命令的执行者是不是控制台时，可以用这个：<br>
                 * When you need to determine if the sender is a console, use this:<br>
                 * {@code if(sender instanceof ConsoleCommandSender) .....;}</p>
                 */
                // @ts-ignore
                 getName(): string;
                // @ts-ignore
                 isPlayer(): boolean;
            }
        }
    }
}
