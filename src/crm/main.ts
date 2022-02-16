import { NestFactory } from "@nestjs/core";
import { CrmModule } from "./crm.module";

export async function bootstrap () {
    const port = process.env.CRM_PORT || 3001;

    const app = await NestFactory.create(CrmModule);
    await app.listen(port, () => {
        console.log(`CRM Server started on http://localhost:${port}`);
    });
}