declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerFishEvent {
                    class State {
                        public static FISHING: org.bukkit.event.player.PlayerFishEvent.State;
                        public static CAUGHT_FISH: org.bukkit.event.player.PlayerFishEvent.State;
                        public static CAUGHT_ENTITY: org.bukkit.event.player.PlayerFishEvent.State;
                        public static IN_GROUND: org.bukkit.event.player.PlayerFishEvent.State;
                        public static FAILED_ATTEMPT: org.bukkit.event.player.PlayerFishEvent.State;
                        public static REEL_IN: org.bukkit.event.player.PlayerFishEvent.State;
                        public static BITE: org.bukkit.event.player.PlayerFishEvent.State;
                        public static values(): org.bukkit.event.player.PlayerFishEvent.State[];
                        public static valueOf(name: string): org.bukkit.event.player.PlayerFishEvent.State;
                    }
                }
            }
        }
    }
}
