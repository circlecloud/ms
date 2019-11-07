// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
             class ActivationGroupDesc extends java.lang.Object {
                /**
                 * Constructs a group descriptor that uses the system defaults for group
                 * implementation and code location.  Properties specify Java
                 * environment overrides (which will override system properties in
                 * the group implementation's VM).  The command
                 * environment can control the exact command/options used in
                 * starting the child VM, or can be <code>null</code> to accept
                 * rmid's default.
                 * <p>This constructor will create an <code>ActivationGroupDesc</code>
                 * with a <code>null</code> group class name, which indicates the system's
                 * default <code>ActivationGroup</code> implementation.
                 */
                // @ts-ignore
                constructor(overrides: java.util.Properties, cmd: java.rmi.activation.ActivationGroupDesc.CommandEnvironment)
                /**
                 * Specifies an alternate group implementation and execution
                 * environment to be used for the group.
                 */
                // @ts-ignore
                constructor(className: string, location: string, data: java.rmi.MarshalledObject, overrides: java.util.Properties, cmd: java.rmi.activation.ActivationGroupDesc.CommandEnvironment)
                /**
                 * Returns the group's class name (possibly <code>null</code>).  A
                 * <code>null</code> group class name indicates the system's default
                 * <code>ActivationGroup</code> implementation.
                 */
                // @ts-ignore
                public getClassName(): string;
                /**
                 * Returns the group's code location.
                 */
                // @ts-ignore
                public getLocation(): string;
                /**
                 * Returns the group's initialization data.
                 */
                // @ts-ignore
                public getData(): java.rmi.MarshalledObject;
                /**
                 * Returns the group's property-override list.
                 */
                // @ts-ignore
                public getPropertyOverrides(): java.util.Properties;
                /**
                 * Returns the group's command-environment control object.
                 */
                // @ts-ignore
                public getCommandEnvironment(): java.rmi.activation.ActivationGroupDesc.CommandEnvironment;
                /**
                 * Compares two activation group descriptors for content equality.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Produce identical numbers for similar <code>ActivationGroupDesc</code>s.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
