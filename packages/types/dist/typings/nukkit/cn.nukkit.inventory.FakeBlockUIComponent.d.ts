declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class FakeBlockUIComponent extends cn.nukkit.inventory.PlayerUIComponent {
                // @ts-ignore
                public getHolder(): cn.nukkit.inventory.FakeBlockMenu;
                // @ts-ignore
                public open(who: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
            }
        }
    }
}
