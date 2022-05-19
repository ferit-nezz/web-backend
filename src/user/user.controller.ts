import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}
  @Get(":id")
  getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }
}
