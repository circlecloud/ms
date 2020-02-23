declare namespace cn {
    namespace nukkit {
        namespace event {
            // @ts-ignore
            interface EventHandler {
                /**
                 * 定义这个处理器的优先级。<br>
                 * Define the priority of the handler.
                 * <p>Nukkit调用处理器时会按照优先级从低到高的顺序调用，这样保证了高优先级的监听器能覆盖低优先级监听器做出的处理。
                 * 调用的先后顺序如下：<br> </p>
                 * When Nukkit calls all handlers, ones with lower priority is called earlier,
                 * that make handlers with higher priority can replace the decisions made by lower ones.
                 * The order that Nukkit call handlers is from the first to the last as:
                 * <ol>
                 * <li>EventPriority.LOWEST
                 * <li>EventPriority.LOW
                 * <li>EventPriority.NORMAL
                 * <li>EventPriority.HIGH
                 * <li>EventPriority.HIGHEST
                 * <li>EventPriority.MONITOR
                 * </ol>
                 */
                // @ts-ignore
                 priority(): cn.nukkit.event.EventPriority;
                /**
                 * 定义这个处理器是否忽略被取消的事件。<br>
                 * Define if the handler ignores a cancelled event.
                 * <p>如果为{@code true}而且事件发生，这个处理器不会被调用，反之相反。<br>
                 * If ignoreCancelled is {@code true} and the event is cancelled, the method is
                 * not called. Otherwise, the method is always called.</p>
                 */
                // @ts-ignore
                 ignoreCancelled(): boolean;
            }
        }
    }
}
