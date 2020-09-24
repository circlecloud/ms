export const METADATA_KEY = {
    plugin: Symbol.for("@ccms/plugin:plugin"),
    source: Symbol.for("@ccms/plugin:source"),
    cmd: Symbol.for("@ccms/plugin:cmd"),
    tab: Symbol.for("@ccms/plugin:tab"),
    listener: Symbol.for("@ccms/plugin:listener"),
    config: Symbol.for("@ccms/plugin:config"),
    stage: {
        load: Symbol.for("@ccms/plugin:stage:load"),
        enable: Symbol.for("@ccms/plugin:stage:enable"),
        disable: Symbol.for("@ccms/plugin:stage:disable")
    }
}
