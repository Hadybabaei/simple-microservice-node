import appDataSource from "../../utils/database/datasource";
import Products from "./product.entity";
import ProductsInterface from "./product.interface";

class ProductService {
  public createProduct = async (
    data: ProductsInterface
  ): Promise<ProductsInterface | void> => {
    try {
      const productRepository = appDataSource.getRepository(Products);
      const product = await productRepository.findOneBy({
        product_title: data.product_title,
      });
      if (product) {
        throw new Error("Product Already Exists");
      }
      return await productRepository.save({ ...data });
    } catch (error: any) {
      console.log(error);
      // Handle the error appropriately
      return error.message;
    }
  };
}

export default ProductService;
