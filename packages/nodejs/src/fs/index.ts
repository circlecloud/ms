import '@ccms/nashorn'
import { URL } from "url";

const Path = Java.type("java.nio.file.Path");
const JavaString = Java.type("java.lang.String");
const File = Java.type("java.io.File");
const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");
const Collector = Java.type("java.util.stream.Collector")
const separatorChar = File.separatorChar;
const StandardCopyOption = Java.type("java.nio.file.StandardCopyOption");

/**
 * Valid types for path values in "fs".
 */
type PathLike = string | Buffer | URL;

function javaFile(...opts: any[]) {
    if (!opts[0]) {
        console.warn("文件名称不得为 undefined 或者 null !");
    }
    switch (opts.length) {
        case 1:
            var f = opts[0];
            if (f instanceof File) {
                return f;
            }
            if (typeof f === "string") {
                return new File(f);
            }
            if (f instanceof Path) {
                return f.toFile();
            }
            break;
        default:
            return new File(javaFile(opts[0]), opts[1]);
    }
}

export function renameSync(oldPath: PathLike, newPath: PathLike): void {
    Files.move(Paths.get(oldPath), Paths.get(oldPath), StandardCopyOption['ATOMIC_MOVE'])
}
export function truncateSync() {

}
export function chownSync() {

}
export function chmodSync() {

}
export function statSync() {

}
export function symlinkSync() {

}
export function readlinkSync() {

}
export function realpathSync() {

}
export function unlinkSync() {

}
export function rmdirSync() {

}
export function mkdirSync() {

}
export function mkdtempSync() {

}
export function readdirSync() {

}
export function readFileSync() {

}
export function writeFileSync() {

}
export function appendFileSync() {

}
export function watchFile() {

}
export function unwatchFile() {

}
export function existsSync() {

}
export function accessSync() {

}
export function copyFileSync() {

}