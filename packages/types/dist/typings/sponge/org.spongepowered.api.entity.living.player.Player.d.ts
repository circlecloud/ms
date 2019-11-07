declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        // @ts-ignore
                        interface Player extends org.spongepowered.api.entity.living.Humanoid, org.spongepowered.api.entity.living.player.User, org.spongepowered.api.command.source.RemoteSource, org.spongepowered.api.effect.Viewer, org.spongepowered.api.text.channel.ChatTypeMessageReceiver {
                            /**
                             * Returns whether this player has an open inventory at the moment
                             * or not.
                             */
                            // @ts-ignore
                             isViewingInventory(): boolean;
                            /**
                             * Gets the currently viewed inventory of this player, if it is
                             * currently viewing one.
                             */
                            // @ts-ignore
                             getOpenInventory(): java.util.Optional;
                            /**
                             * Opens the given Inventory for the player to view.
                             */
                            // @ts-ignore
                             openInventory(inventory: org.spongepowered.api.item.inventory.Inventory): java.util.Optional;
                            /**
                             * Opens a given Inventory for the player to view with a custom displayName.
                             * <p>Note that not all inventories support a custom display name.</p>
                             */
                            // @ts-ignore
                             openInventory(inventory: org.spongepowered.api.item.inventory.Inventory, displayName: org.spongepowered.api.text.Text): java.util.Optional;
                            /**
                             * Closes the currently viewed entity of this player, if it is currently
                             * viewing one.
                             */
                            // @ts-ignore
                             closeInventory(): boolean;
                            /**
                             * Gets the view distance setting of the player. This value represents the
                             * radius (around the player) in unit chunks.
                             */
                            // @ts-ignore
                             getViewDistance(): number;
                            /**
                             * Gets the current player chat visibility setting.
                             */
                            // @ts-ignore
                             getChatVisibility(): org.spongepowered.api.text.chat.ChatVisibility;
                            /**
                             * Gets whether the player has colors enabled in chat.
                             */
                            // @ts-ignore
                             isChatColorsEnabled(): boolean;
                            /**
                             * Simulates a chat message from a player.
                             * <p>This method sends a message as if it came from this player.
                             * To send a message to this player instead, see
                             * {@link MessageReceiver#sendMessage(Text)} or
                             * {@link ChatTypeMessageReceiver#sendMessage(ChatType, Text)}.</p>
                             * <p>Commands cannot be sent using this method. To send commands, use
                             * {@link CommandManager#process(CommandSource, String)}.</p>
                             * <p>If text formatting is not supported in the implementation
                             * it will be displayed as plain text.</p>
                             */
                            // @ts-ignore
                             simulateChat(message: org.spongepowered.api.text.Text, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.message.MessageChannelEvent.Chat;
                            /**
                             * Gets the skin parts that this player has allowed to render.
                             */
                            // @ts-ignore
                             getDisplayedSkinParts(): java.util.Set;
                            /**
                             * Gets the appropriate {@link PlayerConnection} linking this Player
                             * to a client.
                             */
                            // @ts-ignore
                             getConnection(): org.spongepowered.api.network.PlayerConnection;
                            /**
                             * Sends a given {@link ResourcePack} to this player.
                             */
                            // @ts-ignore
                             sendResourcePack(pack: org.spongepowered.api.resourcepack.ResourcePack): void;
                            /**
                             * Gets this player's {@link TabList}.
                             */
                            // @ts-ignore
                             getTabList(): org.spongepowered.api.entity.living.player.tab.TabList;
                            /**
                             * Kicks the player, showing the default kick reason (the translation key
                             * {@code disconnect.disconnected}).
                             */
                            // @ts-ignore
                             kick(): void;
                            /**
                             * Kicks the player given a reason.
                             */
                            // @ts-ignore
                             kick(reason: org.spongepowered.api.text.Text): void;
                            /**
                             * Gets the {@link Scoreboard} displayed to the player.
                             */
                            // @ts-ignore
                             getScoreboard(): org.spongepowered.api.scoreboard.Scoreboard;
                            /**
                             * Sets the {@link Scoreboard} displayed to the player.
                             */
                            // @ts-ignore
                             setScoreboard(scoreboard: org.spongepowered.api.scoreboard.Scoreboard): void;
                            /**
                             * Gets a copy of the current {@link JoinData}.
                             * <p>Since a {@link Player} is already online, it means that the player
                             * has joined the server at least once, meaning there is a guaranteed
                             * initial join {@link Instant}. Users may not have ever joined a server
                             * before.</p>
                             */
                            // @ts-ignore
                             getJoinData(): org.spongepowered.api.data.manipulator.mutable.entity.JoinData;
                            /**
                             * Gets the {@link Value} of the {@link Instant} that a {@link Player}
                             * joined the {@link Server} the first time.
                             */
                            // @ts-ignore
                             firstPlayed(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets the {@link Value} of the {@link Instant} that a {@link Player}
                             * joined the {@link Server} the last time.
                             */
                            // @ts-ignore
                             lastPlayed(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets if the {@link Player} has played on the {@link Server} before. Added
                             * as a utility.
                             */
                            // @ts-ignore
                             hasPlayedBefore(): boolean;
                            /**
                             * Gets a copy of the current {@link DisplayNameData} for this
                             * {@link Player}.
                             */
                            // @ts-ignore
                             getDisplayNameData(): org.spongepowered.api.data.manipulator.mutable.DisplayNameData;
                            /**
                             * Gets a copy of the current {@link GameModeData} for this {@link Player}.
                             */
                            // @ts-ignore
                             getGameModeData(): org.spongepowered.api.data.manipulator.mutable.entity.GameModeData;
                            /**
                             * Gets the current {@link GameMode} for this {@link Player}.
                             */
                            // @ts-ignore
                             gameMode(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets whether this {@link Player} will be ignored when checking whether to
                             * skip the night due to players sleeping. The time in a world will be
                             * advanced to day if all players in it either are sleeping or have this
                             * tag.
                             */
                            // @ts-ignore
                             isSleepingIgnored(): boolean;
                            /**
                             * Sets whether this {@link Player} will be ignored when checking whether
                             * to skip the night due to players sleeping. The time in a world will be
                             * advanced to day if all players in it either are sleeping or have this
                             * tag.
                             */
                            // @ts-ignore
                             setSleepingIgnored(sleepingIgnored: boolean): void;
                            /**
                             * Gets the {@link Inventory} available for this Player's shared {@link EnderChest}
                             * contents.
                             */
                            // @ts-ignore
                             getEnderChestInventory(): org.spongepowered.api.item.inventory.Inventory;
                            /**
                             * Manually respawns the player.
                             * <p>If the player is not dead, this method will return <tt>false</tt></p>
                             */
                            // @ts-ignore
                             respawnPlayer(): boolean;
                            /**
                             * Gets the {@link Entity} followed by the camera when in the
                             * {@link GameModes#SPECTATOR spectator gamemode}.
                             */
                            // @ts-ignore
                             getSpectatorTarget(): java.util.Optional;
                            /**
                             * Sets the {@link Entity} followed by the camera when in the
                             * {@link GameModes#SPECTATOR spectator gamemode}.
                             */
                            // @ts-ignore
                             setSpectatorTarget(entity: org.spongepowered.api.entity.Entity): void;
                            /**
                             * Gets the {@link WorldBorder} for this player, if present. If no border is
                             * set, an empty {@code Optional} is returned.
                             */
                            // @ts-ignore
                             getWorldBorder(): java.util.Optional;
                            /**
                             * Sets the {@link WorldBorder} instance for this player to the given world
                             * border. If {@code null} is passed, the world border is unset.
                             */
                            // @ts-ignore
                             setWorldBorder(border: org.spongepowered.api.world.WorldBorder, cause: org.spongepowered.api.event.cause.Cause): void;
                            /**
                             * Gets the {@link CooldownTracker} for this player, allowing control
                             * over the player's item cooldowns.
                             */
                            // @ts-ignore
                             getCooldownTracker(): org.spongepowered.api.entity.living.player.CooldownTracker;
                            /**
                             * Gets the {@link AdvancementProgress} for the
                             * specified {@link Advancement}.
                             */
                            // @ts-ignore
                             getProgress(advancement: org.spongepowered.api.advancement.Advancement): org.spongepowered.api.advancement.AdvancementProgress;
                            /**
                             * Gets all the {@link AdvancementTree}s that this
                             * {@link Player} already unlocked.
                             */
                            // @ts-ignore
                             getUnlockedAdvancementTrees(): java.util.Collection;
                        }
                    }
                }
            }
        }
    }
}
