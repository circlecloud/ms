declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                     class MemorySubjectData extends java.lang.Object implements org.spongepowered.api.service.permission.SubjectData {
                        /**
                         * Creates a new subject data instance, using the provided service to
                         * request instances of permission subjects.
                         */
                        // @ts-ignore
                        constructor(service: org.spongepowered.api.service.permission.PermissionService)
                        // @ts-ignore
                        public getAllPermissions(): java.util.Map;
                        /**
                         * Gets the calculated node tree representation of the permissions for this
                         * subject data instance. If no data is present for the given context,
                         * returns null.
                         */
                        // @ts-ignore
                        public getNodeTree(contexts: java.util.Set): org.spongepowered.api.service.permission.NodeTree;
                        // @ts-ignore
                        public getPermissions(contexts: java.util.Set): java.util.Map;
                        // @ts-ignore
                        public setPermission(contexts: java.util.Set, permission: string, value: org.spongepowered.api.util.Tristate): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public clearPermissions(): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public clearPermissions(context: java.util.Set): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public getAllParents(): java.util.Map;
                        // @ts-ignore
                        public getParents(contexts: java.util.Set): java.util.List;
                        // @ts-ignore
                        public addParent(contexts: java.util.Set, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public removeParent(contexts: java.util.Set, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public clearParents(): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public clearParents(contexts: java.util.Set): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public getAllOptions(): java.util.Map;
                        // @ts-ignore
                        public getOptions(contexts: java.util.Set): java.util.Map;
                        // @ts-ignore
                        public setOption(contexts: java.util.Set, key: string, value: string): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public clearOptions(contexts: java.util.Set): java.util.concurrent.CompletableFuture;
                        // @ts-ignore
                        public clearOptions(): java.util.concurrent.CompletableFuture;
                    }
                }
            }
        }
    }
}
