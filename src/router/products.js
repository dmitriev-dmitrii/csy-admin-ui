
import ProductsList from "@/views/Products/List.vue";
import ProductsCreate from "@/views/Products/Create.vue";
import ProductsEdit from "@/views/Products/Edit.vue";

export default [
{path: "/products",
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