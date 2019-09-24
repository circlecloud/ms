declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PressurePlate extends org.bukkit.material.MaterialData implements org.bukkit.material.PressureSensor {
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
