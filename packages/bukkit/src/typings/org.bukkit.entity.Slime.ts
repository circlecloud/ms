declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Slime extends org.bukkit.entity.Mob {
                 getSize(): number;
                 setSize(sz: number): void;
            }
        }
    }
}
