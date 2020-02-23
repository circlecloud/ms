declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class DummyBossBar extends java.lang.Object {
                // @ts-ignore
                public getPlayer(): cn.nukkit.Player;
                // @ts-ignore
                public getBossBarId(): number;
                // @ts-ignore
                public getText(): string;
                // @ts-ignore
                public setText(text: string): void;
                // @ts-ignore
                public getLength(): number;
                // @ts-ignore
                public setLength(length: number): void;
                /**
                 * Color is not working in the current version. We are keep waiting for client support.
                 */
                // @ts-ignore
                public setColor(color: cn.nukkit.utils.BlockColor): void;
                // @ts-ignore
                public setColor(red: number, green: number, blue: number): void;
                // @ts-ignore
                public getMixedColor(): number;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                /**
                 * Don't let the entity go too far from the player, or the BossBar will disappear.
                 * Update boss entity's position when teleport and each 5s.
                 */
                // @ts-ignore
                public updateBossEntityPosition(): void;
                // @ts-ignore
                public create(): void;
                /**
                 * Once the player has teleported, resend Show BossBar
                 */
                // @ts-ignore
                public reshow(): void;
                // @ts-ignore
                public destroy(): void;
            }
        }
    }
}
