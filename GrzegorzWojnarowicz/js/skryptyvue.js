const url = 'http://dulian.cartodb.com/api/v2/sql/?q=SELECT%20*%20FROM%20mddk_info';
  
var transport = new Vue
({
    el: '#apka',
    data: 
        {
            cos: 'ok',
        },

    mounted()
        {
        this.initData();
        },

    methods:
        {
        
        function: axios.get(url)
        .then((response)=>
          {
             console.log(response);
              transport.wywal(response);
          })
          .catch((error)=>
          {
              console.log(error)
          }),
      
          
        wywal(response) 
        {
            let lista = '<ul>';
            response.data.rows.forEach((element) => 
            {
            let link = this.filtrowanie(element);
            lista += '<li>' + element.adres + '<br>' + element.autorka + '<br>' + element.ceny_biletow + '<br>' + element.dostepnosc + '<br>' + 
            element.e_mail + '<br>' + '<a target="_blank" href="' + [element.flickr] + '"> zdjęcie </a>' + '<br>' + element.gmina + '<br>' + element.godziny_otwarcia + '<br>' + 
            element.gps + '<br>' + element.obiekt + '<br>' + element.opis + '<br>' + element.longitude_0 + '<br>' + element.latitude_0 + '<br>' + '<a target="_blank" href="' + 
            link + '"> mapa </a>' + '</li>';
            });

            lista += '</ul>';
            $('#apka').append(lista);
            

        },

        filtrowanie(element){
            let link = null;

            if(element.hasOwnProperty("latitude_0") && element.hasOwnProperty("longitude_0") && element.longitude_0 != null && element.longitude_0 != "" && element.latitude_0 != null && element.latitude_0 != "")
                {
                    var dana = parseFloat(element.longitude_0).toFixed(4);
                    var dana2 = parseFloat(element.latitude_0).toFixed(4);
                    link = "https://www.gps-coordinates.net/latitude-longitude/"+dana2+"/"+dana+"/10/roadmap";
                
                }
            return link;
        },
        initData()
          {
          },
          
    } 
    
    
});

      
      
   