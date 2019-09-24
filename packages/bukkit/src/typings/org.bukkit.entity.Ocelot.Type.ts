declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Ocelot {
                // @ts-ignore
                 class Type {
                    public static WILD_OCELOT: org.bukkit.entity.Ocelot.Type;
                    public static BLACK_CAT: org.bukkit.entity.Ocelot.Type;
                    public static RED_CAT: org.bukkit.entity.Ocelot.Type;
                    public static SIAMESE_CAT: org.bukkit.entity.Ocelot.Type;
                    public static values(): org.bukkit.entity.Ocelot.Type[];
                    public static valueOf(name: string): org.bukkit.entity.Ocelot.Type;
                    /**
                     * Gets the ID of this cat type.
                     */
                    public getId(): number;
                    /**
                     * Gets a cat type by its ID.
                     */
                    public static getType(id: number): org.bukkit.entity.Ocelot.Type;
                }
            }
        }
    }
}
