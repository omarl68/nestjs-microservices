import { Strategy } from 'passport-keycloak';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor() {
    super({
      clientID: 'confidential-client',
      bearerOnly: true,
      serverURL: 'http://localhost:8081/auth',
      realm: 'softy-rh',
      credentials: {
        secret:'HRDWz8XgFC5bxRFn8n3CHdjPZJDFpyoY',
      }
   
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Implement your user validation logic here
    return profile;
  }
}
