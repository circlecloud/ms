// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
             class LockInfo extends java.lang.Object {
                /**
                 * Creates a new <code>LockInfo</code> instance.
                 */
                // @ts-ignore
                constructor(className: string, identityHashCode: number)
                /**
                 * Returns the name of the lock object's class in fully qualified form (i.e.
                 * including the package prefix).
                 */
                // @ts-ignore
                public getClassName(): string;
                /**
                 * Returns the value of the associated lock object's identity hash code
                 */
                // @ts-ignore
                public getIdentityHashCode(): number;
                /**
                 * Returns a {@code LockInfo} object represented by the given
                 * {@code CompositeData}. The given {@code CompositeData} must contain the
                 * following attributes: <blockquote>
                 * <table>
                 * <caption>The attributes and the types the given CompositeData contains</caption>
                 * <tr>
                 * <th style="float:left">Attribute Name</th>
                 * <th style="float:left">Type</th>
                 * </tr>
                 * <tr>
                 * <td>className</td>
                 * <td><code>java.lang.String</code></td>
                 * </tr>
                 * <tr>
                 * <td>identityHashCode</td>
                 * <td><code>java.lang.Integer</code></td>
                 * </tr>
                 * </table>
                 * </blockquote>
                 */
                // @ts-ignore
                public static from(compositeData: any /*javax.management.openmbean.CompositeData*/): java.lang.management.LockInfo;
                /**
                 * Provides callers with a string value that represents the associated lock.
                 * The string will hold both the name of the lock object's class and it's
                 * identity hash code expressed as an unsigned hexadecimal. i.e.<br>
                 * <p>
                 * {@link #getClassName()} &nbsp;+&nbsp;&#64;&nbsp;+&nbsp;Integer.toHexString({@link #getIdentityHashCode()})
                 * </p>
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
