declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerResourcePackStatusEvent {
                    class Status {
                        public static SUCCESSFULLY_LOADED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                        public static DECLINED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                        public static FAILED_DOWNLOAD: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                        public static ACCEPTED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                        public static values(): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status[];
                        public static valueOf(name: string): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status;
                    }
                }
            }
        }
    }
}
