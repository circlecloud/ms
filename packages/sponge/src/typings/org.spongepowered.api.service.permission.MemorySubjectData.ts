declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                     class MemorySubjectData implements org.spongepowered.api.service.permission.SubjectData {
                        /**
                         * Creates a new subject data instance, using the provided service to
                         * request instances of permission subjects.
                         */
                        constructor(service: org.spongepowered.api.service.permission.PermissionService)
                        // @ts-ignore
                        public getAllPermissions(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Gets the calculated node tree representation of the permissions for this
                         * subject data instance. If no data is present for the given context,
                         * returns null.
                         */
                        // @ts-ignore
                        public getNodeTree(contexts: any[] /*java.util.Set*/): org.spongepowered.api.service.permission.NodeTree;
                        // @ts-ignore
                        public getPermissions(contexts: any[] /*java.util.Set*/): Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        public setPermission(contexts: any[] /*java.util.Set*/, permission: string, value: org.spongepowered.api.util.Tristate): any;
                        // @ts-ignore
                        public clearPermissions(): any;
                        // @ts-ignore
                        public clearPermissions(context: any[] /*java.util.Set*/): any;
                        // @ts-ignore
                        public getAllParents(): Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        public getParents(contexts: any[] /*java.util.Set*/): any[] /*java.util.List*/;
                        // @ts-ignore
                        public addParent(contexts: any[] /*java.util.Set*/, parent: org.spongepowered.api.service.permission.SubjectReference): any;
                        // @ts-ignore
                        public removeParent(contexts: any[] /*java.util.Set*/, parent: org.spongepowered.api.service.permission.SubjectReference): any;
                        // @ts-ignore
                        public clearParents(): any;
                        // @ts-ignore
                        public clearParents(contexts: any[] /*java.util.Set*/): any;
                        // @ts-ignore
                        public getAllOptions(): Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        public getOptions(contexts: any[] /*java.util.Set*/): Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        public setOption(contexts: any[] /*java.util.Set*/, key: string, value: string): any;
                        // @ts-ignore
                        public clearOptions(contexts: any[] /*java.util.Set*/): any;
                        // @ts-ignore
                        public clearOptions(): any;
                    }
                }
            }
        }
    }
}
