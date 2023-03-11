
import ProductsList from "@/views/Products/ProductList.vue";
import ProductsCreate from "@/views/Products/CreateProduct.vue";
import ProductsEdit from "@/views/Products/EditProduct.vue";

export default [
{path: "/Products",
	name: "ProductsList",
	component: ProductsList,
}
,
{
	path: '/Products/create',
		name:
	'ProductsCreate',
		component:
	ProductsCreate,
}
,
{
	path: '/Products/:id',
		name:
	'ProductsEdit',
		component:
	ProductsEdit,
}
]