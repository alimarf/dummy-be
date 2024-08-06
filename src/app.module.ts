import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
