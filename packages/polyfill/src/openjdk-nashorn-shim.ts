// fix OpenJDK Nahsorn setPrototypeOf Bug
try {
    Java.type('org.openjdk.nashorn.api.scripting.NashornScriptEngine')
    Object.setPrototypeOf = ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b })
} catch (error: any) {
}
export { }
