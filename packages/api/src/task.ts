import { plugin } from './index'
import { injectable } from '@ccms/container'

const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")

export namespace task {
    @injectable()
    export abstract class TaskManager {
        protected taskId: java.util.concurrent.atomic.AtomicInteger
        protected cacheTasks = new Map<number, task.Task>()
        protected pluginCacheTasks = new Map<string, Map<number, task.Task>>()

        constructor() {
            this.taskId = new AtomicInteger(0)
            process.on('task.finish', (task: task.Task) => {
                let taskId = task.getTaskId()
                this.cacheTasks.delete(taskId)
                let ownerName = task.getOwner()?.description.name
                if (ownerName && this.pluginCacheTasks.has(ownerName)) {
                    this.pluginCacheTasks.get(ownerName).delete(taskId)
                }
            })
        }

        protected pluginCreate(plugin: plugin.Plugin, task: task.Task) {
            if (!this.pluginCacheTasks.has(plugin.description.name)) {
                this.pluginCacheTasks.set(plugin.description.name, new Map())
            }
            this.pluginCacheTasks.get(plugin.description.name).set(task.getTaskId(), task)
            return task
        }

        protected pluginDisable(plugin: plugin.Plugin) {
            if (this.pluginCacheTasks.has(plugin.description.name)) {
                this.pluginCacheTasks.get(plugin.description.name).forEach((task) => {
                    task.cancel()
                })
                this.pluginCacheTasks.delete(plugin.description.name)
            }
        }

        /**
         * 获得自增的任务ID
         */
        protected nextId() {
            return this.taskId.incrementAndGet()
        }

        /**
         * 创建任务
         * @param func 任务内容
         */
        create(func: Function, plugin?: plugin.Plugin): task.Task {
            if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !') };
            let task = this.create0(plugin, func, this.nextId())
            this.cacheTasks.set(task.getTaskId(), task)
            if (plugin) { return this.pluginCreate(plugin, task) }
            return task
        }
        cancel(taskId: number) {
            if (!this.cacheTasks.has(taskId)) { throw new Error(`Task ${taskId} not found!`) }
            this.cacheTasks.get(taskId).cancel()
        }
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
        protected abstract create0(owner: plugin.Plugin, func: Function, id: number): task.Task
        protected abstract disable0()
    }
    /**
     * 任务抽象
     */
    export abstract class Task implements Cancelable {
        protected func: Function
        protected isAsync: boolean = false;
        protected laterTime: number = 0;
        protected interval: number = 0;
        protected owner: plugin.Plugin
        protected taskId: number
        protected innerTask: any

        constructor(owner: plugin.Plugin, func: Function, id: number) {
            this.owner = owner
            this.func = func
            this.taskId = id
        }

        getOwner() {
            return this.owner
        }

        getTaskId() {
            return this.taskId
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
            let result = this.cancel0()
            process.emit('task.finish', this)
            return result
        }

        protected run(...args: any[]): void {
            try {
                this.func(...args)
                !this.interval && process.emit('task.finish', this)
            } catch (ex) {
                console.console('§4插件执行任务时发生错误', ex)
                console.ex(ex)
            }
        }

        /**
         * 提交任务
         * @param args 任务参数
         */
        submit(...args: any[]): task.Task {
            this.innerTask = this.submit0(...args)
            return this
        }

        /**
         * 提交任务
         * @param args 任务参数
         */
        protected abstract submit0(...args: any[]): any
        /**
         * 取消任务
         */
        protected cancel0(): boolean {
            return this.innerTask?.cancel()
        }
    }
    /**
     * 返可取消的对象
     */
    export interface Cancelable {
        cancel(): boolean
    }
}
