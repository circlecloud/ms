declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            class ScoreboardManager {
                /**
                 * Gets the primary Scoreboard controlled by the server.
                 * <p>
                 * This Scoreboard is saved by the server, is affected by the /scoreboard
                 * command, and is the scoreboard shown by default to players.
                 */
                public getMainScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * Gets a new Scoreboard to be tracked by the server. This scoreboard will
                 * be tracked as long as a reference is kept, either by a player or by a
                 * plugin.
                 */
                public getNewScoreboard(): org.bukkit.scoreboard.Scoreboard;
            }
        }
    }
}
