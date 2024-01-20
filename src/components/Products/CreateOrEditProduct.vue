
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
      <v-text-field
          class="mb-2"
          label="Артикул Производителя"
          required
          :loading="loading"
          variant="outlined"
      />
      <v-text-field
          class="mb-2"
          v-model.number="product.price"
          :rules="priceRules"
          label="Цена"
          required
          :loading="loading"
          variant="outlined"
      />
     <span> {{product.price}} руб.</span>

      <v-text-field
          class="mb-2"
          v-model.number="product.count"
          label="Количеств "
          :loading="loading"
          variant="outlined"
      />
      <span> {{product.price}} шт.</span>
      <v-select
          class="mb-2"
          :loading="loading"
          :items="['поштучно','в коробке']"
          label="тип упаковки"
          required
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

      <div class="d-flex justify-end py-4">
        <v-switch label="Активный " v-model="product.isActive" hide-details/>
        <v-btn
            color="red"
            :loading="loading"
            :disabled="loading"
        >
          Удалить Товар
        </v-btn>
      </div>

      <div class="d-flex justify-end py-4">
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
      name: 'gg',
      categories:['as'],
      brand:1,
      isActive:true,
      price:10,
      count:0

    },
    isValid: true,
    loading:false,

    nameRules: [
      v => !!v || 'Поле обязательно',
      v => (v && v.length <= 3) || 'Минимум 3 символа',
    ],
    priceRules: [
      v => !!v || 'Поле обязательно',
      v => (Number.parseInt(v,10)) || 'Введите Число',
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
       console.log(this.product)
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
