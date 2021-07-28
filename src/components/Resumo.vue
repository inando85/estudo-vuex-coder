<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span
        >Total: <strong>{{ valorTotal | dinheiro }}</strong></span
      >
      <hr />
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('carrinho', ['valorTotal'])
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
