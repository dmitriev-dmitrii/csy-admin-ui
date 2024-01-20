
import ProductsList from "../views/products/ProductList.vue";
import ProductsCreate from "../views/products/CreateProduct.vue";
import ProductsEdit from "../views/products/EditProduct.vue";

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
