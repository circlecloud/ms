declare namespace org {
    namespace bukkit {
        namespace boss {
            // @ts-ignore
            interface BossBar {
                /**
                 * Returns the title of this boss bar
                 */
                 getTitle(): string;
                /**
                 * Sets the title of this boss bar
                 */
                 setTitle(title: string): void;
                /**
                 * Returns the color of this boss bar
                 */
                 getColor(): org.bukkit.boss.BarColor;
                /**
                 * Sets the color of this boss bar.
                 */
                 setColor(color: org.bukkit.boss.BarColor): void;
                /**
                 * Returns the style of this boss bar
                 */
                 getStyle(): org.bukkit.boss.BarStyle;
                /**
                 * Sets the bar style of this boss bar
                 */
                 setStyle(style: org.bukkit.boss.BarStyle): void;
                /**
                 * Remove an existing flag on this boss bar
                 */
                 removeFlag(flag: org.bukkit.boss.BarFlag): void;
                /**
                 * Add an optional flag to this boss bar
                 */
                 addFlag(flag: org.bukkit.boss.BarFlag): void;
                /**
                 * Returns whether this boss bar as the passed flag set
                 */
                 hasFlag(flag: org.bukkit.boss.BarFlag): boolean;
                /**
                 * Sets the progress of the bar. Values should be between 0.0 (empty) and
                 * 1.0 (full)
                 */
                 setProgress(progress: number): void;
                /**
                 * Returns the progress of the bar between 0.0 and 1.0
                 */
                 getProgress(): number;
                /**
                 * Adds the player to this boss bar causing it to display on their screen.
                 */
                 addPlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Removes the player from this boss bar causing it to be removed from their
                 * screen.
                 */
                 removePlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Removes all players from this boss bar
                 */
                 removeAll(): void;
                /**
                 * Returns all players viewing this boss bar
                 */
                 getPlayers(): any[] /*java.util.List*/;
                /**
                 * Set if the boss bar is displayed to attached players.
                 */
                 setVisible(visible: boolean): void;
                /**
                 * Return if the boss bar is displayed to attached players.
                 */
                 isVisible(): boolean;
                /**
                 * Shows the previously hidden boss bar to all attached players
                 */
                 show(): void;
                /**
                 * Hides this boss bar from all attached players
                 */
                 hide(): void;
            }
        }
    }
}
