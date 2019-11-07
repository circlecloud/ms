// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class EventSetDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Creates an <TT>EventSetDescriptor</TT> assuming that you are
             * following the most simple standard design pattern where a named
             * event &quot;fred&quot; is (1) delivered as a call on the single method of
             * interface FredListener, (2) has a single argument of type FredEvent,
             * and (3) where the FredListener may be registered with a call on an
             * addFredListener method of the source component and removed with a
             * call on a removeFredListener method.
             */
            // @ts-ignore
            constructor(sourceClass: java.lang.Class, eventSetName: string, listenerType: java.lang.Class, listenerMethodName: string)
            /**
             * Creates an <TT>EventSetDescriptor</TT> from scratch using
             * string names.
             */
            // @ts-ignore
            constructor(sourceClass: java.lang.Class, eventSetName: string, listenerType: java.lang.Class, listenerMethodNames: string, addListenerMethodName: string, removeListenerMethodName: string)
            /**
             * This constructor creates an EventSetDescriptor from scratch using
             * string names.
             */
            // @ts-ignore
            constructor(sourceClass: java.lang.Class, eventSetName: string, listenerType: java.lang.Class, listenerMethodNames: string, addListenerMethodName: string, removeListenerMethodName: string, getListenerMethodName: string)
            /**
             * Creates an <TT>EventSetDescriptor</TT> from scratch using
             * <TT>java.lang.reflect.Method</TT> and <TT>java.lang.Class</TT> objects.
             */
            // @ts-ignore
            constructor(eventSetName: string, listenerType: java.lang.Class, listenerMethods: java.lang.reflect.Method, addListenerMethod: java.lang.reflect.Method, removeListenerMethod: java.lang.reflect.Method)
            /**
             * This constructor creates an EventSetDescriptor from scratch using
             * java.lang.reflect.Method and java.lang.Class objects.
             */
            // @ts-ignore
            constructor(eventSetName: string, listenerType: java.lang.Class, listenerMethods: java.lang.reflect.Method, addListenerMethod: java.lang.reflect.Method, removeListenerMethod: java.lang.reflect.Method, getListenerMethod: java.lang.reflect.Method)
            /**
             * Creates an <TT>EventSetDescriptor</TT> from scratch using
             * <TT>java.lang.reflect.MethodDescriptor</TT> and <TT>java.lang.Class</TT>
             * objects.
             */
            // @ts-ignore
            constructor(eventSetName: string, listenerType: java.lang.Class, listenerMethodDescriptors: java.beans.MethodDescriptor, addListenerMethod: java.lang.reflect.Method, removeListenerMethod: java.lang.reflect.Method)
            /**
             * Gets the <TT>Class</TT> object for the target interface.
             */
            // @ts-ignore
            public getListenerType(): java.lang.Class;
            /**
             * Gets the methods of the target listener interface.
             */
            // @ts-ignore
            public getListenerMethods(): java.lang.reflect.Method[];
            /**
             * Gets the <code>MethodDescriptor</code>s of the target listener interface.
             */
            // @ts-ignore
            public getListenerMethodDescriptors(): java.beans.MethodDescriptor[];
            /**
             * Gets the method used to add event listeners.
             */
            // @ts-ignore
            public getAddListenerMethod(): java.lang.reflect.Method;
            /**
             * Gets the method used to remove event listeners.
             */
            // @ts-ignore
            public getRemoveListenerMethod(): java.lang.reflect.Method;
            /**
             * Gets the method used to access the registered event listeners.
             */
            // @ts-ignore
            public getGetListenerMethod(): java.lang.reflect.Method;
            /**
             * Mark an event set as unicast (or not).
             */
            // @ts-ignore
            public setUnicast(unicast: boolean): void;
            /**
             * Normally event sources are multicast.  However there are some
             * exceptions that are strictly unicast.
             */
            // @ts-ignore
            public isUnicast(): boolean;
            /**
             * Marks an event set as being in the &quot;default&quot; set (or not).
             * By default this is <TT>true</TT>.
             */
            // @ts-ignore
            public setInDefaultEventSet(inDefaultEventSet: boolean): void;
            /**
             * Reports if an event set is in the &quot;default&quot; set.
             */
            // @ts-ignore
            public isInDefaultEventSet(): boolean;
        }
    }
}
