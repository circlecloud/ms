import * as fs from "fs";

let whiteKey = ['shift', "map", 'filter', 'values', 'valueOf', 'toString', 'length', 'includes']

function convertJson2TypeDefiend(infile: string, outDir: string) {
    const file = infile.split(".json")[0];
    const json = fs.readFileSync(`../docs/${file}.json`).toString();
    const obj = JSON.parse(json);
    const qnas: string[] = obj.qualifiedName.split(".");
    let closeBuk = 0;
    let temp = `declare namespace ${qnas[0]} {\n`;
    closeBuk++;
    const nms = qnas.slice(1, qnas.length - 1);
    for (const nm of nms) {
        temp += `${'    '.repeat(closeBuk)}namespace ${nm} {\n`;
        closeBuk++;
    }
    let classModifier = formatClassModifier(obj.modifiers)
    temp += `${'    '.repeat(closeBuk)}${classModifier}class ${qnas[qnas.length - 1]} {\n`;
    closeBuk++;
    for (const constructor of obj.constructors) {
        temp += `${formatDoc(constructor.docString, closeBuk)}${'    '.repeat(closeBuk)}constructor(${formatParameters(constructor.parameters)})\n`;
    }

    let members = [];

    let methods = '';
    for (const method of obj.methods) {
        let methodModifier = replaceModifiers(method.modifiers, classModifier.includes('abstract'))
        if (!whiteKey.includes(method.name)) {
            if (members[method.name] && methodModifier.includes('abstract')) {
                continue;
            }
            members[method.name] = methodModifier;
        }
        methods += `${formatDoc(method.docString, closeBuk)}${'    '.repeat(closeBuk)}${methodModifier} ${method.name}(${formatParameters(method.parameters)}): ${mappingType(method.returnType.type)};\n`;
    }

    let fields = '';
    for (const field of obj.fields) {
        if (members[field.name]) {
            continue;
        }
        fields += `${'    '.repeat(closeBuk)}${replaceModifiers(field.modifiers)} ${field.name}: ${mappingType(field.type ? field.type.type : "any")};\n`;
    }

    temp += fields + methods;

    for (let index = 0; index < closeBuk; index++) {
        temp += `${'    '.repeat(closeBuk - index - 1)}}\n`;
    }

    fs.writeFileSync(`${outDir}/${file}.ts`, temp);
    return `${file}.ts`;
}

function formatClassModifier(modifiers: string) {
    let tempm = modifiers.replace('public', '').replace('interface', '').replace('static', '').replace('final', '').trim();
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
    modifiers = modifiers.split(" final")[0];
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

function mappingName(name: string) {
    if (whiteKey.includes(name)) { return name }
    let outName = nameMap[name] || name || '';
    return outName;
}

const typeMap = [];
typeMap['int'] = 'number';
typeMap['int[]'] = 'number[]';
typeMap['int[][]'] = 'number[][]';
typeMap['byte'] = 'number';
typeMap['byte[]'] = 'number[]';
typeMap['double'] = 'number';
typeMap['short'] = 'number';
typeMap['float'] = 'number';
typeMap['long'] = 'number';
typeMap['<any>'] = 'any';
typeMap['char'] = 'string';
typeMap['java.lang.String'] = "string";
typeMap['java.util.Date'] = 'any /*java.util.Date*/'
typeMap['java.util.List'] = 'any[] /*java.util.List*/'
typeMap['java.util.Set'] = 'any[] /*java.util.Set*/'
typeMap['java.util.Collection'] = 'any[] /*java.util.Collection*/'
typeMap['java.util.Map'] = 'Map<any, any> /*java.util.Map*/'

function mappingType(type: string): string {
    let outType = typeMap[type] || type || 'any';
    outType = outType.startsWith('java.') ? 'any' : outType;
    return outType;
}

const outDir = "./temp";

const files = fs.readdirSync("../docs");
let index = ``;
for (const file of files) {
    index += `/// <reference path="./${convertJson2TypeDefiend(file, outDir)}" />\n`;
}
fs.writeFileSync(`${outDir}/index.ts`, index);
