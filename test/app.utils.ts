import { ValidationPipe } from "@nestjs/common";
import { NestApplication } from "@nestjs/core";

/**
 * An utility to wrap some basic required
 * to have the same config for the server
 * than the production environment
 * @param app The NestApplication to setup
 */
export async function nestAppInit(app: NestApplication): Promise<void> {
  
    app.useGlobalPipes(new ValidationPipe({
        forbidUnknownValues: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    app.setGlobalPrefix('api');
    await app.init();
}