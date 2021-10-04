import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const routePermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    const userPermissions = context.getArgs()[0].user.permissions;

    if (!routePermissions) {
      return true;
    }
    //this isn't in their documentation, but if there are routePermissions and there are no userPermissions, access should be denied.
    if(!userPermissions){
      return false;
    }

    const hasPermission = () =>
      routePermissions.every(routePermission =>
        userPermissions.includes(routePermission),
      );

    return hasPermission();
  }
}