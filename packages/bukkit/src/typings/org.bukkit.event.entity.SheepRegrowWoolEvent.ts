declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class SheepRegrowWoolEvent implements org.bukkit.event.Cancellable {
                    constructor(sheep: org.bukkit.entity.Sheep)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Sheep;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
