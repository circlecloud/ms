declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace PlayerListPacket {
                    // @ts-ignore
                     class Entry extends java.lang.Object {
                        // @ts-ignore
                        constructor(uuid: java.util.UUID)
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin)
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, entityId: number, name: string, skin: cn.nukkit.entity.data.Skin, xboxUserId: string)
                        // @ts-ignore
                        public uuid: java.util.UUID;
                        // @ts-ignore
                        public entityId: number;
                        // @ts-ignore
                        public name: string;
                        // @ts-ignore
                        public xboxUserId: string;
                        // @ts-ignore
                        public platformChatId: string;
                        // @ts-ignore
                        public buildPlatform: number;
                        // @ts-ignore
                        public skin: cn.nukkit.entity.data.Skin;
                        // @ts-ignore
                        public isTeacher: boolean;
                        // @ts-ignore
                        public isHost: boolean;
                    }
                }
            }
        }
    }
}
