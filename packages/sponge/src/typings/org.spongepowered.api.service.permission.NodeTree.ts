declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                     class NodeTree {
                        /**
                         * Create a new node tree with the given values, and a default value of
                         * {@link Tristate#UNDEFINED}.
                         */
                        // @ts-ignore
                        public static of(values: Map<any, any> /*java.util.Map*/): org.spongepowered.api.service.permission.NodeTree;
                        /**
                         * Create a new node tree with the given values, and the specified root
                         * fallback value.
                         */
                        // @ts-ignore
                        public static of(values: Map<any, any> /*java.util.Map*/, defaultValue: org.spongepowered.api.util.Tristate): org.spongepowered.api.service.permission.NodeTree;
                        /**
                         * Returns the value assigned to a specific node, or the nearest parent
                         * value in the tree if the node itself is undefined.
                         */
                        // @ts-ignore
                        public get(node: string): org.spongepowered.api.util.Tristate;
                        /**
                         * Convert this node tree into a map of the defined nodes in this tree.
                         */
                        // @ts-ignore
                        public asMap(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Return a new NodeTree instance with a single changed value.
                         */
                        // @ts-ignore
                        public withValue(node: string, value: org.spongepowered.api.util.Tristate): org.spongepowered.api.service.permission.NodeTree;
                        /**
                         * Return a modified new node tree with the specified values set.
                         */
                        // @ts-ignore
                        public withAll(values: Map<any, any> /*java.util.Map*/): org.spongepowered.api.service.permission.NodeTree;
                    }
                }
            }
        }
    }
}
