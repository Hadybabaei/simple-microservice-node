import HttpExceptions from "../../utils/exceptions/http.exceptions";
import { NextFunction, Request, Response, Router } from "express";
import ProductService from "./product.service";
import validationMiddleware from "../../middleware/validation.middleware";
import productDto from "./product.dto";

class ProductController {
  public path = "/products";
  public router = Router();
  private _productService = new ProductService();
  constructor() {
    this.initializeRouter();
  }

  private initializeRouter = () => {
    this.router.post(
      `${this.path}`,
      validationMiddleware(productDto.create),
      this.createProduct
    );
    this.router.get(`${this.path}`, this.getAllProducts);
  };

  private createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const product = await this._productService.createProduct(req.body);
      if (typeof product === "string") {
        next(new HttpExceptions(400, product));
      } else {
        res.status(201).json({
          Message: `New Product:${req.body.product_title} inserted`,
          Success: true,
        });
      }
    } catch (error: any) {
      next(new HttpExceptions(500, "unable Create Product"));
    }
  };

  private getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const products = await this._productService.getAllProducts();
      if (products.length > 0) {
        res.status(200).json({ products, Success: true });
      } else {
        res
          .status(200)
          .json({ Message: "No Products Exists In Database", Success: true });
      }
    } catch (error: any) {
      next(new HttpExceptions(500, "Internal Server Error"));
    }
  };
}

export default ProductController;
