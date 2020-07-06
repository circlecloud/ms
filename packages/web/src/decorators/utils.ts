import { interfaces } from '../interfaces'
import { METADATA_KEY } from '../constants'

export function getControllerMetadatas(target: any = Reflect): Map<string, interfaces.ControllerMetadata> {
    return Reflect.getMetadata(METADATA_KEY.Controller, target) || new Map<string, interfaces.ControllerMetadata>()
}
export function addControllerMetadata(metadata: interfaces.ControllerMetadata, target: any = Reflect) {
    let metadatas = getControllerMetadatas(target)
    metadatas.set(metadata.name, metadata)
    Reflect.defineMetadata(METADATA_KEY.Controller, metadatas, target)
}
export function getControllerActions(target: any): string[] {
    return Reflect.getMetadata(METADATA_KEY.Action, target.constructor) || []
}
export function addControllerAction(target: any, propertyKey: string) {
    Reflect.defineMetadata(METADATA_KEY.Action, [propertyKey, ...getControllerActions(target)], target.constructor)
}
export function getControllerMetadata(target: any): interfaces.ControllerMetadata {
    return Reflect.getMetadata(METADATA_KEY.Controller, target)
}
export function getActionMetadata(target: any, propertyKey: string): interfaces.ActionMetadata {
    return Reflect.getMetadata(METADATA_KEY.Action, target[propertyKey])
}
export function getActionParams(target: any, propertyKey: string): interfaces.ParamMetadata[] {
    return Reflect.getMetadata(METADATA_KEY.Param, target[propertyKey]) || []
}
export function addActionParam(target: any, propertyKey: string, metadata: interfaces.ParamMetadata) {
    Reflect.defineMetadata(METADATA_KEY.Param, [metadata, ...getActionParams(target, propertyKey)], target[propertyKey])
}
