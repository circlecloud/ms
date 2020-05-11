global.setGlobal('process', {
    env: {
        __noSuchProperty__: (prop) => {
            return Packages.java.lang.System.getenv(prop)
        }
    },
    platform: Packages.java.lang.System.getProperty("os.name")
}, {})
