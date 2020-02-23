declare namespace cn {
    namespace nukkit {
        namespace event {
            // @ts-ignore
            interface Cancellable {
                // @ts-ignore
                 isCancelled(): boolean;
                // @ts-ignore
                 setCancelled(): void;
                // @ts-ignore
                 setCancelled(forceCancel: boolean): void;
            }
        }
    }
}
