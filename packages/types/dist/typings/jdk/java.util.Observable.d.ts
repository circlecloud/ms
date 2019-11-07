declare namespace java {
    namespace util {
        // @ts-ignore
         class Observable extends java.lang.Object {
            /**
             * Construct an Observable with zero Observers.
             */
            // @ts-ignore
            constructor()
            /**
             * Adds an observer to the set of observers for this object, provided
             * that it is not the same as some observer already in the set.
             * The order in which notifications will be delivered to multiple
             * observers is not specified. See the class comment.
             */
            // @ts-ignore
            public addObserver(o: java.util.Observer): void;
            /**
             * Deletes an observer from the set of observers of this object.
             * Passing <CODE>null</CODE> to this method will have no effect.
             */
            // @ts-ignore
            public deleteObserver(o: java.util.Observer): void;
            /**
             * If this object has changed, as indicated by the
             * <code>hasChanged</code> method, then notify all of its observers
             * and then call the <code>clearChanged</code> method to
             * indicate that this object has no longer changed.
             * <p>
             * Each observer has its <code>update</code> method called with two
             * arguments: this observable object and <code>null</code>. In other
             * words, this method is equivalent to:
             * <blockquote><tt>
             * notifyObservers(null)</tt></blockquote>
             */
            // @ts-ignore
            public notifyObservers(): void;
            /**
             * If this object has changed, as indicated by the
             * <code>hasChanged</code> method, then notify all of its observers
             * and then call the <code>clearChanged</code> method to indicate
             * that this object has no longer changed.
             * <p>
             * Each observer has its <code>update</code> method called with two
             * arguments: this observable object and the <code>arg</code> argument.
             */
            // @ts-ignore
            public notifyObservers(arg: java.lang.Object): void;
            /**
             * Clears the observer list so that this object no longer has any observers.
             */
            // @ts-ignore
            public deleteObservers(): void;
            /**
             * Marks this <tt>Observable</tt> object as having been changed; the
             * <tt>hasChanged</tt> method will now return <tt>true</tt>.
             */
            // @ts-ignore
            protected setChanged(): void;
            /**
             * Indicates that this object has no longer changed, or that it has
             * already notified all of its observers of its most recent change,
             * so that the <tt>hasChanged</tt> method will now return <tt>false</tt>.
             * This method is called automatically by the
             * <code>notifyObservers</code> methods.
             */
            // @ts-ignore
            protected clearChanged(): void;
            /**
             * Tests if this object has changed.
             */
            // @ts-ignore
            public hasChanged(): boolean;
            /**
             * Returns the number of observers of this <tt>Observable</tt> object.
             */
            // @ts-ignore
            public countObservers(): number;
        }
    }
}
