// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                 class ImmutableCommandMapping extends java.lang.Object implements org.spongepowered.api.command.CommandMapping {
                    /**
                     * Create a new instance.
                     */
                    // @ts-ignore
                    constructor(callable: org.spongepowered.api.command.CommandCallable, primary: string, alias: string)
                    /**
                     * Create a new instance.
                     */
                    // @ts-ignore
                    constructor(callable: org.spongepowered.api.command.CommandCallable, primary: string, aliases: java.util.Collection)
                    // @ts-ignore
                    public getPrimaryAlias(): string;
                    // @ts-ignore
                    public getAllAliases(): java.util.Set;
                    // @ts-ignore
                    public getCallable(): org.spongepowered.api.command.CommandCallable;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
