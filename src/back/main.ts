import { NestFactory } from "@nestjs/core";
import { BackModule } from "./back.module";

export async function bootstrap () {
    const port = process.env.BACK_PORT || 3000;

    const app = await NestFactory.create(BackModule);
    await app.listen(port, () => {
        console.log(`MBI Back Server started on http://localhost:${port}`);
    });
}