declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            interface EntityOwnable {
                // @ts-ignore
                 getOwnerName(): string;
                // @ts-ignore
                 setOwnerName(playerName: string): void;
                // @ts-ignore
                 getOwner(): cn.nukkit.Player;
            }
        }
    }
}
