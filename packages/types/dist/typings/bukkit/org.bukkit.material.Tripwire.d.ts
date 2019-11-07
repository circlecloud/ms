declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Tripwire extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Test if tripwire is currently activated
                 */
                // @ts-ignore
                public isActivated(): boolean;
                /**
                 * Set tripwire activated state
                 */
                // @ts-ignore
                public setActivated(act: boolean): void;
                /**
                 * Test if object triggering this tripwire directly
                 */
                // @ts-ignore
                public isObjectTriggering(): boolean;
                /**
                 * Set object triggering state for this tripwire
                 */
                // @ts-ignore
                public setObjectTriggering(trig: boolean): void;
                // @ts-ignore
                public clone(): org.bukkit.material.Tripwire;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
