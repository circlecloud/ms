declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Sheep extends org.bukkit.entity.Animals, org.bukkit.material.Colorable {
                 isSheared(): boolean;
                 setSheared(flag: boolean): void;
            }
        }
    }
}
