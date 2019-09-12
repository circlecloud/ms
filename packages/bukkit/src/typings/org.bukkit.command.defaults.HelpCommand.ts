declare namespace org {
    namespace bukkit {
        namespace command {
            namespace defaults {
                class HelpCommand {
                    constructor()
                    public execute(sender: org.bukkit.command.CommandSender, currentAlias: string, args: string): boolean;
                    public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string): any[] /*java.util.List*/;
                    protected findPossibleMatches(searchString: string): org.bukkit.help.HelpTopic;
                    /**
                     * Computes the Dameraur-Levenshtein Distance between two strings. Adapted
                     * from the algorithm at <a href="http://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance">Wikipedia: Damerau–Levenshtein distance</a>
                     */
                    protected static damerauLevenshteinDistance(s1: string, s2: string): number;
                }
            }
        }
    }
}
