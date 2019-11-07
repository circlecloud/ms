// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace persistence {
            namespace PersistentDataType {
                // @ts-ignore
                 class PrimitivePersistentDataType extends java.lang.Object implements org.bukkit.persistence.PersistentDataType {
                    // @ts-ignore
                    public getPrimitiveType(): java.lang.Class;
                    // @ts-ignore
                    public getComplexType(): java.lang.Class;
                    // @ts-ignore
                    public toPrimitive(complex: java.lang.Object, context: org.bukkit.persistence.PersistentDataAdapterContext): java.lang.Object;
                    // @ts-ignore
                    public fromPrimitive(primitive: java.lang.Object, context: org.bukkit.persistence.PersistentDataAdapterContext): java.lang.Object;
                }
            }
        }
    }
}
