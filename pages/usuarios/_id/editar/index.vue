vue<template>
  <div class="container">
    <h1>Editar Usuário</h1>
    <hr>
    <div v-if="!user" class="text-center">
      <b-spinner />
    </div>
    <b-form v-else @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required />
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Idade:"
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          type="number"
          required />
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="formLoader" style="width: 250px;">
        <b-spinner v-if="formLoader" small />
        <span v-else>Atualizar</span>
      </b-button>
    </b-form>
  </div>
</template>

<script>
import lambda from './../../../../plugins/lambda.js';
export default {
  data: () => ({
    user: null,
    formLoader: false,
    form: { id: null, name: '', age: '' },
  }),

  created() {
    this.getUserById()
  },

  methods: {
    async getUserById() {
      this.user = await lambda.getById(this.$route.params.id)
      this.resetForm();
    },

    resetForm() {
      this.form = Object.assign({}, this.user);
    },

    async onSubmit() {
      this.formLoader = true;
      const resp = await lambda.createOrUpdate(this.form);
      this.formLoader = false;
      if (resp) {
        await this.getUserById()
        alert(`Dados atualizados para o usuário: ${this.user.name}`)
      }
    }
  }
}
</script>
