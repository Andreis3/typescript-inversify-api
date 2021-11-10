import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import MyContainer from './inversify.config';

const container = new MyContainer();
const server = new InversifyExpressServer(container.getContainer());

server.setConfig(app => {
    app.use(
        bodyParser.urlencoded({
            extended: true,
        }),
    );
    app.use(bodyParser.json());
});

export default server.build();
