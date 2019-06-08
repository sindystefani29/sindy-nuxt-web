export const state = () => ({
    id_country: ''
})
  
export const mutations = {
    add (state, payload) {
        state.id_country = payload;
    }
}