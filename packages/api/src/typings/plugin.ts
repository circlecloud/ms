export interface CommandInfo {
    aliases: string[];
    description: string;
}
export interface PluginInfo {
    description: PluginDescription;
}
export interface PluginDescription {
    name: string;
    version: string;
    author: string;
    commands: { [key: string]: CommandInfo };
}