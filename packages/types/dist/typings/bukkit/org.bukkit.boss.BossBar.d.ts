declare namespace org {
    namespace bukkit {
        namespace boss {
            // @ts-ignore
            interface BossBar {
                /**
                 * Returns the title of this boss bar
                 */
                // @ts-ignore
                 getTitle(): string;
                /**
                 * Sets the title of this boss bar
                 */
                // @ts-ignore
                 setTitle(title: string): void;
                /**
                 * Returns the color of this boss bar
                 */
                // @ts-ignore
                 getColor(): org.bukkit.boss.BarColor;
                /**
                 * Sets the color of this boss bar.
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.boss.BarColor): void;
                /**
                 * Returns the style of this boss bar
                 */
                // @ts-ignore
                 getStyle(): org.bukkit.boss.BarStyle;
                /**
                 * Sets the bar style of this boss bar
                 */
                // @ts-ignore
                 setStyle(style: org.bukkit.boss.BarStyle): void;
                /**
                 * Remove an existing flag on this boss bar
                 */
                // @ts-ignore
                 removeFlag(flag: org.bukkit.boss.BarFlag): void;
                /**
                 * Add an optional flag to this boss bar
                 */
                // @ts-ignore
                 addFlag(flag: org.bukkit.boss.BarFlag): void;
                /**
                 * Returns whether this boss bar as the passed flag set
                 */
                // @ts-ignore
                 hasFlag(flag: org.bukkit.boss.BarFlag): boolean;
                /**
                 * Sets the progress of the bar. Values should be between 0.0 (empty) and
                 * 1.0 (full)
                 */
                // @ts-ignore
                 setProgress(progress: number): void;
                /**
                 * Returns the progress of the bar between 0.0 and 1.0
                 */
                // @ts-ignore
                 getProgress(): number;
                /**
                 * Adds the player to this boss bar causing it to display on their screen.
                 */
                // @ts-ignore
                 addPlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Removes the player from this boss bar causing it to be removed from their
                 * screen.
                 */
                // @ts-ignore
                 removePlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Removes all players from this boss bar
                 */
                // @ts-ignore
                 removeAll(): void;
                /**
                 * Returns all players viewing this boss bar
                 */
                // @ts-ignore
                 getPlayers(): java.util.List;
                /**
                 * Set if the boss bar is displayed to attached players.
                 */
                // @ts-ignore
                 setVisible(visible: boolean): void;
                /**
                 * Return if the boss bar is displayed to attached players.
                 */
                // @ts-ignore
                 isVisible(): boolean;
                /**
                 * Shows the previously hidden boss bar to all attached players
                 */
                // @ts-ignore
                 show(): void;
                /**
                 * Hides this boss bar from all attached players
                 */
                // @ts-ignore
                 hide(): void;
            }
        }
    }
}
