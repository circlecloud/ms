import { interfaces, Container } from "inversify"
import { _proxyGetter } from "./utils"

let _container: Container

const ContainerInstance = Symbol.for("@ccms/ioc:Container")

function initContainer(container: Container) {
    Reflect.defineMetadata(ContainerInstance, container, Reflect)
    return _container = container
}

function getContainer(): Container {
    return _container || initContainer(new Container())
}

function makePropertyInjectDecorator(doCache: boolean) {
    return function (serviceIdentifier: interfaces.ServiceIdentifier<any>) {
        return function (proto: any, key: string): void {
            let resolve = () => {
                return getContainer().get(serviceIdentifier)
            }
            _proxyGetter(proto, key, resolve, doCache)
        }
    }
}

function makePropertyInjectNamedDecorator(doCache: boolean) {
    return function (serviceIdentifier: interfaces.ServiceIdentifier<any>, named: string) {
        return function (proto: any, key: string): void {
            let resolve = () => {
                return getContainer().getNamed(serviceIdentifier, named)
            }
            _proxyGetter(proto, key, resolve, doCache)
        }
    }
}

function makePropertyInjectTaggedDecorator(doCache: boolean) {
    return function (serviceIdentifier: interfaces.ServiceIdentifier<any>, key: string, value: any) {
        return function (proto: any, propertyName: string): void {
            let resolve = () => {
                return getContainer().getTagged(serviceIdentifier, key, value)
            }
            _proxyGetter(proto, propertyName, resolve, doCache)
        }
    }
}

function makePropertyMultiInjectDecorator(doCache: boolean) {
    return function (serviceIdentifier: interfaces.ServiceIdentifier<any>) {
        return function (proto: any, key: string): void {
            let resolve = () => {
                return getContainer().getAll(serviceIdentifier)
            }
            _proxyGetter(proto, key, resolve, doCache)
        }
    }
}

let doCache = true

let lazyInject = makePropertyInjectDecorator(doCache)
let lazyInjectNamed = makePropertyInjectNamedDecorator(doCache)
let lazyInjectTagged = makePropertyInjectTaggedDecorator(doCache)
let lazyMultiInject = makePropertyMultiInjectDecorator(doCache)

export {
    initContainer,
    getContainer,
    ContainerInstance,
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject
}
