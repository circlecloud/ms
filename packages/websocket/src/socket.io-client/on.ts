// import type * as Emitter from "component-emitter";
import { EventEmitter } from "events"
import { StrictEventEmitter } from "./typed-events"

export function on(
    obj: EventEmitter | StrictEventEmitter<any, any>,
    ev: string,
    fn: (err?: any) => any
): VoidFunction {
    obj.on(ev, fn)
    return function subDestroy(): void {
        obj.off(ev, fn)
    }
}
