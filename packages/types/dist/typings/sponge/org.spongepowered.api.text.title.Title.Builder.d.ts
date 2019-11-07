// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace title {
                    namespace Title {
                        // @ts-ignore
                         class Builder extends java.lang.Object {
                            /**
                             * Returns the current title of this builder.
                             */
                            // @ts-ignore
                            public getTitle(): java.util.Optional;
                            /**
                             * Sets the title to send to the player.
                             */
                            // @ts-ignore
                            public title(title: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns the current subtitle of this builder.
                             */
                            // @ts-ignore
                            public getSubtitle(): java.util.Optional;
                            /**
                             * Sets the subtitle to send to the player.
                             */
                            // @ts-ignore
                            public subtitle(subtitle: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns the current action bar text of this builder.
                             */
                            // @ts-ignore
                            public getActionBar(): java.util.Optional;
                            /**
                             * Sets the action bar text to send to the player.
                             */
                            // @ts-ignore
                            public actionBar(actionBar: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns the current fade in effect time of the title.
                             */
                            // @ts-ignore
                            public getFadeIn(): java.util.Optional;
                            /**
                             * Sets the duration in ticks of the fade in effect of the title. Once
                             * this period of time is over the title will stay for the amount of
                             * time specified in {@link #stay(Integer)}.
                             * <p>The default value for Vanilla is 20 (1 second).</p>
                             */
                            // @ts-ignore
                            public fadeIn(fadeIn: java.lang.Integer): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns the current stay effect time of the title.
                             */
                            // @ts-ignore
                            public getStay(): java.util.Optional;
                            /**
                             * Sets the duration in ticks how long the title should stay on the
                             * screen. Once this period of time is over the title will fade out
                             * using the duration specified in {@link #fadeOut(Integer)}.
                             * <p>The default value for Vanilla is 60 (3 seconds).</p>
                             */
                            // @ts-ignore
                            public stay(stay: java.lang.Integer): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns the current fade out effect time of the title.
                             */
                            // @ts-ignore
                            public getFadeOut(): java.util.Optional;
                            /**
                             * Sets the duration in ticks of the fade out effect of the title.
                             * <p>The default value for Vanilla is 20 (1 second).</p>
                             */
                            // @ts-ignore
                            public fadeOut(fadeOut: java.lang.Integer): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns whether this builder is currently configured to clear.
                             */
                            // @ts-ignore
                            public isClear(): boolean;
                            /**
                             * Removes the currently displayed title from the player's screen. This
                             * will keep the currently used display times and will only remove the
                             * title.
                             */
                            // @ts-ignore
                            public clear(): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Sets whether the the currently displayed title should be removed from
                             * the player's screen and will keep the currently used display times.
                             */
                            // @ts-ignore
                            public clear(clear: boolean): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Returns whether this builder is currently configured to reset.
                             */
                            // @ts-ignore
                            public isReset(): boolean;
                            /**
                             * Removes the currently displayed title from the player's screen and
                             * set the configuration back to the default values.
                             */
                            // @ts-ignore
                            public reset(): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Sets whether the currently displayed title should be removed from the
                             * player's screen and the configuration set back to the default values.
                             */
                            // @ts-ignore
                            public reset(reset: boolean): org.spongepowered.api.text.title.Title.Builder;
                            /**
                             * Builds an immutable instance of the current configuration.
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.text.title.Title;
                            // @ts-ignore
                            public equals(o: java.lang.Object): boolean;
                            // @ts-ignore
                            public hashCode(): number;
                            // @ts-ignore
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}
