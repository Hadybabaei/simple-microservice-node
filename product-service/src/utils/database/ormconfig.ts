import Products from "../../resources/products/product.entity"
import { DataSourceOptions } from "typeorm"

const ormconfigs : DataSourceOptions = 
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "root",
        "password": "1283901",
        "database": "product_service", 
        "synchronize": true,
        "logging": true,
        "entities": [Products],  
        "migrations": ["src/migrations/*.ts"],
        "subscribers": ["src/subscribers/*.ts"],
      }

export default ormconfigs 