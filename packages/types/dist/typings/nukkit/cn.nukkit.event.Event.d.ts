declare namespace cn {
    namespace nukkit {
        namespace event {
            // @ts-ignore
            abstract class Event extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected eventName: string;
                // @ts-ignore
                public getEventName(): string;
                // @ts-ignore
                public isCancelled(): boolean;
                // @ts-ignore
                public setCancelled(): void;
                // @ts-ignore
                public setCancelled(value: boolean): void;
            }
        }
    }
}
