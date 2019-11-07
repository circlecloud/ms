// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface Observer {
            /**
             * This method is called whenever the observed object is changed. An
             * application calls an <tt>Observable</tt> object's
             * <code>notifyObservers</code> method to have all the object's
             * observers notified of the change.
             */
            // @ts-ignore
             update(o: java.util.Observable, arg: java.lang.Object): void;
        }
    }
}
