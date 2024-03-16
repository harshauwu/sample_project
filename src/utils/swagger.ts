import swaggerJsdoc from "swagger-jsdoc";
import config  from '../configs/config';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
        title: "Assignment Microservice",
        version: '1.0.0',
        description:
    'This is documentation for the Assignment API.<br><br> For every request you must include in the header: <br> <b>Content-Type: application/json</b> <br> <b>Authorization: Bearer <TOKEN></b> (Only for protected routes by authorization we use JWT.)<br>',
        termsOfService: 'http://swagger.io/terms/',
        contact: {
            email: 'harshauwu@gmail.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
        },
        basePath: '/',
        schemes: ['http'],
        tags: [
            {
                name: 'assignment-service',
                description: 'Assignment Service'
            }
        ],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: 'JWT Authentication Token'
            }
        },
        security: [{ JWT: [] }],
        defaultSecurity: 'basicAuth'
    },
    servers: [
        {
            url: `http://localhost:${config.port}/assignment-service/v1`,
            description: 'Local development environment'
        }
    ],
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  //apis: ["./src/routes.ts", "./src/schema/*.ts"],
  apis: ['./src/swagger/*.ts', './src/routes/api/v1/*.routes.ts']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;