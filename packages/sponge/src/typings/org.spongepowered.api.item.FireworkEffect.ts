declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                // @ts-ignore
                interface FireworkEffect extends org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a new {@link Builder} to build a {@link FireworkEffect}.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.item.FireworkEffect.Builder;
                    /**
                     * Gets whether this {@link FireworkEffect} will flicker when
                     * detonated.
                     */
                    // @ts-ignore
                     flickers(): boolean;
                    /**
                     * Gets whether this {@link FireworkEffect} will have a trail
                     * when detonated.
                     */
                    // @ts-ignore
                     hasTrail(): boolean;
                    /**
                     * Gets the ordered list of colors.
                     * <p>In some implementations, the order of colors defines the colors
                     * showing from edge to center of the firework explosion.</p>
                     */
                    // @ts-ignore
                     getColors(): any[] /*java.util.List*/;
                    /**
                     * Gets the ordered list of colors.
                     * <p>Normally in vanilla, the order of colors defines the colors
                     * showing from edge to center of the firework explosion.</p>
                     */
                    // @ts-ignore
                     getFadeColors(): any[] /*java.util.List*/;
                    /**
                     * Gets the explosion shape.
                     */
                    // @ts-ignore
                     getShape(): org.spongepowered.api.item.FireworkShape;
                }
            }
        }
    }
}
