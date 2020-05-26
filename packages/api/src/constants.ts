export namespace constants {
    export namespace Reflect {
        export const Method = {
            getServerConnection: [/*spigot 1.8.8*/'aq',/*spigot 1.12.2*/ 'an', /*spigot 1.14.4+*/'getServerConnection', /*catserver 1.12.2*/'func_147137_ag']
        }
        export const Field = {
            listeningChannels: [/*spigot 1.8.8-1.12.2*/'g', /*spigot 1.14.4*/'f', /*spigot 1.15.2+*/'listeningChannels', /*catserver 1.12.2*/'field_151274_e']
        }
    }
    export enum ServerType {
        Bukkit = 'bukkit',
        Sponge = 'sponge',
        Nukkit = 'nukkit',
        Bungee = 'bungee',
        Spring = 'spring'
    }
}
