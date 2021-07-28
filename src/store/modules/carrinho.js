export default {
  namespaced: true,
  state: {
    produtos: []
  },
  getters: {
    valorTotal(state) {
      return state.produtos.map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0)
    },
    produtosTotal(state) {
      return state.produtos
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    }
  },
  actions: {
    adicionarProduto({ commit}, payload) {
      commit('adicionarProduto', payload)
    }
  }
}