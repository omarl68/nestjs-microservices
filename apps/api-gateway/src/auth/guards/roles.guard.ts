import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles || !Array.isArray(requiredRoles)) {
      return true; // No roles required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // JWT decoded user info

    if (!user) {
      return false; // No user information found
    }

    // Extract roles from both realm_access and resource_access
    const realmRoles = user.realm_access?.roles || [];
    const clientRoles = user.resource_access?.['confidential-client']?.roles || [];

    const userRoles = [...realmRoles, ...clientRoles];

    // Check if the user has any of the required roles
    return requiredRoles.some(role => userRoles.includes(role));
  }
}
