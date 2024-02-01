import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController, UsersRepository],
    exports: [UsersService]
})