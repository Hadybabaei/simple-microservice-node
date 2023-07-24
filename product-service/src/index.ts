import App from "./app"; // Corrected import path to the local file 'app.ts'
import 'dotenv/config'
import validateEnv from "./utils/validateEnv";
import ProductController from "./resources/products/product.controller";


validateEnv()

const app = new App([new ProductController()],Number(process.env.PORT))

app.listen()