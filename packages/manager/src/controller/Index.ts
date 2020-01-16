import { DBClient } from '@cc-server/db'
import { lazyInjectNamed } from '@cc-server/ioc'
import { controller, get, post, requestParam, requestBody, Vaild, NotBlank } from '@cc-server/binding'

class Plugins {
    @NotBlank()
    name?: string;
    author?: string;
    version?: string;
    source?: string;
    type?: string;
    dist?: string;
}

type distType = 'npm' | 'git' | 'src'

@controller('/plugin')
class PluginController {
    @lazyInjectNamed(DBClient, Plugins.name.toLocaleLowerCase())
    private client: DBClient<Plugins>

    @get('/')
    index() {
        return this.client.find({});
    }

    @get('/:id')
    details(@requestParam("id") id: string) {
        return this.client.findOneById(id);
    }

    @post('/')
    add(@requestBody() @Vaild() model: Plugins) {
        return this.client.insertOne(model);
    }

}