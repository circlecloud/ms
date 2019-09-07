declare global {
    namespace Java {
        function type(clazz: string): any;
        function from(javaObj: any): any[];
        function to(array: any[]): any;
    }
}

export { };
