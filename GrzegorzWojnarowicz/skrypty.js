class Klasa{
    constructor(fetchURL){
        this.fetchURL = 'github.com/axios/axios'
    }
}
fetch('http://dulian.cartodb.com/api/v2/sql/?q=SELECT%20*%20FROM%20mddk_info')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });