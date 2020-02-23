declare namespace cn {
    namespace nukkit {
        namespace console {
            // @ts-ignore
             class NukkitConsole extends SimpleTerminalConsole {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected isRunning(): boolean;
                // @ts-ignore
                protected runCommand(command: string): void;
                // @ts-ignore
                public readLine(): string;
                // @ts-ignore
                protected shutdown(): void;
                // @ts-ignore
                protected buildReader(builder: LineReaderBuilder): LineReader;
                // @ts-ignore
                public isExecutingCommands(): boolean;
                // @ts-ignore
                public setExecutingCommands(executingCommands: boolean): void;
            }
        }
    }
}
