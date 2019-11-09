import * as fs from "fs";

function convertJson2TypeDefiend(infile: string, outDir: string) {
    const file = infile.split(".json")[0];
    const json = fs.readFileSync(`${inDir}/${file}.json`).toString();
    const obj = JSON.parse(json);
    const qnas: string[] = obj.qualifiedName.split(".");
    let closeBuk = 0;
    let temp = `declare namespace ${qnas[0]} {\n`;
    closeBuk++;
    const nms = qnas.slice(1, qnas.length - 1);
    for (const nm of nms) {
        temp += `${'    '.repeat(closeBuk)}namespace ${nm.replace('function', 'function$')} {\n`;
        closeBuk++;
    }
    let classModifier = formatClassModifier(obj.modifiers)
    temp += `${'    '.repeat(closeBuk)}// @ts-ignore\n`
    temp += `${'    '.repeat(closeBuk)}${classModifier}${qnas[qnas.length - 1]}`
    let isInterface = classModifier.includes('interface')
    let safeInterface = [];
    for (const ifs of obj.interfaces) {
        if (!ifs.qualifiedName.startsWith('java')) {
            safeInterface.push(ifs)
        }
    }
    if (isInterface) {
        if (safeInterface.length > 0) {
            temp += ' extends '
            for (const ifs of safeInterface) {
                temp += ifs.qualifiedName;
                temp += ', '
            }
            temp = temp.substr(0, temp.length - 2);
        }
    } else {
        temp += `${(obj.superclass) ? (' extends ' + obj.superclass.qualifiedName) : ''}`;
        if (safeInterface.length > 0) {
            temp += ' implements '
            for (const ifs of safeInterface) {
                temp += ifs.qualifiedName;
                temp += ', '
            }
            temp = temp.substr(0, temp.length - 2);
        }
    }
    temp += ' {\n'
    closeBuk++;
    for (const constructor of obj.constructors) {
        temp += `${formatDoc(constructor.docString, closeBuk)}${'    '.repeat(closeBuk)}// @ts-ignore\n${'    '.repeat(closeBuk)}constructor(${formatParameters(constructor.parameters)})\n`;
    }

    let members = [];

    let methods = '';
    for (const method of obj.methods) {
        let methodModifier = isInterface ? '' : replaceModifiers(method.modifiers, classModifier.includes('abstract'))
        if (!whiteKey.includes(method.name)) {
            if (members[method.name] && methodModifier.includes('abstract')) {
                continue;
            }
            members[method.name] = methodModifier;
        }
        methods += `${formatDoc(method.docString, closeBuk)}${'    '.repeat(closeBuk)}// @ts-ignore\n${'    '.repeat(closeBuk)}${methodModifier} ${method.name}(${formatParameters(method.parameters)}): ${mappingType(method.returnType.type)};\n`;
    }

    let fields = '';
    for (const field of obj.fields) {
        if (members[field.name]) {
            continue;
        }
        fields += `${'    '.repeat(closeBuk)}// @ts-ignore\n${'    '.repeat(closeBuk)}${isInterface ? '' : replaceModifiers(field.modifiers)} ${field.name}: ${mappingType(field.type ? field.type.type : "any")};\n`;
    }

    temp += fields + methods;

    for (let index = 0; index < closeBuk; index++) {
        temp += `${'    '.repeat(closeBuk - index - 1)}}\n`;
    }

    fs.writeFileSync(`${outDir}/${file}.${suffix}`, temp);
    return `${file}.${suffix}`;
}

function formatClassModifier(modifiers: string) {
    let tempm = modifiers.replace('public', '').replace('static', '').replace('final', '').trim();
    if (!modifiers.includes('interface')) { tempm += ' class' }
    return tempm.length > 0 ? (tempm + ' ') : '';
}

function formatDoc(doc: string, closeBuk: number) {
    let middleDoc = '';
    for (const line of doc.split('\n')) {
        if (line.trim().length != 0) {
            middleDoc += `${'    '.repeat(closeBuk)} * ${line.trim()}\n`
        }
    }
    return middleDoc.length > 0 ? `${'    '.repeat(closeBuk)}/**\n${middleDoc}${'    '.repeat(closeBuk)} */\n` : '';
}

function replaceModifiers(modifiers: string, absClass = false): string {
    // modifiers = modifiers.replace(' final', ' readonly');
    modifiers = modifiers.split(" final")[0];
    modifiers = modifiers.split(" native")[0];
    modifiers = modifiers.split(" volatile")[0];
    modifiers = modifiers.split(" transient")[0];
    modifiers = modifiers.split(" synchronized")[0];
    if (!absClass) {
        modifiers = modifiers.split(" abstract")[0];
    }
    return modifiers;
}

function formatParameters(params: any[]) {
    let tempParam = '';
    for (const p of params) {
        tempParam += `${mappingName(p.name)}: ${mappingType(p.type ? p.type.qualifiedName : 'any')}, `
    }
    return tempParam.substr(0, tempParam.length - 2);
}

const nameMap = [];
nameMap['function'] = 'func'
nameMap['in'] = 'input'
nameMap['var'] = 'variable'

function mappingName(name: string) {
    if (whiteKey.includes(name)) { return name }
    let outName = nameMap[name] || name || '';
    return outName;
}

let whiteKey = ['shift', "map", 'filter', 'values', 'valueOf', 'toString', 'length', 'includes', 'entries', 'keys', 'join', 'fill']

const typeMap = [];
typeMap['int'] = 'number';
typeMap['int[]'] = 'number[]';
typeMap['int[][]'] = 'number[][]';
typeMap['byte'] = 'number';
typeMap['byte[]'] = 'number[]';
typeMap['double'] = 'number';
typeMap['double[]'] = 'number[]';
typeMap['short'] = 'number';
typeMap['short[]'] = 'number[]';
typeMap['float'] = 'number';
typeMap['float[]'] = 'number[]';
typeMap['long'] = 'number';
typeMap['long[]'] = 'number[]';
typeMap['<any>'] = 'any';
typeMap['char'] = 'string';
typeMap['char[]'] = 'string[]';
typeMap['java.lang.String'] = "string";
// typeMap['java.util.Date'] = 'any /*java.util.Date*/'
// typeMap['java.util.List'] = 'any[] /*java.util.List*/'
// typeMap['java.util.Set'] = 'any[] /*java.util.Set*/'
// typeMap['java.util.Collection'] = 'any[] /*java.util.Collection*/'
// typeMap['java.util.Map'] = 'Map<any, any> /*java.util.Map*/'
// Sponge
typeMap['Vectori'] = 'any /*Vector3i*/'
typeMap['Vectord'] = 'any /*Vector3d*/'
typeMap['Vectorf'] = 'any /*Vector3f*/'
typeMap['Vector2i'] = 'any /*Vector2i*/'
typeMap['Vector2d'] = 'any /*Vector2d*/'
typeMap['Vector2f'] = 'any /*Vector2f*/'
typeMap['Vector3i'] = 'any /*Vector3i*/'
typeMap['Vector3d'] = 'any /*Vector3d*/'
typeMap['Vector3f'] = 'any /*Vector3f*/'
typeMap['Type'] = 'any /*Type*/'
typeMap['Gson'] = 'any /*Gson*/'
typeMap['Logger'] = 'any /*Logger*/'
typeMap['MethodVisitor'] = 'any /*MethodVisitor*/'
typeMap['ConfigurationNode'] = 'any /*ConfigurationNode*/'
typeMap['TypeSerializerCollection'] = 'any /*TypeSerializerCollection*/'
typeMap['Quaterniond'] = 'any /*Quaterniond*/'
typeMap['Matrix2d'] = 'any /*Matrix2d*/'
typeMap['Matrix3d'] = 'any /*Matrix3d*/'
typeMap['Matrix4d'] = 'any /*Matrix4d*/'

function mappingType(type: string): string {
    let outType = typeMap[type] || type || 'any';
    if (outType.indexOf('.') != -1) {
        if (outType.startsWith('java.') || outType.startsWith('org.')) {

        } else {
            outType = `any /*${outType}*/`
        }
    }
    return outType.replace('function', 'function$');
}

var args = process.argv.splice(2)

const suffix = 'd.ts'
const inDir = `../docs/${args[0]}`
const outDir = "./temp";
const files = fs.readdirSync(inDir);
let index = '';
for (const file of files) {
    index += `/// <reference path="./${convertJson2TypeDefiend(file, outDir)}" />\n`;
}
fs.writeFileSync(`${outDir}/index.${suffix}`, index);
