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
                        public addObjective(objective: net.md_5.bungee.api.score.Objective): void;
                        // @ts-ignore
                        public addScore(score: net.md_5.bungee.api.score.Score): void;
                        // @ts-ignore
                        public getScore(name: string): net.md_5.bungee.api.score.Score;
                        // @ts-ignore
                        public addTeam(team: net.md_5.bungee.api.score.Team): void;
                        // @ts-ignore
                        public getTeam(name: string): net.md_5.bungee.api.score.Team;
                        // @ts-ignore
                        public getObjective(name: string): net.md_5.bungee.api.score.Objective;
                        // @ts-ignore
                        public removeObjective(objectiveName: string): void;
                        // @ts-ignore
                        public removeScore(scoreName: string): void;
                        // @ts-ignore
                        public removeTeam(teamName: string): void;
                        // @ts-ignore
                        public clear(): void;
                        /**
                         * Unique name for this scoreboard.
                         */
                        // @ts-ignore
                        public getName(): string;
                        /**
                         * Position of this scoreboard.
                         */
                        // @ts-ignore
                        public getPosition(): net.md_5.bungee.api.score.Position;
                        /**
                         * Unique name for this scoreboard.
                         */
                        // @ts-ignore
                        public setName(name: string): void;
                        /**
                         * Position of this scoreboard.
                         */
                        // @ts-ignore
                        public setPosition(position: net.md_5.bungee.api.score.Position): void;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
