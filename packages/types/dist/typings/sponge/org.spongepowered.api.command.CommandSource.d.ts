// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                interface CommandSource extends org.spongepowered.api.text.channel.MessageReceiver, org.spongepowered.api.service.permission.Subject {
                    /**
                     * Gets the name identifying this command source.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the locale used by this command source. If this
                     * {@link CommandSource} does have a {@link Locale} configured or does not
                     * support configuring a {@link Locale}, {@link Locales#DEFAULT} is used.
                     */
                    // @ts-ignore
                     getLocale(): java.util.Locale;
                }
            }
        }
    }
}
