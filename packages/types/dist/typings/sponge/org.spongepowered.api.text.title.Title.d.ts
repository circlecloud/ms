// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace title {
                    // @ts-ignore
                     class Title extends java.lang.Object {
                        // @ts-ignore
                        public static EMPTY: org.spongepowered.api.text.title.Title;
                        // @ts-ignore
                        public static CLEAR: org.spongepowered.api.text.title.Title;
                        // @ts-ignore
                        public static RESET: org.spongepowered.api.text.title.Title;
                        /**
                         * Returns the title of this title configuration.
                         */
                        // @ts-ignore
                        public getTitle(): java.util.Optional;
                        /**
                         * Returns the subtitle of this title configuration.
                         */
                        // @ts-ignore
                        public getSubtitle(): java.util.Optional;
                        /**
                         * Returns the action bar text of this title configuration.
                         */
                        // @ts-ignore
                        public getActionBar(): java.util.Optional;
                        /**
                         * Returns the specified time to fade in the title on the client. Once this
                         * period of time is over, the title will stay for the amount of time from
                         * {@link #getStay}.
                         * <p>The default value for Vanilla is 20 (1 second).</p>
                         */
                        // @ts-ignore
                        public getFadeIn(): java.util.Optional;
                        /**
                         * Returns the specified time how long the title should stay on the client.
                         * Once this period of time is over, the title will fade out using the
                         * duration specified from {@link #getFadeOut}.
                         * <p>The default value for Vanilla is 60 (3 second).</p>
                         */
                        // @ts-ignore
                        public getStay(): java.util.Optional;
                        /**
                         * Returns the specified time to fade out the title on the client.
                         * <p>The default value for Vanilla is 20 (1 second).</p>
                         */
                        // @ts-ignore
                        public getFadeOut(): java.util.Optional;
                        /**
                         * Returns whether this configuration is clearing the current title from the
                         * screen.
                         */
                        // @ts-ignore
                        public isClear(): boolean;
                        /**
                         * Returns whether this configuration is clearing the current title from the
                         * screen and resetting the current configuration to the default values.
                         * <p>This is recommended when you want to make sure to display a single
                         * title.</p>
                         */
                        // @ts-ignore
                        public isReset(): boolean;
                        /**
                         * Creates a new {@link Builder} using the configuration of this instance.
                         */
                        // @ts-ignore
                        public toBuilder(): org.spongepowered.api.text.title.Title.Builder;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                        /**
                         * Returns a {@link Title} that will simply do nothing when it is sent to
                         * the client.
                         */
                        // @ts-ignore
                        public static of(): org.spongepowered.api.text.title.Title;
                        /**
                         * Returns a {@link Title} that will display the given main title on the
                         * player's screen.
                         */
                        // @ts-ignore
                        public static of(title: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title;
                        /**
                         * Returns a {@link Title} that will display the given main and subtitle on
                         * the player's screen.
                         */
                        // @ts-ignore
                        public static of(title: org.spongepowered.api.text.Text, subtitle: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title;
                        /**
                         * Returns a {@link Title} that will clear the currently displayed
                         * {@link Title} from the player's screen.
                         */
                        // @ts-ignore
                        public static clear(): org.spongepowered.api.text.title.Title;
                        /**
                         * Returns a {@link Title} that will reset the current title back to default
                         * values on the client.
                         */
                        // @ts-ignore
                        public static reset(): org.spongepowered.api.text.title.Title;
                        /**
                         * Creates a new {@link Title} configuration builder that will reset the
                         * currently displayed Title on the client before displaying the new
                         * configured one.
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.text.title.Title.Builder;
                        /**
                         * Creates a new empty {@link Title} configuration builder. Unlike
                         * {@link #builder} this won't reset the current Title on the client before
                         * displaying the current one. This has less use cases but should be used if
                         * just the previously sent Title should be updated.
                         */
                        // @ts-ignore
                        public static update(): org.spongepowered.api.text.title.Title.Builder;
                    }
                }
            }
        }
    }
}
