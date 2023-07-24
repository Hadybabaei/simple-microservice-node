import Joi from "joi";

const create = Joi.object({
    product_title:Joi.string().required(),
    description:Joi.string().required(),
})

const update = Joi.object({
    product_title:Joi.string(),
    description:Joi.string(),
})

export default { create, update };