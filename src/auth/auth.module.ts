import { Module } from '@nestjs/common';
import { HeaderApiKeyStrategy } from './auth-header-api-key.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
    providers: [
        JwtStrategy,
        HeaderApiKeyStrategy,
    ]
})
export class AuthModule { }
