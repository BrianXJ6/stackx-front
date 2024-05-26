vue<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <hr>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="ID:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          type="number"
          required />
      </b-form-group>
      <b-form-group label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="text"
          autofocus
          required />
      </b-form-group>
      <b-form-group
        label="Idade:"
        label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          type="number"
          required />
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="formLoader" style="width: 250px;">
        <b-spinner v-if="formLoader" small />
        <span v-else>Cadastrar</span>
      </b-button>
    </b-form>
  </div>
</template>

<script>
import lambda from './../../../plugins/lambda.js';
export default {
  data: () => ({
    formLoader: false,
    form: { id: '', name: '', age: '' },
  }),

  created() {
    this.onInit()
  },

  methods: {
    onlyResetId(id) {
      this.form.id = id;
    },

    resetForm() {
      this.form = { id: '', name: '', age: '' };
    },

    async onInit() {
      let lastId = 0;
      const list = await lambda.list();
      if (list.length) {
        lastId = list[0].id;
      }
      this.resetForm();
      this.onlyResetId(lastId + 1);
    },

    async onSubmit() {
      this.formLoader = true;
      const resp = await lambda.createOrUpdate(this.form);
      this.formLoader = false;
      const payload = Object.assign({}, this.form);
      if (resp) {
        this.resetForm();
        this.onlyResetId(payload.id + 1);
        alert(`Usuário: ${payload.name}, criado com sucesso!`);
      }
    }
  }
}
</script>
