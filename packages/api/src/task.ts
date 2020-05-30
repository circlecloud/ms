export namespace task {
    export const TaskManager = Symbol('TaskManager')
    export interface TaskManager {
        /**
         * 创建任务
         * @param func 任务内容
         */
        create(func: Function): task.Task;
        /**
         * 在主线程执行代码
         * @param func 执行内容
         */
        callSyncMethod(func: Function): any;
        /**
         * 关闭任务管理器
         */
        disable();
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

        /**
         * 设置任务异步执行
         * @param isAsync 是否异步
         */
        async(isAsync: boolean = true): task.Task {
            this.isAsync = isAsync;
            return this;
        }

        /**
         * 设置任务延时执行
         * @param tick 延时 Tick
         */
        later(tick: number): task.Task {
            this.laterTime = tick;
            return this;
        }

        /**
         * 设置任务循环执行
         * @param tick 循环时间 Tick
         */
        timer(tick: number): task.Task {
            this.interval = tick;
            return this;
        }

        protected run(...args: any[]): void {
            try {
                this.func(...args);
            } catch (ex) {
                console.console('§4插件执行任务时发生错误', ex)
                console.ex(ex);
            }
        }

        /**
         * 提交任务
         * @param args 任务参数
         */
        abstract submit(...args: any[]): Cancelable;
    }
    /**
     * 返可取消的对象
     */
    export interface Cancelable {
        cancel(): boolean;
    }
}
