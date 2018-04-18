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
            let koordynaty = this.wychwytywanie(element.gps);
            lista += '<li>' + element.adres + '<br>' + element.autorka + '<br>' + element.ceny_biletow + '<br>' + element.dostepnosc + '<br>' + 
            element.e_mail + '<br>' + '<a target="_blank" href="' + [element.flickr] + '"> zdjęcie </a>' + '<br>' + element.gmina + '<br>' + element.godziny_otwarcia + '<br>' + 
            element.gps + '<br>' + element.obiekt + '<br>' + element.opis + '</li>';
        });

     

            
        lista += '</ul>';
        $('#wyniki').append(lista);
        
    } 

    wychwytywanie(gps)
        {
            if(isNaN(gps) || gps == "" || gps == null){
                return null;
            }
            else
            {
                var o = gps.split(" ");
                o.forEach((element, index) => 
                {
                    if(element == "N"){
                    let n = o[index + 1];
                    console.log(n);
                    }
                });
            }
            
        
            
       //     var m = parseInt(response.data.rows.element.gps.substring(1, 2), 10)/60;
//var l = parseInt(response.data.rows.element.gps.substring(2, 3), 10)/3600;
         //   console.log(n + m + l);
            
        }
}


var transport = new Klasa;

