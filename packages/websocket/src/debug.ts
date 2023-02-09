export = (namepsace) =>
    (...args) => {
        console.trace(`[${namepsace}] ` + format(...args))
    } //console.debug(namepsace, ...args)
let formatters: any = {}
formatters.s = function (v) {
    return v
}
formatters.j = function (v) {
    try {
        return JSON.stringify(v)
    } catch (error: any) {
        return "[UnexpectedJSONParseError]: " + error.message
    }
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */
function coerce(val) {
    if (val instanceof Error) {
        return val.stack || val.message
    }
    return val
}
function format(...args) {
    // Apply any `formatters` transformations
    args[0] = coerce(args[0])

    if (typeof args[0] !== "string") {
        // Anything else let's inspect with %O
        args.unshift("%O")
    }

    let index = 0
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        // If we encounter an escaped % then don't increase the array index
        if (match === "%%") {
            return "%"
        }
        index++
        const formatter = formatters[format]
        if (typeof formatter === "function") {
            const val = args[index]
            match = formatter.call(format, val)

            // Now we need to remove `args[index]` since it's inlined in the `format`
            args.splice(index, 1)
            index--
        }
        return match
    })
    return args[0]
}
