"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const instance = express();
instance.use(cors());
instance.set('views', path.join(__dirname, 'views'));
instance.set('view engine', 'ejs');
const app = core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(instance));
app
    .then((nestInstance) => {
    nestInstance.use(cookieParser());
    nestInstance.useGlobalPipes(new common_1.ValidationPipe());
    nestInstance.enableCors({
        origin: '*'
    });
    nestInstance.listen(3000, () => {
        console.log('Application based on Express is listening on port 3000');
    });
})
    .catch((err) => {
    console.error('Application configured to listen on port 3000 failed to start', err);
});
//# sourceMappingURL=main.js.map