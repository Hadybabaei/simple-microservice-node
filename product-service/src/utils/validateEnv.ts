import { cleanEnv,str,port } from "envalid";

function validateEnv():void{
    cleanEnv(process.env,{
        PORT:port({default:5001}),
        PG_URL:str(),
        JWT_SECRET:str(),
        DB_TYPE:str(),
    })
}

export default validateEnv;