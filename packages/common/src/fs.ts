import '@ccms/nashorn'

/*global Java, base, module, exports, require, __FILE__*/
const Path = Java.type("java.nio.file.Path");
const JavaString = Java.type("java.lang.String");
const File = Java.type("java.io.File");
const Files = Java.type("java.nio.file.Files");
const Collector = Java.type("java.util.stream.Collector")
const separatorChar = File.separatorChar;
const StandardCopyOption = Java.type("java.nio.file.StandardCopyOption");

/**
 * 用文件分割符合并路径
 */
export function concat(...args: string[]) {
    return args.join(separatorChar);
}

/**
 * 获得文件
 * @constructor(file)
 * @constructor(dir,file)
 * @returns {*}
 */
export function file(...opts: any[]): any {
    if (!opts[0]) { throw new Error("文件名称不得为 undefined 或者 null !") }
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
            return new File(file(opts[0]), opts[1]);
    }
}

/**
 * 创建目录
 * @param path
 */
export function mkdirs(path: any) {
    // noinspection JSUnresolvedVariable
    file(path).parentFile.mkdirs();
}

/**
 * 创建文件
 * @param file
 */
export function create(path: any) {
    var f = file(path);
    if (!f.exists()) {
        mkdirs(f);
        f.createNewFile();
    }
}

/**
 * 获得文件规范路径
 * @param file
 * @returns {*}
 */
export function path(f: any) {
    return file(f).canonicalPath;
}

/**
 * 复制文件
 * @param inputStream 输入流
 * @param target 目标文件
 * @param override 是否覆盖
 */
export function copy(inputStream: any, target: any, override: any) {
    Files.copy(inputStream, target.toPath(), StandardCopyOption[override ? 'REPLACE_EXISTING' : 'ATOMIC_MOVE']);
}

/**
 * 读取文件
 * @param path 文件路径
 */
export function read(path) {
    var file = file(path);
    if (!file.exists()) {
        console.warn('读取文件', file, '错误 文件不存在!');
        return;
    }
    // noinspection JSPrimitiveTypeWrapperUsage
    return new JavaString(Files.readAllBytes(file.toPath()), "UTF-8");
}

/**
 * 保存内容文件
 * @param path 路径
 * @param content 内容
 * @param override 是否覆盖
 */
export function save(path, content, override) {
    var file = file(path);
    if (file.parentFile) {
        file.parentFile.mkdirs();
    }
    Files.write(file.toPath(), new JavaString(content).getBytes("UTF-8"));
}

/**
 * 列出目录文件
 * @param path
 */
export function list(path) {
    var dir = file(path);
    // noinspection JSValidateTypes
    if (dir.isDirectory()) {
        return Files.list(dir.toPath());
    }
    console.debug('路径', path, '不是一个目录 返回空数组!');
    return [];
}

/**
 * 移动文件
 * @param src 原始目录
 * @param des 目标目录
 * @param override 是否覆盖
 */
export function move(src, des, override) {
    Files.move(file(src).toPath(), file(des).toPath(),
        override ? StandardCopyOption['REPLACE_EXISTING'] : StandardCopyOption['ATOMIC_MOVE'])
}

export function del(file) {
    file = file(file);
    if (!file.exists()) {
        return;
    }
    if (file.isDirectory()) {
        Files.list(file.toPath()).collect(Collector.toList()).forEach(function (f) {
            del(f);
        })
    }
    Files.delete(file.toPath());
}

export function exists(f) {
    return file(f).exists()
}
