class Klasa{
    constructor(fetchURL){
        
        this.fetchURL = 'http://dulian.cartodb.com/api/v2/sql/?q=SELECT%20*%20FROM%20mddk_info'
    }
    
    pobierz()
    {
        axios.get(this.fetchURL)
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    wywolaj(){
        
    }
}

var transport = new Klasa;

