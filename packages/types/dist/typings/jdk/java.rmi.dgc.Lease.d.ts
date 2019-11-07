// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace dgc {
            // @ts-ignore
             class Lease extends java.lang.Object {
                /**
                 * Constructs a lease with a specific VMID and lease duration. The
                 * vmid may be null.
                 */
                // @ts-ignore
                constructor(id: java.rmi.dgc.VMID, duration: number)
                /**
                 * Returns the client VMID associated with the lease.
                 */
                // @ts-ignore
                public getVMID(): java.rmi.dgc.VMID;
                /**
                 * Returns the lease duration.
                 */
                // @ts-ignore
                public getValue(): number;
            }
        }
    }
}
