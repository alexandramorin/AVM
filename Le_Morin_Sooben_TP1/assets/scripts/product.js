$.urlParam = function(id){
    var results = new RegExp('[\?&]' + id + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
function addtoCart(){

}