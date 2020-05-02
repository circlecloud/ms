import '@ccms/nashorn'

let Files = Java.type("java.nio.file.Files");
let Paths = Java.type("java.nio.file.Paths");
let StandardCopyOption = Java.type("java.nio.file.StandardCopyOption");

let TarInputStream = Java.type("org.kamranzafar.jtar.TarInputStream");
let GZIPInputStream = Java.type("java.util.zip.GZIPInputStream");
let BufferedInputStream = Java.type("java.io.BufferedInputStream");

function decompression(input: any, target: string) {
    let tis = new TarInputStream(new BufferedInputStream(new GZIPInputStream(input)));
    let entry: any;
    while ((entry = tis.getNextEntry()) != null) {
        let targetPath = Paths.get(target + "/" + entry.getName().substring("package/".length));
        targetPath.toFile().getParentFile().mkdirs();
        Files.copy(tis, targetPath, StandardCopyOption.REPLACE_EXISTING);
    }
}

export = {
    decompression
}
