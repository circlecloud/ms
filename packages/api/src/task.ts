export namespace task {
    export const TaskManager = Symbol('TaskManager')
    export interface TaskManager {
        create(func: Function): task.Task;
        callSyncMethod(func: Function): any;
    }
    /**
     * 任务抽象
     */
    export abstract class Task {
        protected plugin: any;
        protected func: Function;
        protected isAsync: boolean = false;
        protected laterTime: number = 0;
        protected interval: number = 0;

        constructor(plugin: any, func: Function) {
            this.plugin = plugin;
            this.func = func;
        }

        async(isAsync: boolean = true): task.Task {
            this.isAsync = isAsync;
            return this;
        }

        later(tick: number): task.Task {
            this.laterTime = tick;
            return this;
        }

        timer(tick: number): task.Task {
            this.interval = tick;
            return this;
        }

        protected run(): void {
            try {
                this.func();
            } catch (ex) {
                console.console('§4插件执行任务时发生错误', ex)
                console.ex(ex);
            }
        }

        abstract submit(): Cancelable;
    }
    /**
     * 返可取消的对象
     */
    export interface Cancelable {
        cancel(): boolean;
    }
}
