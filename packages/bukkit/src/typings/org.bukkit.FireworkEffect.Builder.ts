declare namespace org {
    namespace bukkit {
        namespace FireworkEffect {
            class Builder {
                /**
                 * Specify the type of the firework effect.
                 */
                public with(type: org.bukkit.FireworkEffect.Type): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a flicker to the firework effect.
                 */
                public withFlicker(): org.bukkit.FireworkEffect.Builder;
                /**
                 * Set whether the firework effect should flicker.
                 */
                public flicker(flicker: boolean): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a trail to the firework effect.
                 */
                public withTrail(): org.bukkit.FireworkEffect.Builder;
                /**
                 * Set whether the firework effect should have a trail.
                 */
                public trail(trail: boolean): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a primary color to the firework effect.
                 */
                public withColor(color: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several primary colors to the firework effect.
                 */
                public withColor(colors: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several primary colors to the firework effect.
                 */
                public withColor(colors: any): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add a fade color to the firework effect.
                 */
                public withFade(color: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several fade colors to the firework effect.
                 */
                public withFade(colors: org.bukkit.Color): org.bukkit.FireworkEffect.Builder;
                /**
                 * Add several fade colors to the firework effect.
                 */
                public withFade(colors: any): org.bukkit.FireworkEffect.Builder;
                /**
                 * Create a {@link FireworkEffect} from the current contents of this
                 * builder.
                 * <p>
                 * To successfully build, you must have specified at least one color.
                 */
                public build(): org.bukkit.FireworkEffect;
            }
        }
    }
}
