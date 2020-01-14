declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace util {
                // @ts-ignore
                 class ChatComponentTransformer extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static getInstance(): any /*net.md_5.bungee.util.ChatComponentTransformer*/;
                    /**
                     * Transform a set of components, and attempt to transform the transformable
                     * fields. Entity selectors <b>cannot</b> be evaluated. This will
                     * recursively search for all extra components (see
                     * {@link BaseComponent#getExtra()}).
                     */
                    // @ts-ignore
                    public transform(player: ProxiedPlayer, component: BaseComponent): BaseComponent[];
                    /**
                     * Checks if the given string is an entity selector.
                     */
                    // @ts-ignore
                    public isSelectorPattern(pattern: string): boolean;
                }
            }
        }
    }
}
