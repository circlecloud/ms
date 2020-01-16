import * as path from 'path'
import { Db, MongoClient } from 'mongodb'
import { DBClient } from '@cc-server/db'
import { interfaces } from '@cc-server/ioc'
import { CcServerBoot } from '@cc-server/core'
import { MongoCollection, TYPE } from '@cc-server/db-mongo';

async function main() {
    let server = new CcServerBoot();
    let collectionCache = {};
    server.container.bind(DBClient).toDynamicValue((context: interfaces.Context) => {
        let name = context.currentRequest.target.getNamedTag().value;
        if (!name) { return null }
        if (!collectionCache[name]) { collectionCache[name] = new MongoCollection(context.container.get<Db>(TYPE.DB).collection(name)) }
        return collectionCache[name];
    })
    let client = await MongoClient.connect("mongodb://192.168.2.5:27017", { useNewUrlParser: true, connectTimeoutMS: 10000 })
    server.container.bind("MONGO_DB").toConstantValue(client.db("mspc"));
    server.scan(path.join(__dirname, "controller")).start()
}

main()
