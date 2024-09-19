import { Module } from '@nestjs/common';
import { KeycloakConnectModule, KeycloakConnectOptions } from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8081/auth',
      realm: 'softy-rh',
      clientId: 'confidential-client',
      secret: 'HRDWz8XgFC5bxRFn8n3CHdjPZJDFpyoY',
      policyEnforcer: {},
    } as KeycloakConnectOptions),
  ],
  exports: [KeycloakConnectModule],
})
export class KeycloakModule {}
