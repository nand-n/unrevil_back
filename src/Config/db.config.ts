import { Module } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";




export const typeOrmConfig = (): TypeOrmModuleOptions => ({

    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../Entities/*.entity{.ts,.js}'],

    synchronize: true,
});