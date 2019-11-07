declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface RemoteCall {
                /**
                 * Return the output stream the stub/skeleton should put arguments/results
                 * into.
                 */
                // @ts-ignore
                 getOutputStream(): java.io.ObjectOutput;
                /**
                 * Release the output stream; in some transports this would release
                 * the stream.
                 */
                // @ts-ignore
                 releaseOutputStream(): void;
                /**
                 * Get the InputStream that the stub/skeleton should get
                 * results/arguments from.
                 */
                // @ts-ignore
                 getInputStream(): java.io.ObjectInput;
                /**
                 * Release the input stream. This would allow some transports to release
                 * the channel early.
                 */
                // @ts-ignore
                 releaseInputStream(): void;
                /**
                 * Returns an output stream (may put out header information
                 * relating to the success of the call). Should only succeed
                 * once per remote call.
                 */
                // @ts-ignore
                 getResultStream(success: boolean): java.io.ObjectOutput;
                /**
                 * Do whatever it takes to execute the call.
                 */
                // @ts-ignore
                 executeCall(): void;
                /**
                 * Allow cleanup after the remote call has completed.
                 */
                // @ts-ignore
                 done(): void;
            }
        }
    }
}
