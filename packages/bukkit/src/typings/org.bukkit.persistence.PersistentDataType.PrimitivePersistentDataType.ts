declare namespace org {
    namespace bukkit {
        namespace persistence {
            namespace PersistentDataType {
                class PrimitivePersistentDataType {
                    public getPrimitiveType(): any;
                    public getComplexType(): any;
                    public toPrimitive(complex: any, context: org.bukkit.persistence.PersistentDataAdapterContext): any;
                    public fromPrimitive(primitive: any, context: org.bukkit.persistence.PersistentDataAdapterContext): any;
                }
            }
        }
    }
}
