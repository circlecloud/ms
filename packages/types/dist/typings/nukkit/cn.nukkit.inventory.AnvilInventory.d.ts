declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class AnvilInventory extends cn.nukkit.inventory.FakeBlockUIComponent {
                // @ts-ignore
                constructor(playerUI: cn.nukkit.inventory.PlayerUIInventory, position: cn.nukkit.level.Position)
                // @ts-ignore
                public static TARGET: number;
                // @ts-ignore
                public static SACRIFICE: number;
                // @ts-ignore
                public static RESULT: number;
                // @ts-ignore
                public onRename(player: cn.nukkit.Player, resultItem: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
            }
        }
    }
}
