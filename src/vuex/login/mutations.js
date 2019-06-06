
import { ADD_BOOK,DELETE_BOOK } from './mutations_type.js'

export default {//这里要注意不要在mutations里面进行异步操作
   [ADD_BOOK](state,book){
       state.bookList.push(book);
   },
   [DELETE_BOOK](state,id){
   	console.log(state,id)
   	state.bookList.map((v,i)=> {
   		if(v.id == id){
   			state.bookList.splice(i,1)
   		}
   	})
   }
}