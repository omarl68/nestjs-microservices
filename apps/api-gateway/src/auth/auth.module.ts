import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { KeycloakAuthGuard } from './guards/keycloak-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakStrategy } from './keycloak/keycloak-connect.strategy';

@Module({
  imports: [PassportModule],
  providers: [KeycloakStrategy,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: KeycloakAuthGuard, // Default guard for authentication
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Guard for role-based access control
    },
  ],
  exports: [AuthService,KeycloakStrategy],
})
export class AuthModule {}
