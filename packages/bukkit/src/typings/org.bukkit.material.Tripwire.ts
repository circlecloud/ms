declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Tripwire extends org.bukkit.material.MaterialData {
                constructor()
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Test if tripwire is currently activated
                 */
                public isActivated(): boolean;
                /**
                 * Set tripwire activated state
                 */
                public setActivated(act: boolean): void;
                /**
                 * Test if object triggering this tripwire directly
                 */
                public isObjectTriggering(): boolean;
                /**
                 * Set object triggering state for this tripwire
                 */
                public setObjectTriggering(trig: boolean): void;
                public clone(): org.bukkit.material.Tripwire;
                public toString(): string;
            }
        }
    }
}
