declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace weather {
                    // @ts-ignore
                    interface WeatherUniverse {
                        /**
                         * Gets the current {@link Weather} in this volume.
                         */
                        // @ts-ignore
                         getWeather(): org.spongepowered.api.world.weather.Weather;
                        /**
                         * Gets the remaining duration of the current {@link Weather}.
                         */
                        // @ts-ignore
                         getRemainingDuration(): number;
                        /**
                         * Gets the duration the current {@link Weather} has been running for.
                         */
                        // @ts-ignore
                         getRunningDuration(): number;
                        /**
                         * Sets the {@link Weather} of the volume with a random duration.
                         */
                        // @ts-ignore
                         setWeather(weather: org.spongepowered.api.world.weather.Weather): void;
                        /**
                         * Sets the {@link Weather} of the volume with the specified duration.
                         */
                        // @ts-ignore
                         setWeather(weather: org.spongepowered.api.world.weather.Weather, duration: number): void;
                    }
                }
            }
        }
    }
}
