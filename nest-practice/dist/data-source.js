"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const path = require("path");
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config({ path: `.env.dev` });
exports.dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [
        path.join(__dirname, 'src/entities/**/*.entity.ts'),
        path.join(__dirname, 'dist/entities/**/*.entity.js'),
    ],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map