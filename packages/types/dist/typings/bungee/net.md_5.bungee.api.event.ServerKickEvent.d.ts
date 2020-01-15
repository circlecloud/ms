declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class ServerKickEvent extends net.md_5.bungee.api.plugin.Event implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, kickReasonComponent: BaseComponent, cancelServer: net.md_5.bungee.api.config.ServerInfo)
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, kickReasonComponent: BaseComponent, cancelServer: net.md_5.bungee.api.config.ServerInfo, state: net.md_5.bungee.api.event.ServerKickEvent.State)
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, kickedFrom: net.md_5.bungee.api.config.ServerInfo, kickReasonComponent: BaseComponent, cancelServer: net.md_5.bungee.api.config.ServerInfo, state: net.md_5.bungee.api.event.ServerKickEvent.State)
                        // @ts-ignore
                        public getKickReason(): string;
                        // @ts-ignore
                        public setKickReason(reason: string): void;
                        /**
                         * Cancelled status.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean;
                        /**
                         * Player being kicked.
                         */
                        // @ts-ignore
                        public getPlayer(): net.md_5.bungee.api.connection.ProxiedPlayer;
                        /**
                         * The server the player was kicked from, should be used in preference to
                         * {@link ProxiedPlayer#getServer()}.
                         */
                        // @ts-ignore
                        public getKickedFrom(): net.md_5.bungee.api.config.ServerInfo;
                        /**
                         * Kick reason.
                         */
                        // @ts-ignore
                        public getKickReasonComponent(): BaseComponent[];
                        /**
                         * Server to send player to if this event is cancelled.
                         */
                        // @ts-ignore
                        public getCancelServer(): net.md_5.bungee.api.config.ServerInfo;
                        /**
                         * State in which the kick occured.
                         */
                        // @ts-ignore
                        public getState(): net.md_5.bungee.api.event.ServerKickEvent.State;
                        /**
                         * Cancelled status.
                         */
                        // @ts-ignore
                        public setCancelled(cancelled: boolean): void;
                        /**
                         * Kick reason.
                         */
                        // @ts-ignore
                        public setKickReasonComponent(kickReasonComponent: BaseComponent): void;
                        /**
                         * Server to send player to if this event is cancelled.
                         */
                        // @ts-ignore
                        public setCancelServer(cancelServer: net.md_5.bungee.api.config.ServerInfo): void;
                        /**
                         * State in which the kick occured.
                         */
                        // @ts-ignore
                        public setState(state: net.md_5.bungee.api.event.ServerKickEvent.State): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
