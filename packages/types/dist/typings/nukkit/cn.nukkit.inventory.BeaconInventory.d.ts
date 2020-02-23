declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class BeaconInventory extends cn.nukkit.inventory.FakeBlockUIComponent {
                // @ts-ignore
                constructor(playerUI: cn.nukkit.inventory.PlayerUIInventory, position: cn.nukkit.level.Position)
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
            }
        }
    }
}
