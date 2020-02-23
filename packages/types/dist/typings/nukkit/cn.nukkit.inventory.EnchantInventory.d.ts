declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class EnchantInventory extends cn.nukkit.inventory.FakeBlockUIComponent {
                // @ts-ignore
                constructor(playerUI: cn.nukkit.inventory.PlayerUIInventory, position: cn.nukkit.level.Position)
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
            }
        }
    }
}
