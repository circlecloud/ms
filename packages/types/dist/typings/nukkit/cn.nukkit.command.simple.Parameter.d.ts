declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace simple {
                // @ts-ignore
                interface Parameter {
                    // @ts-ignore
                     name(): string;
                    // @ts-ignore
                     type(): cn.nukkit.command.data.CommandParamType;
                    // @ts-ignore
                     optional(): boolean;
                }
            }
        }
    }
}
