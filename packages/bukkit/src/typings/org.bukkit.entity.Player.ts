declare namespace org {
    namespace bukkit {
        namespace entity {
            class Player {
                /**
                 * Gets the "friendly" name to display of this player. This may include
                 * color.
                 * <p>
                 * Note that this name will not be displayed in game, only in chat and
                 * places defined by plugins.
                 */
                public getDisplayName(): string;
                /**
                 * Sets the "friendly" name to display of this player. This may include
                 * color.
                 * <p>
                 * Note that this name will not be displayed in game, only in chat and
                 * places defined by plugins.
                 */
                public setDisplayName(name: string): void;
                /**
                 * Gets the name that is shown on the player list.
                 */
                public getPlayerListName(): string;
                /**
                 * Sets the name that is shown on the in-game player list.
                 * <p>
                 * If the value is null, the name will be identical to {@link #getName()}.
                 */
                public setPlayerListName(name: string): void;
                /**
                 * Gets the currently displayed player list header for this player.
                 */
                public getPlayerListHeader(): string;
                /**
                 * Gets the currently displayed player list footer for this player.
                 */
                public getPlayerListFooter(): string;
                /**
                 * Sets the currently displayed player list header for this player.
                 */
                public setPlayerListHeader(header: string): void;
                /**
                 * Sets the currently displayed player list footer for this player.
                 */
                public setPlayerListFooter(footer: string): void;
                /**
                 * Sets the currently displayed player list header and footer for this
                 * player.
                 */
                public setPlayerListHeaderFooter(header: string, footer: string): void;
                /**
                 * Set the target of the player's compass.
                 */
                public setCompassTarget(loc: org.bukkit.Location): void;
                /**
                 * Get the previously set compass target.
                 */
                public getCompassTarget(): org.bukkit.Location;
                /**
                 * Gets the socket address of this player
                 */
                public getAddress(): any;
                /**
                 * Sends this sender a message raw
                 */
                public sendRawMessage(message: string): void;
                /**
                 * Kicks player with custom kick message.
                 */
                public kickPlayer(message: string): void;
                /**
                 * Says a message (or runs a command).
                 */
                public chat(msg: string): void;
                /**
                 * Makes the player perform the given command
                 */
                public performCommand(command: string): boolean;
                /**
                 * Returns if the player is in sneak mode
                 */
                public isSneaking(): boolean;
                /**
                 * Sets the sneak mode the player
                 */
                public setSneaking(sneak: boolean): void;
                /**
                 * Gets whether the player is sprinting or not.
                 */
                public isSprinting(): boolean;
                /**
                 * Sets whether the player is sprinting or not.
                 */
                public setSprinting(sprinting: boolean): void;
                /**
                 * Saves the players current location, health, inventory, motion, and
                 * other information into the username.dat file, in the world/player
                 * folder
                 */
                public saveData(): void;
                /**
                 * Loads the players current location, health, inventory, motion, and
                 * other information from the username.dat file, in the world/player
                 * folder.
                 * <p>
                 * Note: This will overwrite the players current inventory, health,
                 * motion, etc, with the state from the saved dat file.
                 */
                public loadData(): void;
                /**
                 * Sets whether the player is ignored as not sleeping. If everyone is
                 * either sleeping or has this flag set, then time will advance to the
                 * next day. If everyone has this flag set but no one is actually in bed,
                 * then nothing will happen.
                 */
                public setSleepingIgnored(isSleeping: boolean): void;
                /**
                 * Returns whether the player is sleeping ignored.
                 */
                public isSleepingIgnored(): boolean;
                /**
                 * Play a note for a player at a location. This requires a note block
                 * at the particular location (as far as the client is concerned). This
                 * will not work without a note block. This will not work with cake.
                 */
                public playNote(loc: org.bukkit.Location, instrument: number, note: number): void;
                /**
                 * Play a note for a player at a location. This requires a note block
                 * at the particular location (as far as the client is concerned). This
                 * will not work without a note block. This will not work with cake.
                 */
                public playNote(loc: org.bukkit.Location, instrument: org.bukkit.Instrument, note: org.bukkit.Note): void;
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null.
                 */
                public playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, volume: number, pitch: number): void;
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null. No
                 * sound will be heard by the player if their client does not have the
                 * respective sound for the value passed.
                 */
                public playSound(location: org.bukkit.Location, sound: string, volume: number, pitch: number): void;
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null.
                 */
                public playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, category: org.bukkit.SoundCategory, volume: number, pitch: number): void;
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null. No sound
                 * will be heard by the player if their client does not have the respective
                 * sound for the value passed.
                 */
                public playSound(location: org.bukkit.Location, sound: string, category: org.bukkit.SoundCategory, volume: number, pitch: number): void;
                /**
                 * Stop the specified sound from playing.
                 */
                public stopSound(sound: org.bukkit.Sound): void;
                /**
                 * Stop the specified sound from playing.
                 */
                public stopSound(sound: string): void;
                /**
                 * Stop the specified sound from playing.
                 */
                public stopSound(sound: org.bukkit.Sound, category: org.bukkit.SoundCategory): void;
                /**
                 * Stop the specified sound from playing.
                 */
                public stopSound(sound: string, category: org.bukkit.SoundCategory): void;
                /**
                 * Plays an effect to just this player.
                 */
                public playEffect(loc: org.bukkit.Location, effect: org.bukkit.Effect, data: number): void;
                /**
                 * Plays an effect to just this player.
                 */
                public playEffect(loc: org.bukkit.Location, effect: org.bukkit.Effect, data: any): void;
                /**
                 * Send a block change. This fakes a block change packet for a user at a
                 * certain location. This will not actually change the world in any way.
                 */
                public sendBlockChange(loc: org.bukkit.Location, material: org.bukkit.Material, data: number): void;
                /**
                 * Send a block change. This fakes a block change packet for a user at a
                 * certain location. This will not actually change the world in any way.
                 */
                public sendBlockChange(loc: org.bukkit.Location, block: org.bukkit.block.data.BlockData): void;
                /**
                 * Send a chunk change. This fakes a chunk change packet for a user at a
                 * certain location. The updated cuboid must be entirely within a single
                 * chunk. This will not actually change the world in any way.
                 * <p>
                 * At least one of the dimensions of the cuboid must be even. The size of
                 * the data buffer must be 2.5*sx*sy*sz and formatted in accordance with
                 * the Packet51 format.
                 */
                public sendChunkChange(loc: org.bukkit.Location, sx: number, sy: number, sz: number, data: number): boolean;
                /**
                 * Send a sign change. This fakes a sign change packet for a user at
                 * a certain location. This will not actually change the world in any way.
                 * This method will use a sign at the location's block or a faked sign
                 * sent via
                 * {@link #sendBlockChange(org.bukkit.Location, org.bukkit.Material, byte)}.
                 * <p>
                 * If the client does not have a sign at the given location it will
                 * display an error message to the user.
                 */
                public sendSignChange(loc: org.bukkit.Location, lines: string): void;
                /**
                 * Send a sign change. This fakes a sign change packet for a user at
                 * a certain location. This will not actually change the world in any way.
                 * This method will use a sign at the location's block or a faked sign
                 * sent via
                 * {@link #sendBlockChange(org.bukkit.Location, org.bukkit.Material, byte)}.
                 * <p>
                 * If the client does not have a sign at the given location it will
                 * display an error message to the user.
                 */
                public sendSignChange(loc: org.bukkit.Location, lines: string, dyeColor: org.bukkit.DyeColor): void;
                /**
                 * Render a map and send it to the player in its entirety. This may be
                 * used when streaming the map in the normal manner is not desirable.
                 */
                public sendMap(map: org.bukkit.map.MapView): void;
                /**
                 * Forces an update of the player's entire inventory.
                 */
                public updateInventory(): void;
                /**
                 * Awards the given achievement and any parent achievements that the
                 * player does not have.
                 */
                public awardAchievement(achievement: org.bukkit.Achievement): void;
                /**
                 * Removes the given achievement and any children achievements that the
                 * player has.
                 */
                public removeAchievement(achievement: org.bukkit.Achievement): void;
                /**
                 * Gets whether this player has the given achievement.
                 */
                public hasAchievement(achievement: org.bukkit.Achievement): boolean;
                /**
                 * Increments the given statistic for this player.
                 * <p>
                 * This is equivalent to the following code:
                 * <code>incrementStatistic(Statistic, 1)</code>
                 */
                public incrementStatistic(statistic: org.bukkit.Statistic): void;
                /**
                 * Decrements the given statistic for this player.
                 * <p>
                 * This is equivalent to the following code:
                 * <code>decrementStatistic(Statistic, 1)</code>
                 */
                public decrementStatistic(statistic: org.bukkit.Statistic): void;
                /**
                 * Increments the given statistic for this player.
                 */
                public incrementStatistic(statistic: org.bukkit.Statistic, amount: number): void;
                /**
                 * Decrements the given statistic for this player.
                 */
                public decrementStatistic(statistic: org.bukkit.Statistic, amount: number): void;
                /**
                 * Sets the given statistic for this player.
                 */
                public setStatistic(statistic: org.bukkit.Statistic, newValue: number): void;
                /**
                 * Gets the value of the given statistic for this player.
                 */
                public getStatistic(statistic: org.bukkit.Statistic): number;
                /**
                 * Increments the given statistic for this player for the given material.
                 * <p>
                 * This is equivalent to the following code:
                 * <code>incrementStatistic(Statistic, Material, 1)</code>
                 */
                public incrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material): void;
                /**
                 * Decrements the given statistic for this player for the given material.
                 * <p>
                 * This is equivalent to the following code:
                 * <code>decrementStatistic(Statistic, Material, 1)</code>
                 */
                public decrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material): void;
                /**
                 * Gets the value of the given statistic for this player.
                 */
                public getStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material): number;
                /**
                 * Increments the given statistic for this player for the given material.
                 */
                public incrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material, amount: number): void;
                /**
                 * Decrements the given statistic for this player for the given material.
                 */
                public decrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material, amount: number): void;
                /**
                 * Sets the given statistic for this player for the given material.
                 */
                public setStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material, newValue: number): void;
                /**
                 * Increments the given statistic for this player for the given entity.
                 * <p>
                 * This is equivalent to the following code:
                 * <code>incrementStatistic(Statistic, EntityType, 1)</code>
                 */
                public incrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType): void;
                /**
                 * Decrements the given statistic for this player for the given entity.
                 * <p>
                 * This is equivalent to the following code:
                 * <code>decrementStatistic(Statistic, EntityType, 1)</code>
                 */
                public decrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType): void;
                /**
                 * Gets the value of the given statistic for this player.
                 */
                public getStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType): number;
                /**
                 * Increments the given statistic for this player for the given entity.
                 */
                public incrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType, amount: number): void;
                /**
                 * Decrements the given statistic for this player for the given entity.
                 */
                public decrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType, amount: number): void;
                /**
                 * Sets the given statistic for this player for the given entity.
                 */
                public setStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType, newValue: number): void;
                /**
                 * Sets the current time on the player's client. When relative is true the
                 * player's time will be kept synchronized to its world time with the
                 * specified offset.
                 * <p>
                 * When using non relative time the player's time will stay fixed at the
                 * specified time parameter. It's up to the caller to continue updating
                 * the player's time. To restore player time to normal use
                 * resetPlayerTime().
                 */
                public setPlayerTime(time: number, relative: boolean): void;
                /**
                 * Returns the player's current timestamp.
                 */
                public getPlayerTime(): number;
                /**
                 * Returns the player's current time offset relative to server time, or
                 * the current player's fixed time if the player's time is absolute.
                 */
                public getPlayerTimeOffset(): number;
                /**
                 * Returns true if the player's time is relative to the server time,
                 * otherwise the player's time is absolute and will not change its current
                 * time unless done so with setPlayerTime().
                 */
                public isPlayerTimeRelative(): boolean;
                /**
                 * Restores the normal condition where the player's time is synchronized
                 * with the server time.
                 * <p>
                 * Equivalent to calling setPlayerTime(0, true).
                 */
                public resetPlayerTime(): void;
                /**
                 * Sets the type of weather the player will see.  When used, the weather
                 * status of the player is locked until {@link #resetPlayerWeather()} is
                 * used.
                 */
                public setPlayerWeather(type: org.bukkit.WeatherType): void;
                /**
                 * Returns the type of weather the player is currently experiencing.
                 */
                public getPlayerWeather(): org.bukkit.WeatherType;
                /**
                 * Restores the normal condition where the player's weather is controlled
                 * by server conditions.
                 */
                public resetPlayerWeather(): void;
                /**
                 * Gives the player the amount of experience specified.
                 */
                public giveExp(amount: number): void;
                /**
                 * Gives the player the amount of experience levels specified. Levels can
                 * be taken by specifying a negative amount.
                 */
                public giveExpLevels(amount: number): void;
                /**
                 * Gets the players current experience points towards the next level.
                 * <p>
                 * This is a percentage value. 0 is "no progress" and 1 is "next level".
                 */
                public getExp(): number;
                /**
                 * Sets the players current experience points towards the next level
                 * <p>
                 * This is a percentage value. 0 is "no progress" and 1 is "next level".
                 */
                public setExp(exp: number): void;
                /**
                 * Gets the players current experience level
                 */
                public getLevel(): number;
                /**
                 * Sets the players current experience level
                 */
                public setLevel(level: number): void;
                /**
                 * Gets the players total experience points.
                 * <br>
                 * This refers to the total amount of experience the player has collected
                 * over time and is only displayed as the player's "score" upon dying.
                 */
                public getTotalExperience(): number;
                /**
                 * Sets the players current experience points.
                 * <br>
                 * This refers to the total amount of experience the player has collected
                 * over time and is only displayed as the player's "score" upon dying.
                 */
                public setTotalExperience(exp: number): void;
                /**
                 * Gets the players current exhaustion level.
                 * <p>
                 * Exhaustion controls how fast the food level drops. While you have a
                 * certain amount of exhaustion, your saturation will drop to zero, and
                 * then your food will drop to zero.
                 */
                public getExhaustion(): number;
                /**
                 * Sets the players current exhaustion level
                 */
                public setExhaustion(value: number): void;
                /**
                 * Gets the players current saturation level.
                 * <p>
                 * Saturation is a buffer for food level. Your food level will not drop if
                 * you are saturated {@literal >} 0.
                 */
                public getSaturation(): number;
                /**
                 * Sets the players current saturation level
                 */
                public setSaturation(value: number): void;
                /**
                 * Gets the players current food level
                 */
                public getFoodLevel(): number;
                /**
                 * Sets the players current food level
                 */
                public setFoodLevel(value: number): void;
                /**
                 * Determines if the Player is allowed to fly via jump key double-tap like
                 * in creative mode.
                 */
                public getAllowFlight(): boolean;
                /**
                 * Sets if the Player is allowed to fly via jump key double-tap like in
                 * creative mode.
                 */
                public setAllowFlight(flight: boolean): void;
                /**
                 * Hides a player from this player
                 */
                public hidePlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Hides a player from this player
                 */
                public hidePlayer(plugin: org.bukkit.plugin.Plugin, player: org.bukkit.entity.Player): void;
                /**
                 * Allows this player to see a player that was previously hidden
                 */
                public showPlayer(player: org.bukkit.entity.Player): void;
                /**
                 * Allows this player to see a player that was previously hidden. If
                 * another another plugin had hidden the player too, then the player will
                 * remain hidden until the other plugin calls this method too.
                 */
                public showPlayer(plugin: org.bukkit.plugin.Plugin, player: org.bukkit.entity.Player): void;
                /**
                 * Checks to see if a player has been hidden from this player
                 */
                public canSee(player: org.bukkit.entity.Player): boolean;
                /**
                 * Checks to see if this player is currently flying or not.
                 */
                public isFlying(): boolean;
                /**
                 * Makes this player start or stop flying.
                 */
                public setFlying(value: boolean): void;
                /**
                 * Sets the speed at which a client will fly. Negative values indicate
                 * reverse directions.
                 */
                public setFlySpeed(value: number): void;
                /**
                 * Sets the speed at which a client will walk. Negative values indicate
                 * reverse directions.
                 */
                public setWalkSpeed(value: number): void;
                /**
                 * Gets the current allowed speed that a client can fly.
                 */
                public getFlySpeed(): number;
                /**
                 * Gets the current allowed speed that a client can walk.
                 */
                public getWalkSpeed(): number;
                /**
                 * Request that the player's client download and switch texture packs.
                 * <p>
                 * The player's client will download the new texture pack asynchronously
                 * in the background, and will automatically switch to it once the
                 * download is complete. If the client has downloaded and cached the same
                 * texture pack in the past, it will perform a file size check against
                 * the response content to determine if the texture pack has changed and
                 * needs to be downloaded again. When this request is sent for the very
                 * first time from a given server, the client will first display a
                 * confirmation GUI to the player before proceeding with the download.
                 * <p>
                 * Notes:
                 * <ul>
                 * <li>Players can disable server textures on their client, in which
                 * case this method will have no affect on them. Use the
                 * {@link PlayerResourcePackStatusEvent} to figure out whether or not
                 * the player loaded the pack!
                 * <li>There is no concept of resetting texture packs back to default
                 * within Minecraft, so players will have to relog to do so or you
                 * have to send an empty pack.
                 * <li>The request is send with "null" as the hash. This might result
                 * in newer versions not loading the pack correctly.
                 * </ul>
                 */
                public setTexturePack(url: string): void;
                /**
                 * Request that the player's client download and switch resource packs.
                 * <p>
                 * The player's client will download the new resource pack asynchronously
                 * in the background, and will automatically switch to it once the
                 * download is complete. If the client has downloaded and cached the same
                 * resource pack in the past, it will perform a file size check against
                 * the response content to determine if the resource pack has changed and
                 * needs to be downloaded again. When this request is sent for the very
                 * first time from a given server, the client will first display a
                 * confirmation GUI to the player before proceeding with the download.
                 * <p>
                 * Notes:
                 * <ul>
                 * <li>Players can disable server resources on their client, in which
                 * case this method will have no affect on them. Use the
                 * {@link PlayerResourcePackStatusEvent} to figure out whether or not
                 * the player loaded the pack!
                 * <li>There is no concept of resetting resource packs back to default
                 * within Minecraft, so players will have to relog to do so or you
                 * have to send an empty pack.
                 * <li>The request is send with "null" as the hash. This might result
                 * in newer versions not loading the pack correctly.
                 * </ul>
                 */
                public setResourcePack(url: string): void;
                /**
                 * Request that the player's client download and switch resource packs.
                 * <p>
                 * The player's client will download the new resource pack asynchronously
                 * in the background, and will automatically switch to it once the
                 * download is complete. If the client has downloaded and cached a
                 * resource pack with the same hash in the past it will not download but
                 * directly apply the cached pack. When this request is sent for the very
                 * first time from a given server, the client will first display a
                 * confirmation GUI to the player before proceeding with the download.
                 * <p>
                 * Notes:
                 * <ul>
                 * <li>Players can disable server resources on their client, in which
                 * case this method will have no affect on them. Use the
                 * {@link PlayerResourcePackStatusEvent} to figure out whether or not
                 * the player loaded the pack!
                 * <li>There is no concept of resetting resource packs back to default
                 * within Minecraft, so players will have to relog to do so or you
                 * have to send an empty pack.
                 * </ul>
                 */
                public setResourcePack(url: string, hash: number): void;
                /**
                 * Gets the Scoreboard displayed to this player
                 */
                public getScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * Sets the player's visible Scoreboard.
                 */
                public setScoreboard(scoreboard: org.bukkit.scoreboard.Scoreboard): void;
                /**
                 * Gets if the client is displayed a 'scaled' health, that is, health on a
                 * scale from 0-{@link #getHealthScale()}.
                 */
                public isHealthScaled(): boolean;
                /**
                 * Sets if the client is displayed a 'scaled' health, that is, health on a
                 * scale from 0-{@link #getHealthScale()}.
                 * <p>
                 * Displayed health follows a simple formula <code>displayedHealth =
                 * getHealth() / getMaxHealth() * getHealthScale()</code>.
                 */
                public setHealthScaled(scale: boolean): void;
                /**
                 * Sets the number to scale health to for the client; this will also
                 * {@link #setHealthScaled(boolean) setHealthScaled(true)}.
                 * <p>
                 * Displayed health follows a simple formula <code>displayedHealth =
                 * getHealth() / getMaxHealth() * getHealthScale()</code>.
                 */
                public setHealthScale(scale: number): void;
                /**
                 * Gets the number that health is scaled to for the client.
                 */
                public getHealthScale(): number;
                /**
                 * Gets the entity which is followed by the camera when in
                 * {@link GameMode#SPECTATOR}.
                 */
                public getSpectatorTarget(): org.bukkit.entity.Entity;
                /**
                 * Sets the entity which is followed by the camera when in
                 * {@link GameMode#SPECTATOR}.
                 */
                public setSpectatorTarget(entity: org.bukkit.entity.Entity): void;
                /**
                 * Sends a title and a subtitle message to the player. If either of these
                 * values are null, they will not be sent and the display will remain
                 * unchanged. If they are empty strings, the display will be updated as
                 * such. If the strings contain a new line, only the first line will be
                 * sent. The titles will be displayed with the client's default timings.
                 */
                public sendTitle(title: string, subtitle: string): void;
                /**
                 * Sends a title and a subtitle message to the player. If either of these
                 * values are null, they will not be sent and the display will remain
                 * unchanged. If they are empty strings, the display will be updated as
                 * such. If the strings contain a new line, only the first line will be
                 * sent. All timings values may take a value of -1 to indicate that they
                 * will use the last value sent (or the defaults if no title has been
                 * displayed).
                 */
                public sendTitle(title: string, subtitle: string, fadeIn: number, stay: number, fadeOut: number): void;
                /**
                 * Resets the title displayed to the player. This will clear the displayed
                 * title / subtitle and reset timings to their default values.
                 */
                public resetTitle(): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 */
                public spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 */
                public spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 */
                public spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, data: any): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 */
                public spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, data: any): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 */
                public spawnParticle(particle: org.bukkit.Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
                /**
                 * Return the player's progression on the specified advancement.
                 */
                public getAdvancementProgress(advancement: org.bukkit.advancement.Advancement): org.bukkit.advancement.AdvancementProgress;
                /**
                 * Get the player's current client side view distance.
                 * <br>
                 * Will default to the server view distance if the client has not yet
                 * communicated this information,
                 */
                public getClientViewDistance(): number;
                /**
                 * Gets the player's current locale.
                 * The value of the locale String is not defined properly.
                 * <br>
                 * The vanilla Minecraft client will use lowercase language / country pairs
                 * separated by an underscore, but custom resource packs may use any format
                 * they wish.
                 */
                public getLocale(): string;
                /**
                 * Update the list of commands sent to the client.
                 * <br>
                 * Generally useful to ensure the client has a complete list of commands
                 * after permission changes are done.
                 */
                public updateCommands(): void;
                /**
                 * Open a {@link Material#WRITTEN_BOOK} for a Player
                 */
                public openBook(book: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
