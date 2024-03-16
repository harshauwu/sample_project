import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';

import cors from 'cors';
import helmet from 'helmet';

import config from './configs/config';
import routes from './routes/api/routes';
import sequelize from './database/models';
import swaggerSpec from "./utils/swagger";
import i18n from './locales/index';


class App {
    public application: Application;

    constructor() {
        this.application = express();

        this.init();
        this.localize();
        this.middleware();

        // docs swagger disable for production mode
        if (config.app !== 'prod') {
            this.swaggerDocs()
        }

        this.routes();
        this.initializeTables();
    }

    private init(): void {
        //const allowedOrigins = config.origin;
        const allowedOrigins = config.origin_list;
        console.log('allowedOrigins: ', allowedOrigins); 
        const options: cors.CorsOptions = {
            // origin: allowedOrigins,
            origin: function (origin, callback) {
                if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                  // Allow requests with no 'Origin' (like mobile apps or curl requests)
                  // or from the listed domains
                  callback(null, true);
                } else {
                  // Block the request if not from allowed origins
                  callback(new Error('Not allowed by CORS'));
                }
            },
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
        };

        if (config.app !== 'qa') {
            // Sets "X-Frame-Options: SAMEORIGIN"
            this.application.use(
                helmet.frameguard({
                    action: 'sameorigin',
                })
            );
        }
        // use cors middleware
        this.application.use(cors(options));

    }

    // Sync sequelize models with database
    private initializeTables(): void {
        try {
            // DATABASE
            sequelize.sync({ force: false });
        } catch (err: any) {
            console.log('dbInit error', err)
        }
    }

    // Setup Docs Swagger
    private swaggerDocs(): void {
        this.application.use('/assignment-service/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec,
            {
                customSiteTitle: 'Assignment API Documentation',
                customCss: '.topbar { display: none }',
                swaggerOptions: {
                    persistAuthorization: true
                }
            }
        ));
    }

    // Configure Express middleware.
    private middleware(): void {
        this.application.use(express.json());
    }

    private routes(): void {
        this.application.use('/user-service/v1', routes);
    }

    private localize() : void {
        this.application.use(i18n.init);
    }

}

export default new App().application;