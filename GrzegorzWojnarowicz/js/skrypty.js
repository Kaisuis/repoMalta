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
            lista += '<li>' + element.adres + '<br>' + element.autorka + '<br>' + element.ceny_biletow + '<br>' + element.dostepnosc + '<br>' + element.e_mail + '<br>' + element.flickr + '<br>' + element.gmina + '<br>' + element.godziny_otwarcia + '<br>' + element.gps + '<br>' + element.obiekt + '<br>' + element.opis + '</li>';
        });
            
        lista += '</ul>';
        $('#wyniki').append(lista);
        
    }
}


var transport = new Klasa;

