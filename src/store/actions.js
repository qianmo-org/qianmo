import {RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_GEOHASH} from './mutations_types'
import {reqGeohash,reqCategorys,reqShops} from '../api/index'
let actions = {
    async getGeohash({commit,state}){
        const geohash = state.latitude+","+state.longitude;
        const req = await reqGeohash(geohash);
        if (req.code===0) {
         commit(RECEIVE_GEOHASH,{geohash:req.data})
        }
    },
    getCategorys({commit}){
        reqCategorys().then((req)=>{
            commit(RECEIVE_CATEGORYS,{categorys:req.data})
        }).catch(err=>err)
    },
    async getShops({commit,state}){
        const {latitude,longitude} = state;
        const req = await reqShops(latitude,longitude)
        if (req.code===0) {
            commit(RECEIVE_SHOPS,{shops:req.data})
        }
    }
}
export default actions;