## Create project ##
> nest new jwt-service

## Install package ##
> ติดตั้ง mongodb connector
> npm i @nestjs/mongoose mongoose

## ติดตั้ง JWT ==> passport ##
> npm install --save @nestjs/passport passport passport-local
> npm install --save-dev @types/passport-local

> npm install --save @nestjs/jwt passport-jwt
> npm install --save-dev @types/passport-jwt

สร้าง auth กับ users
> ***nest generate resource ... ***

auth ==> import UsersModule เพื่อเชื่อมโยงข้อมูล

users ==> สร้างรายชื่อช่วยคราว สำหรับทดสอบ

auth ==> สร้าง service auth เพื่อ validateuser

implement passport-local
> สร้าง file auth/local.strategy.ts เพื่อทำ passportStrategy

auth/auth.module.ts
> import { PassportModule } from '@nestjs/passport';
> import { LocalStrategy } from './local.strategy';
> 
> @Module({
>   imports: [UsersModule, PassportModule],
>   providers: [AuthService, LocalStrategy],
> })

