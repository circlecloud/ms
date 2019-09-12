declare namespace org {
    namespace bukkit {
        namespace material {
            class DetectorRail {
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
