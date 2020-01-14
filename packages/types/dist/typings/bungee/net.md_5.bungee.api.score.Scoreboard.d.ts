declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace score {
                    // @ts-ignore
                     class Scoreboard extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getObjectives(): java.util.Collection;
                        // @ts-ignore
                        public getScores(): java.util.Collection;
                        // @ts-ignore
                        public getTeams(): java.util.Collection;
                        // @ts-ignore
                        public addObjective(objective: any /*net.md_5.bungee.api.score.Objective*/): void;
                        // @ts-ignore
                        public addScore(score: any /*net.md_5.bungee.api.score.Score*/): void;
                        // @ts-ignore
                        public getScore(name: string): any /*net.md_5.bungee.api.score.Score*/;
                        // @ts-ignore
                        public addTeam(team: any /*net.md_5.bungee.api.score.Team*/): void;
                        // @ts-ignore
                        public getTeam(name: string): any /*net.md_5.bungee.api.score.Team*/;
                        // @ts-ignore
                        public getObjective(name: string): any /*net.md_5.bungee.api.score.Objective*/;
                        // @ts-ignore
                        public removeObjective(objectiveName: string): void;
                        // @ts-ignore
                        public removeScore(scoreName: string): void;
                        // @ts-ignore
                        public removeTeam(teamName: string): void;
                        // @ts-ignore
                        public clear(): void;
                    }
                }
            }
        }
    }
}
