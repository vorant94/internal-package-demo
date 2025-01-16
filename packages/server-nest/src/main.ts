import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// @ts-ignore see https://github.com/axe-me/vite-plugin-node/issues/88
if (import.meta.env.PROD) {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
  }
  void bootstrap();
}

export const viteNodeApp = NestFactory.create(AppModule);