import axios from 'axios'

export default function ({store}){
    return store.commit('add', '74');
}