declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                 class CommandMessageFormatting {
                    // @ts-ignore
                    public static PIPE_TEXT: org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public static SPACE_TEXT: org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public static STAR_TEXT: org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public static LT_TEXT: org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public static GT_TEXT: org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public static ELLIPSIS_TEXT: org.spongepowered.api.text.Text;
                    /**
                     * Format text to be output as an error directly to a sender. Not necessary
                     * when creating an exception to be thrown
                     */
                    // @ts-ignore
                    public static error(error: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                    /**
                     * Format text to be output as a debug message directly to a sender.
                     */
                    // @ts-ignore
                    public static debug(debug: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                }
            }
        }
    }
}
