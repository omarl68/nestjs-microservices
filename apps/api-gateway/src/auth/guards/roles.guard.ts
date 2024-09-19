import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // No roles required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // JWT decoded user info

    if (!user || !user.realm_access || !user.realm_access.roles) {
      return false; // No roles found in the token
    }

    const userRoles = user.realm_access.roles;
    
    // Check if the user has any of the required roles
    return requiredRoles.some(role => userRoles.includes(role));
  }
}
