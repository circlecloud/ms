import { event, plugin } from '@ms/api'
import { injectable, inject, postConstruct } from '@ms/container'
import * as reflect from '@ms/common/dist/reflect'

const Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy();
const Event = Java.type("net.md_5.bungee.api.plugin.Event");
const Modifier = Java.type("java.lang.reflect.Modifier");
const ProxyClass = Java.type(base.getProxyClass().name);
const ProxyMethod = reflect.on(base.getProxyClass()).method("method");
const HashMap = Java.type('java.util.HashMap');

const EventPriority = [];
EventPriority[event.EventPriority.LOWEST] = -64;
EventPriority[event.EventPriority.LOW] = -32;
EventPriority[event.EventPriority.NORMAL] = 0;
EventPriority[event.EventPriority.HIGH] = 32;
EventPriority[event.EventPriority.HIGHEST] = 64;

/**
 * Bungee Event Impl
 */
@injectable()
export class BungeeEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;
    private pluginManager = Bungee.getPluginManager()

    // EventBus
    private eventBus: any;
    // private final Lock lock = new ReentrantLock();
    private lock: any;
    // private final Map<Class<?>, Map<Byte, Map<Object, Method[]>>> byListenerAndPriority = new HashMap<>();
    private byListenerAndPriority: any;
    // bakeHandlers(Class<?> eventClass)
    private bakeHandlers: any;

    constructor() {
        super('net/md_5/bungee/api/event');
    }

    @postConstruct()
    init() {
        this.eventBus = reflect.on(this.pluginManager).get('eventBus').get();
        this.lock = reflect.on(this.eventBus).get('lock').get()
        this.byListenerAndPriority = reflect.on(this.eventBus).get('byListenerAndPriority').get();
        this.bakeHandlers = reflect.accessible(reflect.on(this.eventBus).method("bakeHandlers"));
    }

    isValidEvent(clazz: any): boolean {
        //继承于 net.md_5.bungee.api.plugin.Event
        return Event.class.isAssignableFrom(clazz) &&
            // 访问符为Public
            Modifier.isPublic(clazz.getModifiers()) &&
            // 不是抽象类
            !Modifier.isAbstract(clazz.getModifiers());
    }

    register(eventCls: any, exec: Function, priority: event.EventPriority = event.EventPriority.NORMAL, ignoreCancel: boolean = true) {
        this.lock.lock()
        try {
            // private final Map<类, Map<优先级, Map<监听器, 方法[]>>> byListenerAndPriority = new HashMap<>();
            // this.byListenerAndPriority.put(eventCls)
            // Map<优先级, Map<监听器, 方法[]>>
            let prioritiesMap = this.byListenerAndPriority.get(eventCls);
            if (prioritiesMap == null) {
                prioritiesMap = new HashMap();
                this.byListenerAndPriority.put(eventCls, prioritiesMap);
            }
            // Map<监听器, 方法[]>
            let currentPriorityMap = prioritiesMap.get(EventPriority[priority]);
            if (currentPriorityMap == null) {
                currentPriorityMap = new HashMap();
                prioritiesMap.put(EventPriority[priority], currentPriorityMap);
            }
            let listener = new ProxyClass(ScriptEngineContextHolder.getEngine(), "exec(args)", { exec, priority: EventPriority[priority] })
            // 方法[]
            currentPriorityMap.put(listener, Java.to([ProxyMethod]));
            this.bakeHandlers.invoke(this.eventBus, eventCls);
            return listener;
        } catch (ex) {
            this.lock.unlock()
        }
    }

    unregister(eventCls: any, listener: any): void {
        this.lock.lock()
        try {
            // private final Map<类, Map<优先级, Map<监听器, 方法[]>>> byListenerAndPriority = new HashMap<>();
            // Map<优先级, Map<监听器, 方法[]>>
            let prioritiesMap = this.byListenerAndPriority.get(eventCls);
            if (prioritiesMap != null) {
                let priority = reflect.on(listener).get("bindings").get().get("priority");
                // Map<监听器, 方法[]>
                let currentPriorityMap = prioritiesMap.get(priority);
                if (currentPriorityMap != null) {
                    currentPriorityMap.remove(listener);
                    if (currentPriorityMap.isEmpty()) {
                        prioritiesMap.remove(priority);
                    }
                }
                if (prioritiesMap.isEmpty()) {
                    this.byListenerAndPriority.remove(eventCls);
                }
                this.bakeHandlers.invoke(this.eventBus, eventCls);
            }
        } catch (ex) {
            this.lock.unlock()
        }
    }
}
