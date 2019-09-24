declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Panda extends org.bukkit.entity.Animals {
                /**
                 * Gets this Panda's main gene.
                 */
                 getMainGene(): org.bukkit.entity.Panda.Gene;
                /**
                 * Sets this Panda's main gene.
                 */
                 setMainGene(gene: org.bukkit.entity.Panda.Gene): void;
                /**
                 * Gets this Panda's hidden gene.
                 */
                 getHiddenGene(): org.bukkit.entity.Panda.Gene;
                /**
                 * Sets this Panda's hidden gene.
                 */
                 setHiddenGene(gene: org.bukkit.entity.Panda.Gene): void;
            }
        }
    }
}
