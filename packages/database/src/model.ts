import { DataBase } from "./database"

export class Model<T> {
    constructor(private database: DataBase) {

    }
    queryForList(): Array<T> {
        
        return []
    }
}