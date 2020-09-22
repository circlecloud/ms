import { plugin } from './index'
import { injectable } from '@ccms/container'

export namespace task {
    @injectable()
    export abstract class TaskManager {
        protected cacheTasks = new Map<string, task.Task[]>()

        protected pluginCreate(plugin: plugin.Plugin, task: task.Task) {
            if (!this.cacheTasks.has(plugin.description.name)) {
                this.cacheTasks.set(plugin.description.name, [])
            }
            this.cacheTasks.get(plugin.description.name).push(task)
            return task
        }
        protected pluginDisable(plugin: plugin.Plugin) {
            if (this.cacheTasks.has(plugin.description.name)) {
                this.cacheTasks.get(plugin.description.name).forEach(task => task.cancel())
                this.cacheTasks.delete(plugin.description.name)
            }
        }
        /**
         * 创建任务
         * @param func 任务内容
         */
        create(func: Function, plugin?: plugin.Plugin): task.Task {
            if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !') };
            let task = this.create0(func)
            if (plugin) { return this.pluginCreate(plugin, task) }
            return task
        }
        abstract create0(func: Function): task.Task
        /**
         * 在主线程执行代码
         * @param func 执行内容
         */
        abstract callSyncMethod(func: Function): any
        /**
         * 关闭任务管理器
         */
        disable(plugin?: plugin.Plugin) {
            if (plugin) { return this.pluginDisable(plugin) }
            this.disable0()
        }
        abstract disable0()
    }
    /**
     * 任务抽象
     */
    export abstract class Task {
        protected plugin: any
        protected func: Function
        protected isAsync: boolean = false;
        protected laterTime: number = 0;
        protected interval: number = 0;

        constructor(plugin: any, func: Function) {
            this.plugin = plugin
            this.func = func
        }

        /**
         * 设置任务异步执行
         * @param isAsync 是否异步
         */
        async(isAsync: boolean = true): task.Task {
            this.isAsync = isAsync
            return this
        }

        /**
         * 设置任务延时执行
         * @param tick 延时 Tick
         */
        later(tick: number): task.Task {
            this.laterTime = tick
            return this
        }

        /**
         * 设置任务循环执行
         * @param tick 循环时间 Tick
         */
        timer(tick: number): task.Task {
            this.interval = tick
            return this
        }

        /**
         * 取消任务
         */
        cancel(): boolean {
            throw new Error("Method not implemented.")
        }

        protected run(...args: any[]): void {
            try {
                this.func(...args)
            } catch (ex) {
                console.console('§4插件执行任务时发生错误', ex)
                console.ex(ex)
            }
        }

        /**
         * 提交任务
         * @param args 任务参数
         */
        submit(...args: any[]): Cancelable {
            let cancelable = this.submit0(...args)
            this.cancel = cancelable.cancel
            return cancelable
        }

        /**
         * 提交任务
         * @param args 任务参数
         */
        abstract submit0(...args: any[]): Cancelable
    }
    /**
     * 返可取消的对象
     */
    export interface Cancelable {
        cancel(): boolean
    }
}
