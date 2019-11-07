declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
            interface ActivationSystem {
                // @ts-ignore
                 SYSTEM_PORT: number;
                /**
                 * The <code>registerObject</code> method is used to register an
                 * activation descriptor, <code>desc</code>, and obtain an
                 * activation identifier for a activatable remote object. The
                 * <code>ActivationSystem</code> creates an
                 * <code>ActivationID</code> (a activation identifier) for the
                 * object specified by the descriptor, <code>desc</code>, and
                 * records, in stable storage, the activation descriptor and its
                 * associated identifier for later use. When the <code>Activator</code>
                 * receives an <code>activate</code> request for a specific identifier, it
                 * looks up the activation descriptor (registered previously) for
                 * the specified identifier and uses that information to activate
                 * the object. <p>
                 */
                // @ts-ignore
                 registerObject(desc: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationID;
                /**
                 * Remove the activation id and associated descriptor previously
                 * registered with the <code>ActivationSystem</code>; the object
                 * can no longer be activated via the object's activation id.
                 */
                // @ts-ignore
                 unregisterObject(id: java.rmi.activation.ActivationID): void;
                /**
                 * Register the activation group. An activation group must be
                 * registered with the <code>ActivationSystem</code> before objects
                 * can be registered within that group.
                 */
                // @ts-ignore
                 registerGroup(desc: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupID;
                /**
                 * Callback to inform activation system that group is now
                 * active. This call is made internally by the
                 * <code>ActivationGroup.createGroup</code> method to inform
                 * the <code>ActivationSystem</code> that the group is now
                 * active.
                 */
                // @ts-ignore
                 activeGroup(id: java.rmi.activation.ActivationGroupID, group: java.rmi.activation.ActivationInstantiator, incarnation: number): java.rmi.activation.ActivationMonitor;
                /**
                 * Remove the activation group. An activation group makes this call back
                 * to inform the activator that the group should be removed (destroyed).
                 * If this call completes successfully, objects can no longer be
                 * registered or activated within the group. All information of the
                 * group and its associated objects is removed from the system.
                 */
                // @ts-ignore
                 unregisterGroup(id: java.rmi.activation.ActivationGroupID): void;
                /**
                 * Shutdown the activation system. Destroys all groups spawned by
                 * the activation daemon and exits the activation daemon.
                 */
                // @ts-ignore
                 shutdown(): void;
                /**
                 * Set the activation descriptor, <code>desc</code> for the object with
                 * the activation identifier, <code>id</code>. The change will take
                 * effect upon subsequent activation of the object.
                 */
                // @ts-ignore
                 setActivationDesc(id: java.rmi.activation.ActivationID, desc: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationDesc;
                /**
                 * Set the activation group descriptor, <code>desc</code> for the object
                 * with the activation group identifier, <code>id</code>. The change will
                 * take effect upon subsequent activation of the group.
                 */
                // @ts-ignore
                 setActivationGroupDesc(id: java.rmi.activation.ActivationGroupID, desc: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupDesc;
                /**
                 * Returns the activation descriptor, for the object with the activation
                 * identifier, <code>id</code>.
                 */
                // @ts-ignore
                 getActivationDesc(id: java.rmi.activation.ActivationID): java.rmi.activation.ActivationDesc;
                /**
                 * Returns the activation group descriptor, for the group
                 * with the activation group identifier, <code>id</code>.
                 */
                // @ts-ignore
                 getActivationGroupDesc(id: java.rmi.activation.ActivationGroupID): java.rmi.activation.ActivationGroupDesc;
            }
        }
    }
}
