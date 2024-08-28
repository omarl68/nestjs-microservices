import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KEYCLOAK_INSTANCE } from './constants';
import * as KeycloakConnect from 'keycloak-connect';

@Injectable()
export class KeycloakGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(KEYCLOAK_INSTANCE) private readonly keycloak: KeycloakConnect.Keycloak,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    return new Promise((resolve, reject) => {
      this.keycloak.protect()(request, response, (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}