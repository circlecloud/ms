// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface ContainerPeer {
                /**
                 * Returns the insets of this container. Insets usually is the space that
                 * is occupied by things like borders.
                 */
                // @ts-ignore
                 getInsets(): java.awt.Insets;
                /**
                 * Notifies the peer that validation of the component tree is about to
                 * begin.
                 */
                // @ts-ignore
                 beginValidate(): void;
                /**
                 * Notifies the peer that validation of the component tree is finished.
                 */
                // @ts-ignore
                 endValidate(): void;
                /**
                 * Notifies the peer that layout is about to begin. This is called
                 * before the container itself and its children are laid out.
                 */
                // @ts-ignore
                 beginLayout(): void;
                /**
                 * Notifies the peer that layout is finished. This is called after the
                 * container and its children have been laid out.
                 */
                // @ts-ignore
                 endLayout(): void;
            }
        }
    }
}
