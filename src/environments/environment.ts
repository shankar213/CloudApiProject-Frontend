// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
