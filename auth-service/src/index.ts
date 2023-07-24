import App from "./app"; // Corrected import path to the local file 'app.ts'
import 'dotenv/config'
import validateEnv from "./utils/validateEnv";
import UserController from "./resources/users/users.controller";

validateEnv()

const app = new App([new UserController()],Number(process.env.PORT))

app.listen()