declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Vex extends org.bukkit.entity.Monster {
                /**
                 * Gets the charging state of this entity.
                 * When this entity is charging it will having a glowing red texture.
                 */
                // @ts-ignore
                 isCharging(): boolean;
                /**
                 * Sets the charging state of this entity.
                 * When this entity is charging it will having a glowing red texture.
                 */
                // @ts-ignore
                 setCharging(charging: boolean): void;
            }
        }
    }
}
