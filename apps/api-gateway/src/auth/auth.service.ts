import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private keycloakAuthUrl = 'http://localhost:8081/auth/realms/softy-rh/protocol/openid-connect/token/introspect';
  private clientId = 'confidential-client';
  private secret = 'HRDWz8XgFC5bxRFn8n3CHdjPZJDFpyoY';

  constructor(private readonly httpService: HttpService) {}

  async checkToken(token: string): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.post(this.keycloakAuthUrl, `token=${token}`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${this.clientId}:${this.secret}`).toString('base64')}`,
          },
        })
      );
      return response.data;
    } catch (error) {
      throw new Error('Token validation failed');
    }
  }
}
