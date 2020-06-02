import * as fs from "fs"

function convertJson2TypeDefiend(infile: string, outDir: string) {
    const file = infile.substr(0, infile.length - 5)
    const json = fs.readFileSync(`${inDir}/${file}.json`).toString()
    const obj = JSON.parse(json)
    const qnas: string[] = obj.qualifiedName.split(".")
    let closeBuk = 0
    let temp = `declare namespace ${mappingNamespace(qnas[0])} {\n`
    closeBuk++
    const nms = qnas.slice(1, qnas.length - 1)
    for (const nm of nms) {
        temp += `${'    '.repeat(closeBuk)}namespace ${mappingNamespace(nm)} {\n`
        closeBuk++
    }
    let classModifier = formatClassModifier(obj.modifiers)
    temp += `${'    '.repeat(closeBuk)}// @ts-ignore\n`
    temp += `${'    '.repeat(closeBuk)}${classModifier}${qnas[qnas.length - 1]}`
    let isInterface = classModifier.includes('interface')
    let safeInterface = []
    for (const ifs of obj.interfaces) {
        // if (!ifs.qualifiedName.startsWith('java')) {
        safeInterface.push(ifs)
        // }
    }
    if (isInterface) {
        if (safeInterface.length > 0) {
            temp += ' extends '
            for (const ifs of safeInterface) {
                temp += ifs.qualifiedName
                temp += ', '
            }
            temp = temp.substr(0, temp.length - 2)
        }
    } else {
        temp += `${(obj.superclass) ? (' extends ' + (obj.superclass.qualifiedName == "<any>" ? "object" : obj.superclass.qualifiedName)) : ''}`
        if (safeInterface.length > 0) {
            temp += ' implements '
            for (const ifs of safeInterface) {
                temp += ifs.qualifiedName
                temp += ', '
            }
            temp = temp.substr(0, temp.length - 2)
        }
    }
    temp += ' {\n'
    closeBuk++
    for (const constructor of obj.constructors) {
        temp += `${formatDoc(constructor.docString, closeBuk)}${'    '.repeat(closeBuk)}// @ts-ignore\n${'    '.repeat(closeBuk)}constructor(${formatParameters(constructor.parameters)})\n`
    }

    let members = {}

    let methods = ''
    for (const method of obj.methods) {
        let methodModifier = isInterface ? '' : replaceModifiers(method.modifiers, classModifier.includes('abstract'))
        if (members[method.name] && methodModifier.includes('abstract')) {
            continue
        }
        members[method.name] = methodModifier
        methods += `${formatDoc(method.docString, closeBuk)}${'    '.repeat(closeBuk)}// @ts-ignore\n${'    '.repeat(closeBuk)}${methodModifier ? (methodModifier + ' ') : ''}${method.name}(${formatParameters(method.parameters)}): ${mappingType(method.returnType, false)};\n`
    }

    let fields = ''
    for (const field of obj.fields) {
        if (members[field.name]) {
            continue
        }
        fields += `${'    '.repeat(closeBuk)}// @ts-ignore\n${'    '.repeat(closeBuk)}${isInterface ? '' : replaceModifiers(field.modifiers)} ${field.name}: ${mappingType(field.type)};\n`
    }

    temp += fields + methods

    for (let index = 0; index < closeBuk; index++) {
        temp += `${'    '.repeat(closeBuk - index - 1)}}\n`
    }

    fs.writeFileSync(`${outDir}/${file}.${suffix}`, temp)
    return `${file}.${suffix}`
}

function formatClassModifier(modifiers: string) {
    let tempm = modifiers.replace('public', '').replace('static', '').replace('final', '').trim()
    if (!modifiers.includes('interface')) {
        tempm += tempm.length == 0 ? 'class' : ' class'
    }
    return tempm.length > 0 ? (tempm + ' ') : ''
}

function formatDoc(doc: string, closeBuk: number) {
    let middleDoc = ''
    for (const line of doc.split('\n')) {
        if (line.trim().length != 0) {
            middleDoc += `${'    '.repeat(closeBuk)} * ${line.trim()}\n`
        }
    }
    return middleDoc.length > 0 ? `${'    '.repeat(closeBuk)}/**\n${middleDoc}${'    '.repeat(closeBuk)} */\n` : ''
}

function replaceModifiers(modifiers: string, absClass = false): string {
    // modifiers = modifiers.replace(' final', ' readonly')
    modifiers = modifiers.split(" final")[0]
    modifiers = modifiers.split(" native")[0]
    modifiers = modifiers.split(" volatile")[0]
    modifiers = modifiers.split(" transient")[0]
    modifiers = modifiers.split(" synchronized")[0]
    if (!absClass) {
        modifiers = modifiers.split(" abstract")[0]
    }
    return modifiers
}

function formatParameters(params: any[]) {
    if (!params.length) return ''
    let tempParam = ''
    for (let i = 0; i < params.length - 1; i++) {
        const p = params[i];
        tempParam += `${mappingName(p.name)}: ${mappingType(p.type)}, `
    }
    let lastParam = params[params.length - 1]
    let lastMapType = mappingType(lastParam.type)
    if (lastMapType.endsWith("[]")) {
        tempParam += `...${mappingName(lastParam.name)}: ${lastMapType}`
    } else {
        tempParam += `${mappingName(lastParam.name)}: ${lastMapType}`
    }
    return tempParam
}

const nameMap = {}
nameMap['function'] = 'func'
nameMap['in'] = 'input'
nameMap['var'] = 'variable'
nameMap['enum'] = 'enumerate'
nameMap['export'] = 'exporter'
nameMap['is'] = 'jis'
nameMap['with'] = 'jwith'

function mappingNamespace(name: string) {
    return typeof nameMap[name] == "string" ? name + '$' : name || ''
}

function mappingName(name: string) {
    return typeof nameMap[name] == "string" ? nameMap[name] : name || ''
}

const typeMap = []
typeMap['int'] = 'number /*int*/'
typeMap['java.lang.Integer'] = "number"
typeMap['byte'] = 'number /*byte*/'
typeMap['java.lang.Byte'] = "number"
typeMap['double'] = 'number /*double*/'
typeMap['java.lang.Double'] = "number"
typeMap['short'] = 'number /*short*/'
typeMap['java.lang.Short'] = "number"
typeMap['float'] = 'number /*float*/'
typeMap['java.lang.Float'] = "number"
typeMap['long'] = 'number /*long*/'
typeMap['java.lang.Long'] = "number"
typeMap['<any>'] = 'any'
typeMap['char'] = 'string'
typeMap['java.lang.String'] = "string"
typeMap['java.lang.Object'] = "any"
typeMap['java.util.List'] = "Array"
typeMap['java.util.Set'] = "Array"
typeMap['java.util.Collection'] = "Array"
typeMap['java.lang.Throwable'] = "Error"
// typeMap['java.util.Date'] = 'any /*java.util.Date*/'
// typeMap['java.util.List'] = 'any[] /*java.util.List*/'
// typeMap['java.util.Set'] = 'any[] /*java.util.Set*/'
// typeMap['java.util.Collection'] = 'any[] /*java.util.Collection*/'
// typeMap['java.util.Map'] = 'Map<any, any> /*java.util.Map*/'

type JavaType = {
    qualifiedName: string,
    name: string,
    type: string
}

function mappingType(type: JavaType, isParam: boolean = true): string {
    if (!type || !type.type) { return 'any' }
    let outType = typeMap[type.qualifiedName] || type.qualifiedName || 'any'
    let tsType = type.type.replace(type.qualifiedName, outType).replace('function', 'function$')
    return isParam && type.type !== tsType && type.type.includes('.') ? `${type.type} | ${tsType}` : tsType
}

var args = process.argv.splice(2)

const suffix = 'd.ts'
const inDir = `../docs/${args[0]}`
const outDir = "./temp"
const files = fs.readdirSync(inDir)
let index = ''
for (const file of files) {
    index += `/// <reference path="./${convertJson2TypeDefiend(file, outDir)}" />\n`
}
fs.writeFileSync(`${outDir}/index.${suffix}`, index)
