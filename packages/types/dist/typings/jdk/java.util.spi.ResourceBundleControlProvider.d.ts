// @ts-nocheck
declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            interface ResourceBundleControlProvider {
                /**
                 * Returns a {@code ResourceBundle.Control} instance that is used
                 * to handle resource bundle loading for the given {@code
                 * baseName}. This method must return {@code null} if the given
                 * {@code baseName} isn't handled by this provider.
                 */
                // @ts-ignore
                 getControl(baseName: string): java.util.ResourceBundle.Control;
            }
        }
    }
}
