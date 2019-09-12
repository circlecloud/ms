declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Panda {
                class Gene {
                    public static NORMAL: org.bukkit.entity.Panda.Gene;
                    public static LAZY: org.bukkit.entity.Panda.Gene;
                    public static WORRIED: org.bukkit.entity.Panda.Gene;
                    public static PLAYFUL: org.bukkit.entity.Panda.Gene;
                    public static BROWN: org.bukkit.entity.Panda.Gene;
                    public static WEAK: org.bukkit.entity.Panda.Gene;
                    public static AGGRESSIVE: org.bukkit.entity.Panda.Gene;
                    public static values(): org.bukkit.entity.Panda.Gene[];
                    public static valueOf(name: string): org.bukkit.entity.Panda.Gene;
                    /**
                     * Gets whether this gene is recessive, i.e. required in both parents to
                     * propagate to children.
                     */
                    public isRecessive(): boolean;
                }
            }
        }
    }
}
