declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerPreLoginEvent {
                    class Result {
                        public static ALLOWED: org.bukkit.event.player.PlayerPreLoginEvent.Result;
                        public static KICK_FULL: org.bukkit.event.player.PlayerPreLoginEvent.Result;
                        public static KICK_BANNED: org.bukkit.event.player.PlayerPreLoginEvent.Result;
                        public static KICK_WHITELIST: org.bukkit.event.player.PlayerPreLoginEvent.Result;
                        public static KICK_OTHER: org.bukkit.event.player.PlayerPreLoginEvent.Result;
                        public static values(): org.bukkit.event.player.PlayerPreLoginEvent.Result[];
                        public static valueOf(name: string): org.bukkit.event.player.PlayerPreLoginEvent.Result;
                    }
                }
            }
        }
    }
}
