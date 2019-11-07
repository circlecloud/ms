// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
            interface Activator {
                /**
                 * Activate the object associated with the activation identifier,
                 * <code>id</code>. If the activator knows the object to be active
                 * already, and <code>force</code> is false , the stub with a
                 * "live" reference is returned immediately to the caller;
                 * otherwise, if the activator does not know that corresponding
                 * the remote object is active, the activator uses the activation
                 * descriptor information (previously registered) to determine the
                 * group (VM) in which the object should be activated. If an
                 * <code>ActivationInstantiator</code> corresponding to the
                 * object's group descriptor already exists, the activator invokes
                 * the activation group's <code>newInstance</code> method passing
                 * it the object's id and descriptor. <p>
                 * If the activation group for the object's group descriptor does
                 * not yet exist, the activator starts an
                 * <code>ActivationInstantiator</code> executing (by spawning a
                 * child process, for example). When the activator receives the
                 * activation group's call back (via the
                 * <code>ActivationSystem</code>'s <code>activeGroup</code>
                 * method) specifying the activation group's reference, the
                 * activator can then invoke that activation instantiator's
                 * <code>newInstance</code> method to forward each pending
                 * activation request to the activation group and return the
                 * result (a marshalled remote object reference, a stub) to the
                 * caller.<p>
                 * Note that the activator receives a "marshalled" object instead of a
                 * Remote object so that the activator does not need to load the
                 * code for that object, or participate in distributed garbage
                 * collection for that object. If the activator kept a strong
                 * reference to the remote object, the activator would then
                 * prevent the object from being garbage collected under the
                 * normal distributed garbage collection mechanism. <p>
                 */
                // @ts-ignore
                 activate(id: java.rmi.activation.ActivationID, force: boolean): java.rmi.MarshalledObject;
            }
        }
    }
}
