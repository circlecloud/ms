declare namespace org {
    namespace bukkit {
        namespace entity {
            class Vex {
                /**
                 * Gets the charging state of this entity.
                 * When this entity is charging it will having a glowing red texture.
                 */
                public isCharging(): boolean;
                /**
                 * Sets the charging state of this entity.
                 * When this entity is charging it will having a glowing red texture.
                 */
                public setCharging(charging: boolean): void;
            }
        }
    }
}
