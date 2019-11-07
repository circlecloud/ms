declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class DetectorRail extends org.bukkit.material.ExtendedRails implements org.bukkit.material.PressureSensor {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public isPressed(): boolean;
                // @ts-ignore
                public setPressed(isPressed: boolean): void;
                // @ts-ignore
                public clone(): org.bukkit.material.DetectorRail;
            }
        }
    }
}
