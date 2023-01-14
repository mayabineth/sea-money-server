import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiRequestTimeoutResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiRequestTimeoutResponse()
  @ApiTooManyRequestsResponse()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  @ApiRequestTimeoutResponse()
  @ApiTooManyRequestsResponse()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiNotFoundResponse()
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  @ApiRequestTimeoutResponse()
  @ApiTooManyRequestsResponse()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
