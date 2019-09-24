declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class DetectorRail extends org.bukkit.material.ExtendedRails implements org.bukkit.material.PressureSensor {
                constructor()
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public isPressed(): boolean;
                public setPressed(isPressed: boolean): void;
                public clone(): org.bukkit.material.DetectorRail;
            }
        }
    }
}
