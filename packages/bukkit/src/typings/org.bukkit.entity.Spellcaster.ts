declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Spellcaster extends org.bukkit.entity.Illager {
                /**
                 * Gets the {@link Spell} the entity is currently using.
                 */
                 getSpell(): org.bukkit.entity.Spellcaster.Spell;
                /**
                 * Sets the {@link Spell} the entity is currently using.
                 */
                 setSpell(spell: org.bukkit.entity.Spellcaster.Spell): void;
            }
        }
    }
}
