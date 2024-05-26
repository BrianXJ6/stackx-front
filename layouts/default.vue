<template>
  <div class="d-flex flex-column h-100">
    <header>
      <b-navbar toggleable="md" type="dark" variant="dark">
        <div class="container">
          <b-navbar-brand to="/">
            {{ company }}
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/pedidos/novo">
                Novo pedido
              </b-nav-item>
              <b-nav-item-dropdown text="Tipos de produto" right>
                <b-dropdown-item to="/tipos/listagem">
                  Listar
                </b-dropdown-item>
                <b-dropdown-item to="/tipos/novo">
                  Criar
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="Produtos" right>
                <b-dropdown-item to="/produtos/listagem">
                  Listar
                </b-dropdown-item>
                <b-dropdown-item to="/produtos/novo">
                  Criar
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </header>
    <main class="flex-shrink-0 py-5">
      <nuxt class="container" />
    </main>
    <footer class="mt-auto py-3 small bg-dark text-secondary">
      <div class="container">
        <p class="m-0">
          {{ company }} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    company: 'StackX'
  }),

  mounted() {
    const nuxtDiv = document.getElementById('__nuxt');
    const layoutDiv = document.getElementById('__layout');

    if (nuxtDiv) {
      nuxtDiv.classList.add('h-100');
    }

    if (layoutDiv) {
      layoutDiv.classList.add('h-100');
    }
  }
})
</script>
