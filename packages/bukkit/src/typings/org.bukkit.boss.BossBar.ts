declare namespace org {
    namespace bukkit {
        namespace boss {
            class BossBar {
                /**
                 * Returns the title of this boss bar
                 */
                public getTitle(): string;
                /**
                 * Sets the title of this boss bar
                 */
                public setTitle(title: string): void;
                /**
                 * Returns the color of this boss bar
                 */
                public getColor(): org.bukkit.boss.BarColor;
                /**
                 * Sets the color of this boss bar.
                 */
                public setColor(color: org.bukkit.boss.BarColor): void;
                /**
                 * Returns the style of this boss bar
                 */
                public getStyle(): org.bukkit.boss.BarStyle;
                /**
                 * Sets the bar style of this boss bar
                 */
                public setStyle(style: org.bukkit.boss.BarStyle): void;
                /**
                 * Remove an existing flag on this boss bar
                 */
                public removeFlag(flag: org.bukkit.boss.BarFlag): void;
                /**
                 * Add an optional flag to this boss bar
                 */
                public addFlag(flag: org.bukkit.boss.BarFlag): void;
                /**
                 * Returns whether this boss bar as the passed flag set
                 */
                public hasFlag(flag: org.bukkit.boss.BarFlag): boolean;
                /**
                 * Sets the progress of the bar. Values should be between 0.0 (empty) and
                 * 1.0 (full)
                 */
                public setProgress(progress: number): void;
                /**
                 * Returns the progress of the bar between 0.0 and 1.0
                 */
                public getProgress(): number;
                /**
                 * Adds the player to this boss bar causing it to display on their screen.
                 */
                public addPlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Removes the player from this boss bar causing it to be removed from their
                 * screen.
                 */
                public removePlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Removes all players from this boss bar
                 */
                public removeAll(): void;
                /**
                 * Returns all players viewing this boss bar
                 */
                public getPlayers(): any[] /*java.util.List*/;
                /**
                 * Set if the boss bar is displayed to attached players.
                 */
                public setVisible(visible: boolean): void;
                /**
                 * Return if the boss bar is displayed to attached players.
                 */
                public isVisible(): boolean;
                /**
                 * Shows the previously hidden boss bar to all attached players
                 */
                public show(): void;
                /**
                 * Hides this boss bar from all attached players
                 */
                public hide(): void;
            }
        }
    }
}
