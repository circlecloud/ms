declare namespace org {
    namespace bukkit {
        namespace material {
            class PressurePlate {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isPressed(): boolean;
                public toString(): string;
                public clone(): org.bukkit.material.PressurePlate;
            }
        }
    }
}
