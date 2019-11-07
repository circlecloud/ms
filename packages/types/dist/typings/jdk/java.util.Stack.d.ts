// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Stack extends java.util.Vector {
            /**
             * Creates an empty Stack.
             */
            // @ts-ignore
            constructor()
            /**
             * Pushes an item onto the top of this stack. This has exactly
             * the same effect as:
             * <blockquote><pre>
             * addElement(item)</pre></blockquote>
             */
            // @ts-ignore
            public push(item: java.lang.Object): java.lang.Object;
            /**
             * Removes the object at the top of this stack and returns that
             * object as the value of this function.
             */
            // @ts-ignore
            public pop(): java.lang.Object;
            /**
             * Looks at the object at the top of this stack without removing it
             * from the stack.
             */
            // @ts-ignore
            public peek(): java.lang.Object;
            /**
             * Tests if this stack is empty.
             */
            // @ts-ignore
            public empty(): boolean;
            /**
             * Returns the 1-based position where an object is on this stack.
             * If the object <tt>o</tt> occurs as an item in this stack, this
             * method returns the distance from the top of the stack of the
             * occurrence nearest the top of the stack; the topmost item on the
             * stack is considered to be at distance <tt>1</tt>. The <tt>equals</tt>
             * method is used to compare <tt>o</tt> to the
             * items in this stack.
             */
            // @ts-ignore
            public search(o: java.lang.Object): number;
        }
    }
}
