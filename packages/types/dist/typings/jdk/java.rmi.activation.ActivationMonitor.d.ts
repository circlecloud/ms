// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
            interface ActivationMonitor {
                /**
                 * An activation group calls its monitor's
                 * <code>inactiveObject</code> method when an object in its group
                 * becomes inactive (deactivates).  An activation group discovers
                 * that an object (that it participated in activating) in its VM
                 * is no longer active, via calls to the activation group's
                 * <code>inactiveObject</code> method. <p>
                 * The <code>inactiveObject</code> call informs the
                 * <code>ActivationMonitor</code> that the remote object reference
                 * it holds for the object with the activation identifier,
                 * <code>id</code>, is no longer valid. The monitor considers the
                 * reference associated with <code>id</code> as a stale reference.
                 * Since the reference is considered stale, a subsequent
                 * <code>activate</code> call for the same activation identifier
                 * results in re-activating the remote object.<p>
                 */
                // @ts-ignore
                 inactiveObject(id: java.rmi.activation.ActivationID): void;
                /**
                 * Informs that an object is now active. An <code>ActivationGroup</code>
                 * informs its monitor if an object in its group becomes active by
                 * other means than being activated directly (i.e., the object
                 * is registered and "activated" itself).
                 */
                // @ts-ignore
                 activeObject(id: java.rmi.activation.ActivationID, obj: java.rmi.MarshalledObject): void;
                /**
                 * Informs that the group is now inactive. The group will be
                 * recreated upon a subsequent request to activate an object
                 * within the group. A group becomes inactive when all objects
                 * in the group report that they are inactive.
                 */
                // @ts-ignore
                 inactiveGroup(id: java.rmi.activation.ActivationGroupID, incarnation: number): void;
            }
        }
    }
}
