declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Boss extends org.bukkit.entity.Entity {
                /**
                 * Returns the {@link BossBar} of the {@link Boss}
                 */
                 getBossBar(): org.bukkit.boss.BossBar;
            }
        }
    }
}
