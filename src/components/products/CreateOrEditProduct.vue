
  <template>

    <v-form
        class="my-4"
        :disabled="loading"
        @submit.prevent="submitHandle"
        @reset="resetHandle"
        validate-on="blur"
        ref="form"
        v-model="isValid"
        lazy-validation
    >

      <v-text-field
          class="mb-2"
          v-model="product.name"
          :counter="10"
          :rules="nameRules"
          label="Название Товара"
          required
          :loading="loading"
          variant="outlined"

      />

      <v-select
          class="mb-2"
          :loading="loading"
          v-model="product.brand"
          :items="brandsList"
          :rules="[v => !!v || 'Item is required']"
          label="Бренд"
          required
      />

      {{product.brand}}

      <v-select
          class="mb-2"
          :loading="loading"
          v-model="product.categories"
          multiple
          :items="categoriesList"
          :rules="[v => !!v || 'Item is required']"
          label="Категории"
          required

      />
{{product.categories}}
      <div class="d-flex justify-end">
        <v-btn
            class="mr-4"
            type="reset"
            :loading="loading"
            :disabled="loading"
        >
          Сбросить
        </v-btn>

        <v-btn
            :loading="loading"
            color="primary"
            type="submit"
            :disabled="loading"
        >
          Сохранить
        </v-btn>
      </div>


    </v-form>
  </template>

<script>
import axios from "axios";
import _pick from 'lodash/pick'
export default {
  name: "CreateOrEditProduct",
  data: () => ({
    product:{
      id:'',
      name: '',
      categories:['as'],
      brand:1
    },
    isValid: true,
    loading:false,

    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],

   categoriesList: [
   'as'
    ],

    brandsList: [
   1
    ],
  }),

  methods: {

   async submitHandle() {
     try {
      this.loading=true
      this.$refs.form.validate()

      if (!this.isValid) {
        return
      }

      if (this.product.id) {
        this.$store.dispatch( 'products/updateProductById', this.product )
      }

      this.$store.dispatch( 'products/createProduct', this.product )

     }
     catch (err) {
       console.log(err)
     }
     finally {
       this.loading=false
     }
    },

    resetHandle () {
      this.$refs.form.reset()
    },

   async getProductData (id) {
     try{
       this.loading=true
      const res = await axios.get(`http://localhost:3000/api/catalog/products/${id}`)
      this.product =  _pick(res.data,Object.keys(this.product))
      this.product.id = res.data._id
     }
     catch (err) {
       this.$router.push({ name:'Error'} )
     }
     finally {
       this.loading=false
     }
    }

  },
  created() {
    if (this.$route.params.id){
      this.getProductData (this.$route.params.id)
    }
  }
}
</script>
<style scoped>

</style>