declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Rabbit extends org.bukkit.entity.Animals {
                 getRabbitType(): org.bukkit.entity.Rabbit.Type;
                 setRabbitType(type: org.bukkit.entity.Rabbit.Type): void;
            }
        }
    }
}
