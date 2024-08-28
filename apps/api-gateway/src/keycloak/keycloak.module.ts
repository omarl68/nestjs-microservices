import { Module, DynamicModule, Global } from '@nestjs/common';
import KeycloakConnect from 'keycloak-connect';

@Global()
@Module({})
export class KeycloakModule {
  static forRoot(config: KeycloakConnect.KeycloakConfig): DynamicModule {
    const keycloakProvider = {
      provide: 'KEYCLOAK_INSTANCE',
      useFactory: () => {
        return new KeycloakConnect({},config);
      },
    };

    return {
      module: KeycloakModule,
      providers: [keycloakProvider],
      exports: [keycloakProvider],
    };
  }
}
