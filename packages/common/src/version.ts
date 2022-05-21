export type Version = [string, string, string]

export class VersionUtils {
    static isEqual(version: string, targetVersion: string): boolean {
        return version == targetVersion
    }
    static isGreaterOrEqual(version: string, targetVersion: string): boolean {
        const v1 = parseVersion(version)
        const v2 = parseVersion(targetVersion)

        return (
            v1[0] > v2[0] ||
            (v1[0] === v2[0] && v1[1] > v2[1]) ||
            (v1[0] === v2[0] && v1[1] === v2[1] && v1[2] >= v2[2])
        )
    }
    static isGreater(version: string, targetVersion: string): boolean {
        const v1 = parseVersion(version)
        const v2 = parseVersion(targetVersion)

        return (
            v1[0] > v2[0] ||
            (v1[0] === v2[0] && v1[1] > v2[1]) ||
            (v1[0] === v2[0] && v1[1] === v2[1] && v1[2] > v2[2])
        )
    }
}

function parseVersion(version: string = ""): Version {
    const v: Version = ['0', '0', '0']

    version.split(".").forEach((value, i) => (v[i] = value))

    return v
}
