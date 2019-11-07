declare namespace java {
    namespace rmi {
        namespace dgc {
            // @ts-ignore
            interface DGC {
                /**
                 * The dirty call requests leases for the remote object references
                 * associated with the object identifiers contained in the array
                 * 'ids'. The 'lease' contains a client's unique VM identifier (VMID)
                 * and a requested lease period. For each remote object exported
                 * in the local VM, the garbage collector maintains a reference
                 * list-a list of clients that hold references to it. If the lease
                 * is granted, the garbage collector adds the client's VMID to the
                 * reference list for each remote object indicated in 'ids'. The
                 * 'sequenceNum' parameter is a sequence number that is used to
                 * detect and discard late calls to the garbage collector. The
                 * sequence number should always increase for each subsequent call
                 * to the garbage collector.
                 * Some clients are unable to generate a VMID, since a VMID is a
                 * universally unique identifier that contains a host address
                 * which some clients are unable to obtain due to security
                 * restrictions. In this case, a client can use a VMID of null,
                 * and the distributed garbage collector will assign a VMID for
                 * the client.
                 * The dirty call returns a Lease object that contains the VMID
                 * used and the lease period granted for the remote references (a
                 * server may decide to grant a smaller lease period than the
                 * client requests). A client must use the VMID the garbage
                 * collector uses in order to make corresponding clean calls when
                 * the client drops remote object references.
                 * A client VM need only make one initial dirty call for each
                 * remote reference referenced in the VM (even if it has multiple
                 * references to the same remote object). The client must also
                 * make a dirty call to renew leases on remote references before
                 * such leases expire. When the client no longer has any
                 * references to a specific remote object, it must schedule a
                 * clean call for the object ID associated with the reference.
                 */
                // @ts-ignore
                 dirty(ids: java.rmi.server.ObjID, sequenceNum: number, lease: java.rmi.dgc.Lease): java.rmi.dgc.Lease;
                /**
                 * The clean call removes the 'vmid' from the reference list of
                 * each remote object indicated in 'id's.  The sequence number is
                 * used to detect late clean calls.  If the argument 'strong' is
                 * true, then the clean call is a result of a failed dirty call,
                 * thus the sequence number for the client 'vmid' needs to be
                 * remembered.
                 */
                // @ts-ignore
                 clean(ids: java.rmi.server.ObjID, sequenceNum: number, vmid: java.rmi.dgc.VMID, strong: boolean): void;
            }
        }
    }
}
