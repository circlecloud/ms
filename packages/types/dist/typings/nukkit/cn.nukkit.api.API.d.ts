declare namespace cn {
    namespace nukkit {
        namespace api {
            // @ts-ignore
            interface API {
                /**
                 * Indicates the level of stability of an API element.
                 * The stability also describes when to use this API element.
                 */
                // @ts-ignore
                 usage(): cn.nukkit.api.API.Usage;
                /**
                 * Indicates definition or the platforms this API element supports.
                 */
                // @ts-ignore
                 definition(): cn.nukkit.api.API.Definition;
            }
        }
    }
}
