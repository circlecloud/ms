declare namespace java {
    namespace rmi {
        namespace activation {
            namespace ActivationGroupDesc {
                // @ts-ignore
                 class CommandEnvironment extends java.lang.Object {
                    /**
                     * Create a CommandEnvironment with all the necessary
                     * information.
                     */
                    // @ts-ignore
                    constructor(cmdpath: string, argv: string)
                    /**
                     * Fetch the configured path-qualified java command name.
                     */
                    // @ts-ignore
                    public getCommandPath(): string;
                    /**
                     * Fetch the configured java command options.
                     */
                    // @ts-ignore
                    public getCommandOptions(): java.lang.String[];
                    /**
                     * Compares two command environments for content equality.
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    /**
                     * Return identical values for similar
                     * <code>CommandEnvironment</code>s.
                     */
                    // @ts-ignore
                    public hashCode(): number;
                }
            }
        }
    }
}
