import "reflect-metadata";
import { initContainer } from './decorators'
import { interfaces, Container } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';

const provideNamed = (identifier: interfaces.ServiceIdentifier<any>, name: string) => {
    return fluentProvide(identifier).whenTargetNamed(name).done();
};

const provideSingleton = (identifier: interfaces.ServiceIdentifier<any>) => {
    return fluentProvide(identifier).inSingletonScope().done();
};

const DefaultContainer = new Container();
initContainer(DefaultContainer);

export * from 'inversify'
export * from './decorators'
export * from 'inversify-binding-decorators'
export {
    fluentProvide,
    provideNamed,
    provideSingleton,
    DefaultContainer
};
