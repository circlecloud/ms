declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ChangeWorldWeatherEvent extends org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original {@link Weather} that the event is creating.
                         */
                        // @ts-ignore
                         getOriginalWeather(): org.spongepowered.api.world.weather.Weather;
                        /**
                         * Gets the {@link Weather} that was happening before this event.
                         */
                        // @ts-ignore
                         getInitialWeather(): org.spongepowered.api.world.weather.Weather;
                        /**
                         * Gets the {@link Weather} that this event is creating.
                         */
                        // @ts-ignore
                         getWeather(): org.spongepowered.api.world.weather.Weather;
                        /**
                         * Sets what the new {@link Weather} should be with a random duration.
                         */
                        // @ts-ignore
                         setWeather(weather: org.spongepowered.api.world.weather.Weather): void;
                        /**
                         * Gets the original duration of {@link ChangeWorldWeatherEvent#getWeather()} that would run after event.
                         */
                        // @ts-ignore
                         getOriginalDuration(): number;
                        /**
                         * Sets the duration of the {@link Weather} (in ticks).
                         */
                        // @ts-ignore
                         getDuration(): number;
                        /**
                         * Sets the duration of the {@link Weather} (in ticks).
                         */
                        // @ts-ignore
                         setDuration(duration: number): void;
                    }
                }
            }
        }
    }
}
