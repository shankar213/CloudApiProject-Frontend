export const environment = {
  production: true,
  api_host: 'cshanka1-eval-test.apigee.net/apiproject-products',
  api_host_port: 8081,
  products: {
    prefix: '/api/products',
    add_product: '/',
    get_products: '/',
    get_product_details: '/:product_id',
    edit_product: '/:product_id',
    delete_product: '/:product_id',
    add_product_image: '/:product_id/image'
  }
};
