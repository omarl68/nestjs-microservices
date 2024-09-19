import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('validate')
  @UseGuards(JwtAuthGuard)
  async validateToken(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token
    if (!token) {
      throw new Error('No token provided');
    }
    const tokenData = await this.authService.checkToken(token);
    return tokenData;
  }
}
