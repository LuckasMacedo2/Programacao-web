function myApp (){
    if (!myApp.instance){
        myApp.instance = this;
    }
    return myApp.instance;
}