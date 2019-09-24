declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Guardian extends org.bukkit.entity.Monster {
                /**
                 * Check if the Guardian is an elder Guardian
                 */
                 isElder(): boolean;
                 setElder(shouldBeElder: boolean): void;
            }
        }
    }
}
