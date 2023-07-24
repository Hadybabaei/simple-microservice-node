import appDataSource from "../../utils/database/datasource";
import Products from "./product.entity";
import ProductsInterface from "./product.interface";

class ProductService {
  private productRepository = appDataSource.getRepository(Products);

  public createProduct = async (
    data: ProductsInterface
  ): Promise<ProductsInterface | Error> => {
    try {
      const product = await this.productRepository.findOneBy({
        product_title: data.product_title,
      });
      if (product) {
        throw new Error("Product Already Exists");
      }
      return await this.productRepository.save({ ...data });
    } catch (error: any) {
      console.log(error);
      // Handle the error appropriately
      return error.message;
    }
  };

  public getAllProducts = async (): Promise<Products[]> => {
    try {
      const products = await this.productRepository.find();
      return products;
    } catch {
      throw new Error("Internal Server Error");
    }
  };
}

export default ProductService;
