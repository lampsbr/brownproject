import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthzUser } from 'src/general/auth.user.type';

export const TokenUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const usr = new AuthzUser();
    usr.email = request.user['http://brownproject.com/email'];
    usr.id = request.user.sub;
    usr.permissions = request.user.permissions;
    return usr;
  },
);