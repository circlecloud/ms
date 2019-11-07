declare namespace java {
    namespace awt {
        // @ts-ignore
        interface MenuContainer {
            // @ts-ignore
             getFont(): java.awt.Font;
            // @ts-ignore
             remove(comp: java.awt.MenuComponent): void;
            // @ts-ignore
             postEvent(evt: java.awt.Event): boolean;
        }
    }
}
