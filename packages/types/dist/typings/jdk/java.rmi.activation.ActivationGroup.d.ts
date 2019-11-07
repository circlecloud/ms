declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
            abstract class ActivationGroup extends java.rmi.server.UnicastRemoteObject {
                /**
                 * Constructs an activation group with the given activation group
                 * identifier.  The group is exported as a
                 * <code>java.rmi.server.UnicastRemoteObject</code>.
                 */
                // @ts-ignore
                constructor(groupID: java.rmi.activation.ActivationGroupID)
                /**
                 * The group's <code>inactiveObject</code> method is called
                 * indirectly via a call to the <code>Activatable.inactive</code>
                 * method. A remote object implementation must call
                 * <code>Activatable</code>'s <code>inactive</code> method when
                 * that object deactivates (the object deems that it is no longer
                 * active). If the object does not call
                 * <code>Activatable.inactive</code> when it deactivates, the
                 * object will never be garbage collected since the group keeps
                 * strong references to the objects it creates.
                 * <p>The group's <code>inactiveObject</code> method unexports the
                 * remote object from the RMI runtime so that the object can no
                 * longer receive incoming RMI calls. An object will only be unexported
                 * if the object has no pending or executing calls.
                 * The subclass of <code>ActivationGroup</code> must override this
                 * method and unexport the object.
                 * <p>After removing the object from the RMI runtime, the group
                 * must inform its <code>ActivationMonitor</code> (via the monitor's
                 * <code>inactiveObject</code> method) that the remote object is
                 * not currently active so that the remote object will be
                 * re-activated by the activator upon a subsequent activation
                 * request.
                 * <p>This method simply informs the group's monitor that the object
                 * is inactive.  It is up to the concrete subclass of ActivationGroup
                 * to fulfill the additional requirement of unexporting the object. <p>
                 */
                // @ts-ignore
                public inactiveObject(id: java.rmi.activation.ActivationID): boolean;
                /**
                 * The group's <code>activeObject</code> method is called when an
                 * object is exported (either by <code>Activatable</code> object
                 * construction or an explicit call to
                 * <code>Activatable.exportObject</code>. The group must inform its
                 * <code>ActivationMonitor</code> that the object is active (via
                 * the monitor's <code>activeObject</code> method) if the group
                 * hasn't already done so.
                 */
                // @ts-ignore
                public abstract activeObject(id: java.rmi.activation.ActivationID, obj: java.rmi.Remote): void;
                /**
                 * Create and set the activation group for the current VM.  The
                 * activation group can only be set if it is not currently set.
                 * An activation group is set using the <code>createGroup</code>
                 * method when the <code>Activator</code> initiates the
                 * re-creation of an activation group in order to carry out
                 * incoming <code>activate</code> requests. A group must first be
                 * registered with the <code>ActivationSystem</code> before it can
                 * be created via this method.
                 * <p>The group class specified by the
                 * <code>ActivationGroupDesc</code> must be a concrete subclass of
                 * <code>ActivationGroup</code> and have a public constructor that
                 * takes two arguments: the <code>ActivationGroupID</code> for the
                 * group and the <code>MarshalledObject</code> containing the
                 * group's initialization data (obtained from the
                 * <code>ActivationGroupDesc</code>.
                 * <p>If the group class name specified in the
                 * <code>ActivationGroupDesc</code> is <code>null</code>, then
                 * this method will behave as if the group descriptor contained
                 * the name of the default activation group implementation class.
                 * <p>Note that if your application creates its own custom
                 * activation group, a security manager must be set for that
                 * group.  Otherwise objects cannot be activated in the group.
                 * {@link SecurityManager} is set by default.
                 * <p>If a security manager is already set in the group VM, this
                 * method first calls the security manager's
                 * <code>checkSetFactory</code> method.  This could result in a
                 * <code>SecurityException</code>. If your application needs to
                 * set a different security manager, you must ensure that the
                 * policy file specified by the group's
                 * <code>ActivationGroupDesc</code> grants the group the necessary
                 * permissions to set a new security manager.  (Note: This will be
                 * necessary if your group downloads and sets a security manager).
                 * <p>After the group is created, the
                 * <code>ActivationSystem</code> is informed that the group is
                 * active by calling the <code>activeGroup</code> method which
                 * returns the <code>ActivationMonitor</code> for the group. The
                 * application need not call <code>activeGroup</code>
                 * independently since it is taken care of by this method.
                 * <p>Once a group is created, subsequent calls to the
                 * <code>currentGroupID</code> method will return the identifier
                 * for this group until the group becomes inactive.
                 */
                // @ts-ignore
                public static createGroup(id: java.rmi.activation.ActivationGroupID, desc: java.rmi.activation.ActivationGroupDesc, incarnation: number): java.rmi.activation.ActivationGroup;
                /**
                 * Returns the current activation group's identifier.  Returns null
                 * if no group is currently active for this VM.
                 */
                // @ts-ignore
                public static currentGroupID(): java.rmi.activation.ActivationGroupID;
                /**
                 * Set the activation system for the VM.  The activation system can
                 * only be set it if no group is currently active. If the activation
                 * system is not set via this call, then the <code>getSystem</code>
                 * method attempts to obtain a reference to the
                 * <code>ActivationSystem</code> by looking up the name
                 * "java.rmi.activation.ActivationSystem" in the Activator's
                 * registry. By default, the port number used to look up the
                 * activation system is defined by
                 * <code>ActivationSystem.SYSTEM_PORT</code>. This port can be overridden
                 * by setting the property <code>java.rmi.activation.port</code>.
                 * <p>If there is a security manager, this method first
                 * calls the security manager's <code>checkSetFactory</code> method.
                 * This could result in a SecurityException.
                 */
                // @ts-ignore
                public static setSystem(system: java.rmi.activation.ActivationSystem): void;
                /**
                 * Returns the activation system for the VM. The activation system
                 * may be set by the <code>setSystem</code> method. If the
                 * activation system is not set via the <code>setSystem</code>
                 * method, then the <code>getSystem</code> method attempts to
                 * obtain a reference to the <code>ActivationSystem</code> by
                 * looking up the name "java.rmi.activation.ActivationSystem" in
                 * the Activator's registry. By default, the port number used to
                 * look up the activation system is defined by
                 * <code>ActivationSystem.SYSTEM_PORT</code>. This port can be
                 * overridden by setting the property
                 * <code>java.rmi.activation.port</code>.
                 */
                // @ts-ignore
                public static getSystem(): java.rmi.activation.ActivationSystem;
                /**
                 * This protected method is necessary for subclasses to
                 * make the <code>activeObject</code> callback to the group's
                 * monitor. The call is simply forwarded to the group's
                 * <code>ActivationMonitor</code>.
                 */
                // @ts-ignore
                protected activeObject(id: java.rmi.activation.ActivationID, mobj: java.rmi.MarshalledObject): void;
                /**
                 * This protected method is necessary for subclasses to
                 * make the <code>inactiveGroup</code> callback to the group's
                 * monitor. The call is simply forwarded to the group's
                 * <code>ActivationMonitor</code>. Also, the current group
                 * for the VM is set to null.
                 */
                // @ts-ignore
                protected inactiveGroup(): void;
            }
        }
    }
}
