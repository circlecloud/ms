declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class ConnectionThrottle extends java.lang.Object {
                // @ts-ignore
                constructor(throttleTime: number, throttleLimit: number)
                // @ts-ignore
                public unthrottle(address: java.net.InetAddress): void;
                // @ts-ignore
                public throttle(address: java.net.InetAddress): boolean;
            }
        }
    }
}
