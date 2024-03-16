import dotenv from 'dotenv';

dotenv.config();

class Config {
    public app: string = process.env.APP || 'dev';
    public port: string = process.env.PORT || '4006';
    public logPath: string = process.env.LOG_PATH || './logs';
    public logDriver: string = process.env.LOG_DRIVER || 'console';

    // DB configs
    public dbName: string = process.env.DB_NAME || 'assignment';
    public dbDialect: string = process.env.DB_DIALECT || 'mysql';
    public dbHost: string = process.env.DB_HOST || '127.0.0.1';
    public dbPort: string = process.env.DB_PORT || '3306';
    public dbUser: string = process.env.DB_USER || 'assignment_user';
    public dbPassword: string = process.env.DB_PASSWORD || 'root';

    public pool = {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    };

    // Rate limit
    public rateLimitConfig = {
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 5, // limit each IP to 5 requests per windowMs
    }

    // JWT configs
    public jwtExpiration:string = process.env.JWT_EXPIRATION || '2 days';
    public jwtEncryption:string = process.env.JWT_ENCRYPTION || 'xxx';
    public jwtAlgorithm: string = process.env.JWT_ALGORITHM || 'HS256';
    public jwtSecret: string = process.env.JWT_KEY_ID || 'xxxx';

    public aws_access_key_id = process.env.AWS_ACCESS_KEY_ID || '';
    public aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY || '';
    public aws_region =  process.env.AWS_REGION || 'us-west-2';

    public noreply_email = process.env.NO_REPLY_EMAIL || 'noreply@assignment.com';
    

    public origin = process.env.ORIGIN || 'https://dev.assignment.com';
    
    public support_email = process.env.SUPPORT_EMAIL || '';
    public origin_list = process.env.ORIGIN_LIST || [ "https://domain1.com","https://domain2.com"];
}

export default new Config();