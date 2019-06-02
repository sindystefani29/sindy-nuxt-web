export const state = () => ({
    coba: ''
})
  
export const mutations = {
    add (state, payload) {
        state.coba = payload;
    }
}