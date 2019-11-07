declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Guardian extends org.bukkit.entity.Monster {
                /**
                 * Check if the Guardian is an elder Guardian
                 */
                // @ts-ignore
                 isElder(): boolean;
                // @ts-ignore
                 setElder(shouldBeElder: boolean): void;
            }
        }
    }
}
