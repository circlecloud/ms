declare namespace org {
    namespace bukkit {
        namespace FireworkEffect {
            // @ts-ignore
             class Builder extends java.lang.Object {
                /**
                 * Specify the type of the firework effect.
                 */
                // @ts-ignore
                public with(type: org.bukkit.FireworkEffect.Type): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a flicker to the firework effect.
                 */
                // @ts-ignore
                public withFlicker(): org.bukkit.FireworkEffect.Builder;
                /**
                 * Set whether the firework effect should flicker.
                 */
                // @ts-ignore
                public flicker(flicker: boolean): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a trail to the firework effect.
                 */
                // @ts-ignore
                public withTrail(): org.bukkit.FireworkEffect.Builder;
                /**
                 * Set whether the firework effect should have a trail.
                 */
                // @ts-ignore
                public trail(trail: boolean): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a primary color to the firework effect.
                 */
                // @ts-ignore
                public withColor(color: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several primary colors to the firework effect.
                 */
                // @ts-ignore
                public withColor(colors: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several primary colors to the firework effect.
                 */
                // @ts-ignore
                public withColor(colors: java.lang.Iterable): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a fade color to the firework effect.
                 */
                // @ts-ignore
                public withFade(color: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several fade colors to the firework effect.
                 */
                // @ts-ignore
                public withFade(colors: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several fade colors to the firework effect.
                 */
                // @ts-ignore
                public withFade(colors: java.lang.Iterable): org.bukkit.FireworkEffect.Builder;
                /**
                 * Create a {@link FireworkEffect} from the current contents of this
                 * builder.
                 * <p>
                 * To successfully build, you must have specified at least one color.
                 */
                // @ts-ignore
                public build(): org.bukkit.FireworkEffect;
            }
        }
    }
}
