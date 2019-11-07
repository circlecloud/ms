// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace FireworkEffect {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets whether the {@link FireworkEffect} is going to have a trail
                         * or not.
                         */
                        // @ts-ignore
                         trail(trail: boolean): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Sets whether the {@link FireworkEffect} is going to flicker
                         * on explosion.
                         */
                        // @ts-ignore
                         flicker(flicker: boolean): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Adds the given {@link Color} to the initial explosion colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         */
                        // @ts-ignore
                         color(color: org.spongepowered.api.util.Color): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Adds the given {@link Color}s to the initial explosion colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         */
                        // @ts-ignore
                         colors(colors: org.spongepowered.api.util.Color): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Adds the given {@link Color}s to the initial explosion colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         */
                        // @ts-ignore
                         colors(colors: java.lang.Iterable): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Adds the given {@link Color} to the fade colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         */
                        // @ts-ignore
                         fade(color: org.spongepowered.api.util.Color): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Adds the given {@link Color}s to the fade colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         */
                        // @ts-ignore
                         fades(colors: org.spongepowered.api.util.Color): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Adds the given {@link Color}s to the fade colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         */
                        // @ts-ignore
                         fades(colors: java.lang.Iterable): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Sets the shape of the {@link FireworkEffect} explosion.
                         */
                        // @ts-ignore
                         shape(shape: org.spongepowered.api.item.FireworkShape): org.spongepowered.api.item.FireworkEffect.Builder;
                        /**
                         * Builds a {@link FireworkEffect} based on the current state of this
                         * builder.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.item.FireworkEffect;
                    }
                }
            }
        }
    }
}
