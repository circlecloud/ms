// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            namespace peer {
                // @ts-ignore
                interface DropTargetContextPeer {
                    /**
                     * update the peer's notion of the Target's actions
                     */
                    // @ts-ignore
                     setTargetActions(actions: number): void;
                    /**
                     * get the current Target actions
                     */
                    // @ts-ignore
                     getTargetActions(): number;
                    /**
                     * get the DropTarget associated with this peer
                     */
                    // @ts-ignore
                     getDropTarget(): java.awt.dnd.DropTarget;
                    /**
                     * get the (remote) DataFlavors from the peer
                     */
                    // @ts-ignore
                     getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
                    /**
                     * get an input stream to the remote data
                     */
                    // @ts-ignore
                     getTransferable(): java.awt.datatransfer.Transferable;
                    // @ts-ignore
                     isTransferableJVMLocal(): boolean;
                    /**
                     * accept the Drag
                     */
                    // @ts-ignore
                     acceptDrag(dragAction: number): void;
                    /**
                     * reject the Drag
                     */
                    // @ts-ignore
                     rejectDrag(): void;
                    /**
                     * accept the Drop
                     */
                    // @ts-ignore
                     acceptDrop(dropAction: number): void;
                    /**
                     * reject the Drop
                     */
                    // @ts-ignore
                     rejectDrop(): void;
                    /**
                     * signal complete
                     */
                    // @ts-ignore
                     dropComplete(success: boolean): void;
                }
            }
        }
    }
}
