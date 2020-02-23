declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace simple {
                // @ts-ignore
                interface Command {
                    // @ts-ignore
                     name(): string;
                    // @ts-ignore
                     description(): string;
                    // @ts-ignore
                     usageMessage(): string;
                    // @ts-ignore
                     aliases(): java.lang.String[];
                }
            }
        }
    }
}
