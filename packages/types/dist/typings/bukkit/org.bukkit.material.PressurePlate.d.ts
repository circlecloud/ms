declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class PressurePlate extends org.bukkit.material.MaterialData implements org.bukkit.material.PressureSensor {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isPressed(): boolean;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.PressurePlate;
            }
        }
    }
}
