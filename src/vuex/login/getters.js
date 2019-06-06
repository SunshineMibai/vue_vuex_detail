export default {
    newbookList:function(state){
        return JSON.parse(JSON.stringify(state.bookList)).splice(0,1);
    }
} 