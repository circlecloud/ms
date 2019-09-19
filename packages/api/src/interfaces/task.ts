export namespace task {
    export const Task = Symbol('Task')
    export interface Task {
        run(func: Function): void;
        async(func: Function): void;
        later(tick: number): task.Task;
        timer(tick: number): task.Task;
    }
}
