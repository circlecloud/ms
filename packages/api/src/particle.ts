import { Autowired, injectable } from '@ccms/container'

import { task, plugin } from './index'

const UUID = Java.type('java.util.UUID')
const Math = Java.type('java.lang.Math')

export namespace particle {
    @injectable()
    export abstract class ParticleSpawner {
        abstract spawn(location: any, particle: Particle)
        abstract spawnToPlayer(player: any, location: any, particle: Particle)
    }
    /**
     * 表示一个特效对象
     *
     * @author Zoyn
     */
    export abstract class Particle {
        private spawner: ParticleSpawner
        private readonly uuid: string

        private particle: any /* Particle */
        private count: number = 1;
        private offsetX: number = 0;
        private offsetY: number = 0;
        private offsetZ: number = 0;
        private extra: number = 0;
        private data: Object = null;

        /**
         * Only Show To Player
         */
        private player: any

        constructor() {
            this.uuid = UUID.randomUUID().toString()
        }
        abstract show(location: any)

        getUUID() {
            return this.uuid
        }

        getSpawner() {
            return this.spawner
        }

        setSpawner(spawner: ParticleSpawner) {
            this.spawner = spawner
            return this
        }

        getParticle() {
            return this.particle
        }

        setParticle(particle: any, data: any = null) {
            this.particle = particle
            this.data = data
            return this
        }

        getCount() {
            return this.count
        }

        setCount(count: number) {
            this.count = count
            return this
        }

        getOffsetX() {
            return this.offsetX
        }

        setOffsetX(offsetX: number) {
            this.offsetX = offsetX
            return this
        }

        getOffsetY() {
            return this.offsetY
        }

        setOffsetY(offsetY: number) {
            this.offsetY = offsetY
            return this
        }

        getOffsetZ() {
            return this.offsetZ
        }

        setOffsetZ(offsetZ: number) {
            this.offsetZ = offsetZ
            return this
        }

        getExtra() {
            return this.extra
        }

        setExtra(extra: number) {
            this.extra = extra
            return this
        }

        getData() {
            return this.data
        }

        setData(data) {
            this.data = data
            return this
        }

        getPlayer() {
            return this.player
        }

        setPlayer(player) {
            this.player = player
            return this
        }

        /**
         * 通过给定一个坐标就可以使用已经指定的参数来播放粒子
         *
         * @param location 坐标
         */
        spawn(location: any) {
            if (!this.spawner) throw new Error(`particle ${this.uuid} not set spawner can't spawn!`)
            if (this.player) {
                this.spawner.spawnToPlayer(this.player, location, this)
            } else {
                this.spawner.spawn(location, this)
            }
        }
    }

    /**
     * 表示一条线
     *
     * @author Zoyn
     */
    export class Line extends Particle {
        private vector: any
        private start: any
        private end: any
        /**
         * 步长
         */
        private step: number
        /**
         * 向量长度
         */
        private length: number

        /**
         * 构造一条线
         *
         * @param start 线的起点
         * @param end   线的终点
         */
        constructor(start: any, end: any)
        /**
         * 构造一条线
         *
         * @param start  线的起点
         * @param end    线的终点
         * @param step   每个粒子之间的间隔 (也即步长)
         */
        constructor(start: any, end: any, step: number = 0.1) {
            super()
            this.start = start
            this.end = end
            this.step = step
            // 对向量进行重置
            this.resetVector()
        }

        show() {
            for (let i = 0; i < this.length; i += this.step) {
                this.spawn(this.start.clone().add(this.vector.clone().multiply(i)))
            }
        }

        /**
         * 获取线的起始坐标
         *
         * @return {@link Location}
         */
        getStart() {
            return this.start
        }

        /**
         * 利用给定的坐标设置线的起始坐标
         *
         * @param start 起始坐标
         * @return {@link Line}
         */
        setStart(start) {
            this.start = start
            this.resetVector()
            return this
        }

        /**
         * 获取线的终点坐标
         *
         * @return {@link Location}
         */
        getEnd() {
            return this.end
        }

        /**
         * 利用给定的坐标设置线的终点坐标
         *
         * @param end 终点
         * @return {@link Line}
         */
        setEnd(end) {
            this.end = end
            this.resetVector()
            return this
        }

        /**
         * 获取每个粒子之间的间隔
         *
         * @return 也就是循环的步长
         */
        getStep() {
            return this.step
        }

        /**
         * 设置每个粒子之间的间隔
         *
         * @param step 间隔
         * @return {@link Line}
         */
        setStep(step) {
            this.step = step
            this.resetVector()
            return this
        }

        /**
         * 手动重设线的向量
         */
        resetVector() {
            this.vector = this.end.clone().subtract(this.start).toVector()
            this.length = this.vector.length()
            this.vector.normalize()
        }
    }
    /**
     * 表示一个弧
     *
     * @author Zoyn
     */
    export class Arc extends Particle {
        private angle: number
        private radius: number
        private step: number

        /**
         * 构造一个弧
         *
         * @param origin 弧所在的圆的圆点
         * @param angle  弧所占的角度
         * @param radius 弧所在的圆的半径
         * @param step   每个粒子的间隔(也即步长)
         */
        constructor(angle: number = 30, radius: number = 1, step: number = 1) {
            super()
            this.angle = angle
            this.radius = radius
            this.step = step
        }

        show(location: any) {
            for (let i = 0; i < this.angle; i += this.step) {
                let radians: number = Math.toRadians(i)
                let x: number = this.radius * Math.cos(radians)
                let z: number = this.radius * Math.sin(radians)

                super.spawn(location.clone().add(x, 0, z))
            }
        }

        getAngle(): number {
            return this.angle
        }

        setAngle(angle: number): Arc {
            this.angle = angle
            return this
        }

        getRadius(): number {
            return this.radius
        }

        setRadius(radius: number): Arc {
            this.radius = radius
            return this
        }

        getStep(): number {
            return this.step
        }

        setStep(step: number): Arc {
            this.step = step
            return this
        }
    }
    /**
     * 表示一个圆
     *
     * @author Zoyn
     */
    export class Circle extends Arc {
        constructor(radius: number)
        constructor(radius: number, step: number)
        /**
         * 构造一个圆
         *
         * @param origin 圆的圆点
         * @param radius 圆的半径
         * @param step   每个粒子的间隔(也即步长)
         * @param period 特效周期(如果需要可以使用)
         */
        constructor(radius: number = 1, step: number = 1) {
            // Circle只需要控制这个fullArc就可以满足所有的要求
            super(360, radius, step)
        }
    }
    const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")

    @injectable()
    export abstract class ParticleManager {
        @Autowired()
        private taskManager: task.TaskManager
        @Autowired()
        private particleSpawner: particle.ParticleSpawner

        protected taskId: java.util.concurrent.atomic.AtomicInteger
        protected cacheTasks = new Map<string, ParticleTask>()
        protected pluginCacheTasks = new Map<string, Map<number, ParticleTask>>()

        constructor() {
            this.taskId = new AtomicInteger(0)
        }

        /**
         * 获得自增的任务ID
         */
        public nextId() {
            return this.taskId.incrementAndGet()
        }

        public getTaskManager() {
            return this.taskManager
        }

        public getParticleSpawner() {
            return this.particleSpawner
        }

        public create(particle: Particle, plugin?: plugin.Plugin) {
            let uuid = particle.getUUID()
            if (this.cacheTasks.has(uuid)) {
                return this.cacheTasks.get(uuid)
            }
            let task = this.create0(plugin, particle)
            this.cacheTasks.set(uuid, task)
            if (plugin) {
                if (!this.pluginCacheTasks.has(plugin.description.name)) {
                    this.pluginCacheTasks.set(plugin.description.name, new Map())
                }
                this.pluginCacheTasks.get(plugin.description.name).set(task.getTaskId(), task)
            }
            return task
        }

        public cancel(particle: Particle) {
            let uuid = particle.getUUID()
            if (this.cacheTasks.has(uuid)) {
                this.cacheTasks.get(uuid).cancel()
                this.cacheTasks.delete(uuid)
            } else {
                throw new Error(`particle ${uuid} not found!`)
            }
        }

        disable(plugin: plugin.Plugin) {
            if (this.pluginCacheTasks.has(plugin.description.name)) {
                this.pluginCacheTasks
                    .get(plugin.description.name)
                    .forEach((task) => task.cancel())
                this.pluginCacheTasks.delete(plugin.description.name)
            }
        }
        protected create0(owner: plugin.Plugin, particle: Particle): ParticleTask {
            particle.setSpawner(this.getParticleSpawner())
            return new ParticleTask(owner, particle, this)
        }
    }

    export class ParticleTask {
        private particle: Particle
        private isAsync: boolean = false
        private interval: number = 0
        private _location: any
        private _follow: any

        private owner: plugin.Plugin
        private taskId: number
        private task: task.Task
        private taskManager: task.TaskManager
        protected particleManager: ParticleManager

        constructor(owner: plugin.Plugin, particle: Particle, particleManager: ParticleManager) {
            this.owner = owner
            this.taskId = particleManager.nextId()
            this.particle = particle
            this.taskManager = particleManager.getTaskManager()
            this.particleManager = particleManager
        }

        getOwner() {
            return this.task.getOwner()
        }

        getTaskId() {
            return this.taskId
        }

        getParticle() {
            return this.particle
        }

        async(isAsync: boolean = true) {
            this.isAsync = isAsync
            return this
        }

        timer(tick: number) {
            this.interval = tick
            return this
        }

        follow(entity: { getLocation: () => any }) {
            this._follow = entity
            this._location = undefined
            return this
        }

        location(location: any) {
            this._location = location
            this._follow = undefined
            return this
        }

        submit() {
            this.cancel()
            if (this._follow && !this.interval) throw new Error(`enable follow entity but interval is ${this.interval}!`)
            this.taskManager.create(() => {
                this.task = this.taskManager
                    .create(() => {
                        try {
                            if (this._follow) {
                                if (!this._follow.isOnline()) return this.cancel()
                                this.particle.show(this._follow.getLocation().clone().add(0, 1, 0))
                            } else if (this._location) {
                                this.particle.show(this._location)
                            } else {
                                console.warn(`ParticleTask ${this.taskId} particle ${this.particle.getUUID()} cancel because entity and location both undefined!`)
                                this.task.cancel()
                            }
                        } catch (error: any) {
                            console.error(`§6插件 §a${this.owner.description.name} §c播放粒子发送异常 §4粒子播放任务已终止!`)
                            console.ex(error)
                            this.cancel()
                        }
                    }, this.owner)
                    .async(this.isAsync)
                    .timer(this.interval)
                    .submit()
            }, this.owner).later(2).submit()
            return this
        }

        cancel() {
            if (this.task != null) {
                this.task.cancel()
            }
        }
    }
}
