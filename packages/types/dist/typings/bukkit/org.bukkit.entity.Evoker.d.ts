declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Evoker extends org.bukkit.entity.Spellcaster {
                /**
                 * Gets the {@link Spell} the Evoker is currently using.
                 */
                // @ts-ignore
                 getCurrentSpell(): org.bukkit.entity.Evoker.Spell;
                /**
                 * Sets the {@link Spell} the Evoker is currently using.
                 */
                // @ts-ignore
                 setCurrentSpell(spell: org.bukkit.entity.Evoker.Spell): void;
            }
        }
    }
}
