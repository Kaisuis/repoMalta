class Klasa{
    constructor(fetchURL){
        
        this.fetchURL = 'http://dulian.cartodb.com/api/v2/sql/?q=SELECT%20*%20FROM%20mddk_info'
    }
    
    pobierz()
    {
        axios.get(this.fetchURL)
            .then(function(response) {
                transport.wywal(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    wywal(response)
    {
        let lista = '<ul>';
        response.data.rows.forEach((element) => {
            lista += '<li>' + element + '</li>';
        });
            
        lista += '</ul>';
        $('#wyniki').append(lista);
        
    }
}

var transport = new Klasa;

