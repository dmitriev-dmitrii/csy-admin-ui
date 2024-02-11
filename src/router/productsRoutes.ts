
import ProductsList from "../pages/products/ProductList.vue";
import ProductsCreate from "../pages/products/CreateProduct.vue";
import ProductsEdit from "../pages/products/EditProduct.vue";

export default [
{
	path: "/products",
	name: "ProductsList",
	component: ProductsList,
}
,
{
	path: '/products/create',
		name:
	'ProductsCreate',
		component:
	ProductsCreate,
}
,
{
	path: '/products/:id',
		name:
	'ProductsEdit',
		component:
	ProductsEdit,
}
]
