declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface PermissionDescription {
                        // @ts-ignore
                         ROLE_USER: string;
                        // @ts-ignore
                         ROLE_STAFF: string;
                        // @ts-ignore
                         ROLE_ADMIN: string;
                        /**
                         * Gets the permission id this description belongs to.
                         * <p>The permission id must be of the specified format as specified using
                         * EBNF:
                         * <ul>
                         * <li>CHARACTER  = "A" - "Z" | "a" - "z" | "0" - "9" | "_" | "-"</li>
                         * <li>NAME       = CHARACTER , { CHARACTER }</li>
                         * <li>TEMPLATE   = "&lt" , NAME , "&gt"</li>
                         * <li>PART       = NAME | TEMPLATE</li>
                         * <li>PERMISSION = NAME , { "." , PART }</li>
                         * </ul>
                         * </p>
                         * <p>The following examples shall help you to structure your permissions
                         * well:
                         * <ul>
                         * <li>"myplugin" - Grants everything in myPlugin</li>
                         * <li>"myplugin.give" - Grants everything related to give including
                         * all ItemTypes and Enchantments</li>
                         * <li>"myplugin.give.execute" - Allows the execution of give</li>
                         * <li>"myplugin.give.type" - Grants all ItemTypes</li>
                         * <li>"myplugin.give.type.&ltItemType&gt" - A template should not be
                         * granted to anybody</li>
                         * <li>"myplugin.give.type.minecraft.diamond" - Only
                         * grants minecraft:diamond</li>
                         * <li>"myplugin.give.enchantment" - Grants all Enchantments</li>
                         * <li>"myplugin.give.others" - Allow giving to other players</li>
                         * </ul>
                         * The addition of the "execute" permission instead of just "myPlugin.give"
                         * permission is useful to prevent unauthorized access to sub-permissions
                         * that are not documented or have been added lately.
                         * </p>
                         * <p>
                         * So if you want to allow someone to give themself only DIAMONDs, you would
                         * assign them the following permissions:
                         * <ul>
                         * <li>"myPlugin.give.execute"</li>
                         * <li>"myPlugin.give.type.DIAMOND"</li>
                         * </ul>
                         * </p>
                         * <p><b>Note:</b> Permission ids are case insensitive! Permission ids
                         * should start with the owning plugin's id.</p>
                         */
                        // @ts-ignore
                         getId(): string;
                        /**
                         * Gets a short description of the linked permission.
                         * <p>May include a link to a more detailed description on the plugin's
                         * web page.</p>
                         * <p>Will return an empty optional for descriptions which have been
                         * automatically generated, or where a description was omitted when the
                         * {@link PermissionDescription} was created.</p>
                         */
                        // @ts-ignore
                         getDescription(): java.util.Optional;
                        /**
                         * Gets the owning plugin the permission belongs to.
                         * <p>Will return an empty optional for descriptions which have been
                         * automatically generated.</p>
                         */
                        // @ts-ignore
                         getOwner(): java.util.Optional;
                        /**
                         * Gets all subjects that have this permission set in the given collection.
                         * <p>If you want to know to which role-templates this permission is
                         * assigned, use {@link PermissionService#SUBJECTS_ROLE_TEMPLATE}.
                         * <p>This method is equivalent to calling
                         * {@link SubjectCollection#getAllWithPermission(String)} for the given
                         * collection, using {@link #getId()} as the permission.</p>
                         */
                        // @ts-ignore
                         findAssignedSubjects(collectionIdentifier: string): java.util.concurrent.CompletableFuture;
                        /**
                         * Gets all loaded subjects that have this permission set in the given
                         * collection.
                         * <p>If you want to know to which role-templates this permission is
                         * assigned, use {@link PermissionService#SUBJECTS_ROLE_TEMPLATE}.</p>
                         * <p>This method is equivalent to calling
                         * {@link SubjectCollection#getLoadedWithPermission(String)} for the given
                         * collection, using {@link #getId()} as the permission.</p>
                         * <p>This method will return an empty map if the given collection is not
                         * loaded or does not exist.</p>
                         */
                        // @ts-ignore
                         getAssignedSubjects(collectionIdentifier: string): java.util.Map;
                    }
                }
            }
        }
    }
}
