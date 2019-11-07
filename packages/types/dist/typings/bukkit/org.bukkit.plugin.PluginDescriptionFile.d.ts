declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class PluginDescriptionFile extends java.lang.Object {
                // @ts-ignore
                constructor(stream: java.io.InputStream)
                /**
                 * Loads a PluginDescriptionFile from the specified reader
                 */
                // @ts-ignore
                constructor(reader: java.io.Reader)
                /**
                 * Creates a new PluginDescriptionFile with the given detailed
                 */
                // @ts-ignore
                constructor(pluginName: string, pluginVersion: string, mainClass: string)
                /**
                 * Gives the name of the plugin. This name is a unique identifier for
                 * plugins.
                 * <ul>
                 * <li>Must consist of all alphanumeric characters, underscores, hyphon,
                 * and period (a-z,A-Z,0-9, _.-). Any other character will cause the
                 * plugin.yml to fail loading.
                 * <li>Used to determine the name of the plugin's data folder. Data
                 * folders are placed in the ./plugins/ directory by default, but this
                 * behavior should not be relied on. {@link Plugin#getDataFolder()}
                 * should be used to reference the data folder.
                 * <li>It is good practice to name your jar the same as this, for example
                 * 'MyPlugin.jar'.
                 * <li>Case sensitive.
                 * <li>The is the token referenced in {@link #getDepend()}, {@link
                 * #getSoftDepend()}, and {@link #getLoadBefore()}.
                 * <li>Using spaces in the plugin's name is deprecated.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>name</code>.
                 * <p>
                 * Example:<blockquote><pre>name: MyPlugin</pre></blockquote>
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Gives the version of the plugin.
                 * <ul>
                 * <li>Version is an arbitrary string, however the most common format is
                 * MajorRelease.MinorRelease.Build (eg: 1.4.1).
                 * <li>Typically you will increment this every time you release a new
                 * feature or bug fix.
                 * <li>Displayed when a user types <code>/version PluginName</code>
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>version</code>.
                 * <p>
                 * Example:<blockquote><pre>version: 1.4.1</pre></blockquote>
                 */
                // @ts-ignore
                public getVersion(): string;
                /**
                 * Gives the fully qualified name of the main class for a plugin. The
                 * format should follow the {@link ClassLoader#loadClass(String)} syntax
                 * to successfully be resolved at runtime. For most plugins, this is the
                 * class that extends {@link JavaPlugin}.
                 * <ul>
                 * <li>This must contain the full namespace including the class file
                 * itself.
                 * <li>If your namespace is <code>org.bukkit.plugin</code>, and your class
                 * file is called <code>MyPlugin</code> then this must be
                 * <code>org.bukkit.plugin.MyPlugin</code>
                 * <li>No plugin can use <code>org.bukkit.</code> as a base package for
                 * <b>any class</b>, including the main class.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>main</code>.
                 * <p>
                 * Example:
                 * <blockquote><pre>main: org.bukkit.plugin.MyPlugin</pre></blockquote>
                 */
                // @ts-ignore
                public getMain(): string;
                /**
                 * Gives a human-friendly description of the functionality the plugin
                 * provides.
                 * <ul>
                 * <li>The description can have multiple lines.
                 * <li>Displayed when a user types <code>/version PluginName</code>
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>description</code>.
                 * <p>
                 * Example:
                 * <blockquote><pre>description: This plugin is so 31337. You can set yourself on fire.</pre></blockquote>
                 */
                // @ts-ignore
                public getDescription(): string;
                /**
                 * Gives the phase of server startup that the plugin should be loaded.
                 * <ul>
                 * <li>Possible values are in {@link PluginLoadOrder}.
                 * <li>Defaults to {@link PluginLoadOrder#POSTWORLD}.
                 * <li>Certain caveats apply to each phase.
                 * <li>When different, {@link #getDepend()}, {@link #getSoftDepend()}, and
                 * {@link #getLoadBefore()} become relative in order loaded per-phase.
                 * If a plugin loads at <code>STARTUP</code>, but a dependency loads
                 * at <code>POSTWORLD</code>, the dependency will not be loaded before
                 * the plugin is loaded.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>load</code>.
                 * <p>
                 * Example:<blockquote><pre>load: STARTUP</pre></blockquote>
                 */
                // @ts-ignore
                public getLoad(): org.bukkit.plugin.PluginLoadOrder;
                /**
                 * Gives the list of authors for the plugin.
                 * <ul>
                 * <li>Gives credit to the developer.
                 * <li>Used in some server error messages to provide helpful feedback on
                 * who to contact when an error occurs.
                 * <li>A bukkit.org forum handle or email address is recommended.
                 * <li>Is displayed when a user types <code>/version PluginName</code>
                 * <li><code>authors</code> must be in <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list
                 * format</a>.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this has two entries, <code>author</code> and
                 * <code>authors</code>.
                 * <p>
                 * Single author example:
                 * <blockquote><pre>author: CaptainInflamo</pre></blockquote>
                 * Multiple author example:
                 * <blockquote><pre>authors: [Cogito, verrier, EvilSeph]</pre></blockquote>
                 * When both are specified, author will be the first entry in the list, so
                 * this example:
                 * <blockquote><pre>author: Grum
                 * authors:
                 * - feildmaster
                 * - amaranth</pre></blockquote>
                 * Is equivilant to this example:
                 * <pre>authors: [Grum, feildmaster, aramanth]</pre>
                 */
                // @ts-ignore
                public getAuthors(): java.util.List;
                /**
                 * Gives the plugin's or plugin's author's website.
                 * <ul>
                 * <li>A link to the Curse page that includes documentation and downloads
                 * is highly recommended.
                 * <li>Displayed when a user types <code>/version PluginName</code>
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>website</code>.
                 * <p>
                 * Example:
                 * <blockquote><pre>website: http://www.curse.com/server-mods/minecraft/myplugin</pre></blockquote>
                 */
                // @ts-ignore
                public getWebsite(): string;
                /**
                 * Gives a list of other plugins that the plugin requires.
                 * <ul>
                 * <li>Use the value in the {@link #getName()} of the target plugin to
                 * specify the dependency.
                 * <li>If any plugin listed here is not found, your plugin will fail to
                 * load at startup.
                 * <li>If multiple plugins list each other in <code>depend</code>,
                 * creating a network with no individual plugin does not list another
                 * plugin in the <a
                 * href=https://en.wikipedia.org/wiki/Circular_dependency>network</a>,
                 * all plugins in that network will fail.
                 * <li><code>depend</code> must be in must be in <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list
                 * format</a>.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>depend</code>.
                 * <p>
                 * Example:
                 * <blockquote><pre>depend:
                 * - OnePlugin
                 * - AnotherPlugin</pre></blockquote>
                 */
                // @ts-ignore
                public getDepend(): java.util.List;
                /**
                 * Gives a list of other plugins that the plugin requires for full
                 * functionality. The {@link PluginManager} will make best effort to treat
                 * all entries here as if they were a {@link #getDepend() dependency}, but
                 * will never fail because of one of these entries.
                 * <ul>
                 * <li>Use the value in the {@link #getName()} of the target plugin to
                 * specify the dependency.
                 * <li>When an unresolvable plugin is listed, it will be ignored and does
                 * not affect load order.
                 * <li>When a circular dependency occurs (a network of plugins depending
                 * or soft-dependending each other), it will arbitrarily choose a
                 * plugin that can be resolved when ignoring soft-dependencies.
                 * <li><code>softdepend</code> must be in <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list
                 * format</a>.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>softdepend</code>.
                 * <p>
                 * Example:
                 * <blockquote><pre>softdepend: [OnePlugin, AnotherPlugin]</pre></blockquote>
                 */
                // @ts-ignore
                public getSoftDepend(): java.util.List;
                /**
                 * Gets the list of plugins that should consider this plugin a
                 * soft-dependency.
                 * <ul>
                 * <li>Use the value in the {@link #getName()} of the target plugin to
                 * specify the dependency.
                 * <li>The plugin should load before any other plugins listed here.
                 * <li>Specifying another plugin here is strictly equivalent to having the
                 * specified plugin's {@link #getSoftDepend()} include {@link
                 * #getName() this plugin}.
                 * <li><code>loadbefore</code> must be in <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list
                 * format</a>.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>loadbefore</code>.
                 * <p>
                 * Example:
                 * <blockquote><pre>loadbefore:
                 * - OnePlugin
                 * - AnotherPlugin</pre></blockquote>
                 */
                // @ts-ignore
                public getLoadBefore(): java.util.List;
                /**
                 * Gives the token to prefix plugin-specific logging messages with.
                 * <ul>
                 * <li>This includes all messages using {@link Plugin#getLogger()}.
                 * <li>If not specified, the server uses the plugin's {@link #getName()
                 * name}.
                 * <li>This should clearly indicate what plugin is being logged.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>prefix</code>.
                 * <p>
                 * Example:<blockquote><pre>prefix: ex-why-zee</pre></blockquote>
                 */
                // @ts-ignore
                public getPrefix(): string;
                /**
                 * Gives the map of command-name to command-properties. Each entry in this
                 * map corresponds to a single command and the respective values are the
                 * properties of the command. Each property, <i>with the exception of
                 * aliases</i>, can be defined at runtime using methods in {@link
                 * PluginCommand} and are defined here only as a convenience.
                 * <table border=1>
                 * <caption>The command section's description</caption>
                 * <tr>
                 * <th>Node</th>
                 * <th>Method</th>
                 * <th>Type</th>
                 * <th>Description</th>
                 * <th>Example</th>
                 * </tr><tr>
                 * <td><code>description</code></td>
                 * <td>{@link PluginCommand#setDescription(String)}</td>
                 * <td>String</td>
                 * <td>A user-friendly description for a command. It is useful for
                 * documentation purposes as well as in-game help.</td>
                 * <td><blockquote><pre>description: Set yourself on fire</pre></blockquote></td>
                 * </tr><tr>
                 * <td><code>aliases</code></td>
                 * <td>{@link PluginCommand#setAliases(List)}</td>
                 * <td>String or <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">List</a> of
                 * strings</td>
                 * <td>Alternative command names, with special usefulness for commands
                 * that are already registered. <i>Aliases are not effective when
                 * defined at runtime,</i> so the plugin description file is the
                 * only way to have them properly defined.
                 * <p>
                 * Note: Command aliases may not have a colon in them.</td>
                 * <td>Single alias format:
                 * <blockquote><pre>aliases: combust_me</pre></blockquote> or
                 * multiple alias format:
                 * <blockquote><pre>aliases: [combust_me, combustMe]</pre></blockquote></td>
                 * </tr><tr>
                 * <td><code>permission</code></td>
                 * <td>{@link PluginCommand#setPermission(String)}</td>
                 * <td>String</td>
                 * <td>The name of the {@link Permission} required to use the command.
                 * A user without the permission will receive the specified
                 * message (see {@linkplain
                 * PluginCommand#setPermissionMessage(String) below}), or a
                 * standard one if no specific message is defined. Without the
                 * permission node, no {@link
                 * PluginCommand#setExecutor(CommandExecutor) CommandExecutor} or
                 * {@link PluginCommand#setTabCompleter(TabCompleter)} will be called.</td>
                 * <td><blockquote><pre>permission: inferno.flagrate</pre></blockquote></td>
                 * </tr><tr>
                 * <td><code>permission-message</code></td>
                 * <td>{@link PluginCommand#setPermissionMessage(String)}</td>
                 * <td>String</td>
                 * <td><ul>
                 * <li>Displayed to a player that attempts to use a command, but
                 * does not have the required permission. See {@link
                 * PluginCommand#getPermission() above}.
                 * <li>&lt;permission&gt; is a macro that is replaced with the
                 * permission node required to use the command.
                 * <li>Using empty quotes is a valid way to indicate nothing
                 * should be displayed to a player.
                 * </ul></td>
                 * <td><blockquote><pre>permission-message: You do not have /&lt;permission&gt;</pre></blockquote></td>
                 * </tr><tr>
                 * <td><code>usage</code></td>
                 * <td>{@link PluginCommand#setUsage(String)}</td>
                 * <td>String</td>
                 * <td>This message is displayed to a player when the {@link
                 * PluginCommand#setExecutor(CommandExecutor)} {@linkplain
                 * CommandExecutor#onCommand(CommandSender, Command, String, String[]) returns false}.
                 * &lt;command&gt; is a macro that is replaced the command issued.</td>
                 * <td><blockquote><pre>usage: Syntax error! Perhaps you meant /&lt;command&gt; PlayerName?</pre></blockquote>
                 * It is worth noting that to use a colon in a yaml, like
                 * <code>`usage: Usage: /god [player]'</code>, you need to
                 * <a href="http://yaml.org/spec/current.html#id2503232">surround
                 * the message with double-quote</a>:
                 * <blockquote><pre>usage: "Usage: /god [player]"</pre></blockquote></td>
                 * </tr>
                 * </table>
                 * The commands are structured as a hiearchy of <a
                 * href="http://yaml.org/spec/current.html#id2502325">nested mappings</a>.
                 * The primary (top-level, no intendentation) node is
                 * `<code>commands</code>', while each individual command name is
                 * indented, indicating it maps to some value (in our case, the
                 * properties of the table above).
                 * <p>
                 * Here is an example bringing together the piecemeal examples above, as
                 * well as few more definitions:<blockquote><pre>
                 * commands:
                 * flagrate:
                 * description: Set yourself on fire.
                 * aliases: [combust_me, combustMe]
                 * permission: inferno.flagrate
                 * permission-message: You do not have /&lt;permission&gt;
                 * usage: Syntax error! Perhaps you meant /&lt;command&gt; PlayerName?
                 * burningdeaths:
                 * description: List how many times you have died by fire.
                 * aliases:
                 * - burning_deaths
                 * - burningDeaths
                 * permission: inferno.burningdeaths
                 * usage: |
                 * /&lt;command&gt; [player]
                 * Example: /&lt;command&gt; - see how many times you have burned to death
                 * Example: /&lt;command&gt; CaptainIce - see how many times CaptainIce has burned to death
                 * # The next command has no description, aliases, etc. defined, but is still valid
                 * # Having an empty declaration is useful for defining the description, permission, and messages from a configuration dynamically
                 * apocalypse:
                 * </pre></blockquote>
                 * Note: Command names may not have a colon in their name.
                 */
                // @ts-ignore
                public getCommands(): java.util.Map;
                /**
                 * Gives the list of permissions the plugin will register at runtime,
                 * immediately proceding enabling. The format for defining permissions is
                 * a map from permission name to properties. To represent a map without
                 * any specific property, empty <a
                 * href="http://yaml.org/spec/current.html#id2502702">curly-braces</a> (
                 * <code>&#123;&#125;</code> ) may be used (as a null value is not
                 * accepted, unlike the {@link #getCommands() commands} above).
                 * <p>
                 * A list of optional properties for permissions:
                 * <table border=1>
                 * <caption>The permission section's description</caption>
                 * <tr>
                 * <th>Node</th>
                 * <th>Description</th>
                 * <th>Example</th>
                 * </tr><tr>
                 * <td><code>description</code></td>
                 * <td>Plaintext (user-friendly) description of what the permission
                 * is for.</td>
                 * <td><blockquote><pre>description: Allows you to set yourself on fire</pre></blockquote></td>
                 * </tr><tr>
                 * <td><code>default</code></td>
                 * <td>The default state for the permission, as defined by {@link
                 * Permission#getDefault()}. If not defined, it will be set to
                 * the value of {@link PluginDescriptionFile#getPermissionDefault()}.
                 * <p>
                 * For reference:<ul>
                 * <li><code>true</code> - Represents a positive assignment to
                 * {@link Permissible permissibles}.
                 * <li><code>false</code> - Represents no assignment to {@link
                 * Permissible permissibles}.
                 * <li><code>op</code> - Represents a positive assignment to
                 * {@link Permissible#isOp() operator permissibles}.
                 * <li><code>notop</code> - Represents a positive assignment to
                 * {@link Permissible#isOp() non-operator permissibiles}.
                 * </ul></td>
                 * <td><blockquote><pre>default: true</pre></blockquote></td>
                 * </tr><tr>
                 * <td><code>children</code></td>
                 * <td>Allows other permissions to be set as a {@linkplain
                 * Permission#getChildren() relation} to the parent permission.
                 * When a parent permissions is assigned, child permissions are
                 * respectively assigned as well.
                 * <ul>
                 * <li>When a parent permission is assigned negatively, child
                 * permissions are assigned based on an inversion of their
                 * association.
                 * <li>When a parent permission is assigned positively, child
                 * permissions are assigned based on their association.
                 * </ul>
                 * <p>
                 * Child permissions may be defined in a number of ways:<ul>
                 * <li>Children may be defined as a <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">list</a> of
                 * names. Using a list will treat all children associated
                 * positively to their parent.
                 * <li>Children may be defined as a map. Each permission name maps
                 * to either a boolean (representing the association), or a
                 * nested permission definition (just as another permission).
                 * Using a nested definition treats the child as a positive
                 * association.
                 * <li>A nested permission definition must be a map of these same
                 * properties. To define a valid nested permission without
                 * defining any specific property, empty curly-braces (
                 * <code>&#123;&#125;</code> ) must be used.
                 * <li>A nested permission may carry it's own nested permissions
                 * as children, as they may also have nested permissions, and
                 * so forth. There is no direct limit to how deep the
                 * permission tree is defined.
                 * </ul></td>
                 * <td>As a list:
                 * <blockquote><pre>children: [inferno.flagrate, inferno.burningdeaths]</pre></blockquote>
                 * Or as a mapping:
                 * <blockquote><pre>children:
                 * inferno.flagrate: true
                 * inferno.burningdeaths: true</pre></blockquote>
                 * An additional example showing basic nested values can be seen
                 * <a href="doc-files/permissions-example_plugin.yml">here</a>.
                 * </td>
                 * </tr>
                 * </table>
                 * The permissions are structured as a hiearchy of <a
                 * href="http://yaml.org/spec/current.html#id2502325">nested mappings</a>.
                 * The primary (top-level, no intendentation) node is
                 * `<code>permissions</code>', while each individual permission name is
                 * indented, indicating it maps to some value (in our case, the
                 * properties of the table above).
                 * <p>
                 * Here is an example using some of the properties:<blockquote><pre>
                 * permissions:
                 * inferno.*:
                 * description: Gives access to all Inferno commands
                 * children:
                 * inferno.flagrate: true
                 * inferno.burningdeaths: true
                 * inferno.flagate:
                 * description: Allows you to ignite yourself
                 * default: true
                 * inferno.burningdeaths:
                 * description: Allows you to see how many times you have burned to death
                 * default: true
                 * </pre></blockquote>
                 * Another example, with nested definitions, can be found <a
                 * href="doc-files/permissions-example_plugin.yml">here</a>.
                 */
                // @ts-ignore
                public getPermissions(): java.util.List;
                /**
                 * Gives the default {@link Permission#getDefault() default} state of
                 * {@link #getPermissions() permissions} registered for the plugin.
                 * <ul>
                 * <li>If not specified, it will be {@link PermissionDefault#OP}.
                 * <li>It is matched using {@link PermissionDefault#getByName(String)}
                 * <li>It only affects permissions that do not define the
                 * <code>default</code> node.
                 * <li>It may be any value in {@link PermissionDefault}.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>default-permission</code>.
                 * <p>
                 * Example:<blockquote><pre>default-permission: NOT_OP</pre></blockquote>
                 */
                // @ts-ignore
                public getPermissionDefault(): org.bukkit.permissions.PermissionDefault;
                /**
                 * Gives a set of every {@link PluginAwareness} for a plugin. An awareness
                 * dictates something that a plugin developer acknowledges when the plugin
                 * is compiled. Some implementions may define extra awarenesses that are
                 * not included in the API. Any unrecognized
                 * awareness (one unsupported or in a future version) will cause a dummy
                 * object to be created instead of failing.
                 * <ul>
                 * <li>Currently only supports the enumerated values in {@link
                 * PluginAwareness.Flags}.
                 * <li>Each awareness starts the identifier with bang-at
                 * (<code>!@</code>).
                 * <li>Unrecognized (future / unimplemented) entries are quietly replaced
                 * by a generic object that implements PluginAwareness.
                 * <li>A type of awareness must be defined by the runtime and acknowledged
                 * by the API, effectively discluding any derived type from any
                 * plugin's classpath.
                 * <li><code>awareness</code> must be in <a
                 * href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list
                 * format</a>.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>awareness</code>.
                 * <p>
                 * Example:<blockquote><pre>awareness:
                 * - !@UTF8</pre></blockquote>
                 * <p>
                 * <b>Note:</b> Although unknown versions of some future awareness are
                 * gracefully substituted, previous versions of Bukkit (ones prior to the
                 * first implementation of awareness) will fail to load a plugin that
                 * defines any awareness.
                 */
                // @ts-ignore
                public getAwareness(): java.util.Set;
                /**
                 * Returns the name of a plugin, including the version. This method is
                 * provided for convenience; it uses the {@link #getName()} and {@link
                 * #getVersion()} entries.
                 */
                // @ts-ignore
                public getFullName(): string;
                /**
                 * Gives the API version which this plugin is designed to support. No
                 * specific format is guaranteed.
                 * <ul>
                 * <li>Refer to release notes for supported API versions.
                 * </ul>
                 * <p>
                 * In the plugin.yml, this entry is named <code>api-version</code>.
                 * <p>
                 * Example:<blockquote><pre>api-version: 1.13</pre></blockquote>
                 */
                // @ts-ignore
                public getAPIVersion(): string;
                // @ts-ignore
                public getClassLoaderOf(): string;
                /**
                 * Saves this PluginDescriptionFile to the given writer
                 */
                // @ts-ignore
                public save(writer: java.io.Writer): void;
                // @ts-ignore
                public getRawName(): string;
            }
        }
    }
}
