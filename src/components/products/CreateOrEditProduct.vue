
  <template>

    <v-form
        :disabled="loading"
        @submit="submitHandle"
        @reset="resetHandle"
        validate-on="blur"
        ref="form"
        v-model="IsValid"
        lazy-validation
    >
      <v-text-field
          readonly
          v-if="product.id"
          class="mb-2"
          :value="product.id"
          label="ID товара"
      />

      <v-text-field
          class="mb-2"
          v-model="product.name"
          :counter="10"
          :rules="nameRules"
          label="Название Товара"
          required
      />

      <v-select
          v-model="product.brand"
          :items="brandsList"
          :rules="[v => !!v || 'Item is required']"
          label="Бренд"
          required
      />
      {{product.brand}}

      <v-select
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
            :disabled="loading"
        >
          Сбросить
        </v-btn>

        <v-btn
            color="primary"
            type="submit"
            :disabled="loading"
        >
          Отправить
        </v-btn>
      </div>


    </v-form>
  </template>

<script>
export default {
  name: "CreateOrEditProduct",
  data: () => ({
    product:{
      id:'',
      name: '',
      categories:[],
      brand:''
    },
    IsValid: true,
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
    submitHandle() {
      this.$refs.form.validate()
      if (!this.isValid) {
        return
      }

    },

    resetHandle () {
      this.$refs.form.reset()
    },


  },
}
</script>
<style scoped>

</style>