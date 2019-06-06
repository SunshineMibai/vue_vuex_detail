export default {//在action中可以进行异步操作。
   add_book({commit},book){
      commit('ADD_BOOK',book);
   },
   delete_book({commit},book){
     commit('DELETE_BOOK',book);
   }
}