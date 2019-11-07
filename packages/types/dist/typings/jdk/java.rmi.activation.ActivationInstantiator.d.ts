// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
            interface ActivationInstantiator {
                /**
                 * The activator calls an instantiator's <code>newInstance</code>
                 * method in order to recreate in that group an object with the
                 * activation identifier, <code>id</code>, and descriptor,
                 * <code>desc</code>. The instantiator is responsible for: <ul>
                 * <li> determining the class for the object using the descriptor's
                 * <code>getClassName</code> method,
                 * <li> loading the class from the code location obtained from the
                 * descriptor (using the <code>getLocation</code> method),
                 * <li> creating an instance of the class by invoking the special
                 * "activation" constructor of the object's class that takes two
                 * arguments: the object's <code>ActivationID</code>, and the
                 * <code>MarshalledObject</code> containing object specific
                 * initialization data, and
                 * <li> returning a MarshalledObject containing the stub for the
                 * remote object it created </ul>
                 */
                // @ts-ignore
                 newInstance(id: java.rmi.activation.ActivationID, desc: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject;
            }
        }
    }
}
