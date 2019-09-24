declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Phantom extends org.bukkit.entity.Flying {
                 getSize(): number;
                 setSize(sz: number): void;
            }
        }
    }
}
