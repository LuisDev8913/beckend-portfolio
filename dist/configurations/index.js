"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: process.env.PORT,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT,
});
//# sourceMappingURL=index.js.map