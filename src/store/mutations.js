import {RECEIVE_GEOHASH,RECEIVE_SHOPS,RECEIVE_CATEGORYS} from './mutations_types'
let mutations = {
    [RECEIVE_GEOHASH](state,{geohash}){
        state.geohash = geohash
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    }
}

export default mutations;