// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class FeatureDescriptor extends java.lang.Object {
            /**
             * Constructs a <code>FeatureDescriptor</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the programmatic name of this feature.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Sets the programmatic name of this feature.
             */
            // @ts-ignore
            public setName(name: string): void;
            /**
             * Gets the localized display name of this feature.
             */
            // @ts-ignore
            public getDisplayName(): string;
            /**
             * Sets the localized display name of this feature.
             */
            // @ts-ignore
            public setDisplayName(displayName: string): void;
            /**
             * The "expert" flag is used to distinguish between those features that are
             * intended for expert users from those that are intended for normal users.
             */
            // @ts-ignore
            public isExpert(): boolean;
            /**
             * The "expert" flag is used to distinguish between features that are
             * intended for expert users from those that are intended for normal users.
             */
            // @ts-ignore
            public setExpert(expert: boolean): void;
            /**
             * The "hidden" flag is used to identify features that are intended only
             * for tool use, and which should not be exposed to humans.
             */
            // @ts-ignore
            public isHidden(): boolean;
            /**
             * The "hidden" flag is used to identify features that are intended only
             * for tool use, and which should not be exposed to humans.
             */
            // @ts-ignore
            public setHidden(hidden: boolean): void;
            /**
             * The "preferred" flag is used to identify features that are particularly
             * important for presenting to humans.
             */
            // @ts-ignore
            public isPreferred(): boolean;
            /**
             * The "preferred" flag is used to identify features that are particularly
             * important for presenting to humans.
             */
            // @ts-ignore
            public setPreferred(preferred: boolean): void;
            /**
             * Gets the short description of this feature.
             */
            // @ts-ignore
            public getShortDescription(): string;
            /**
             * You can associate a short descriptive string with a feature.  Normally
             * these descriptive strings should be less than about 40 characters.
             */
            // @ts-ignore
            public setShortDescription(text: string): void;
            /**
             * Associate a named attribute with this feature.
             */
            // @ts-ignore
            public setValue(attributeName: string, value: java.lang.Object): void;
            /**
             * Retrieve a named attribute with this feature.
             */
            // @ts-ignore
            public getValue(attributeName: string): java.lang.Object;
            /**
             * Gets an enumeration of the locale-independent names of this
             * feature.
             */
            // @ts-ignore
            public attributeNames(): java.util.Enumeration;
            /**
             * Returns a string representation of the object.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
