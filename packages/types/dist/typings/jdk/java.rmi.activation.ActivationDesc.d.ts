// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
             class ActivationDesc extends java.lang.Object {
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code>, that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. If this form of the constructor
                 * is used, the <code>groupID</code> defaults to the current id for
                 * <code>ActivationGroup</code> for this VM. All objects with the
                 * same <code>ActivationGroupID</code> are activated in the same VM.
                 * <p>Note that objects specified by a descriptor created with this
                 * constructor will only be activated on demand (by default, the restart
                 * mode is <code>false</code>).  If an activatable object requires restart
                 * services, use one of the <code>ActivationDesc</code> constructors that
                 * takes a boolean parameter, <code>restart</code>.
                 * <p> This constructor will throw <code>ActivationException</code> if
                 * there is no current activation group for this VM.  To create an
                 * <code>ActivationGroup</code> use the
                 * <code>ActivationGroup.createGroup</code> method.
                 */
                // @ts-ignore
                constructor(className: string, location: string, data: java.rmi.MarshalledObject)
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code>, that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. If this form of the constructor
                 * is used, the <code>groupID</code> defaults to the current id for
                 * <code>ActivationGroup</code> for this VM. All objects with the
                 * same <code>ActivationGroupID</code> are activated in the same VM.
                 * <p>This constructor will throw <code>ActivationException</code> if
                 * there is no current activation group for this VM.  To create an
                 * <code>ActivationGroup</code> use the
                 * <code>ActivationGroup.createGroup</code> method.
                 */
                // @ts-ignore
                constructor(className: string, location: string, data: java.rmi.MarshalledObject, restart: boolean)
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code> that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. All objects with the same
                 * <code>groupID</code> are activated in the same Java VM.
                 * <p>Note that objects specified by a descriptor created with this
                 * constructor will only be activated on demand (by default, the restart
                 * mode is <code>false</code>).  If an activatable object requires restart
                 * services, use one of the <code>ActivationDesc</code> constructors that
                 * takes a boolean parameter, <code>restart</code>.
                 */
                // @ts-ignore
                constructor(groupID: java.rmi.activation.ActivationGroupID, className: string, location: string, data: java.rmi.MarshalledObject)
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code> that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. All objects with the same
                 * <code>groupID</code> are activated in the same Java VM.
                 */
                // @ts-ignore
                constructor(groupID: java.rmi.activation.ActivationGroupID, className: string, location: string, data: java.rmi.MarshalledObject, restart: boolean)
                /**
                 * Returns the group identifier for the object specified by this
                 * descriptor. A group provides a way to aggregate objects into a
                 * single Java virtual machine. RMI creates/activates objects with
                 * the same <code>groupID</code> in the same virtual machine.
                 */
                // @ts-ignore
                public getGroupID(): java.rmi.activation.ActivationGroupID;
                /**
                 * Returns the class name for the object specified by this
                 * descriptor.
                 */
                // @ts-ignore
                public getClassName(): string;
                /**
                 * Returns the code location for the object specified by
                 * this descriptor.
                 */
                // @ts-ignore
                public getLocation(): string;
                /**
                 * Returns a "marshalled object" containing intialization/activation
                 * data for the object specified by this descriptor.
                 */
                // @ts-ignore
                public getData(): java.rmi.MarshalledObject;
                /**
                 * Returns the "restart" mode of the object associated with
                 * this activation descriptor.
                 */
                // @ts-ignore
                public getRestartMode(): boolean;
                /**
                 * Compares two activation descriptors for content equality.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Return the same hashCode for similar <code>ActivationDesc</code>s.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
