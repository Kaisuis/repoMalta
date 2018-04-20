new Vue({
    el: '#app',
    data () {
      return {
        info: [],
      }
    },
    mounted(){
        this.initData();
       },
       methods:{
        initData(){
        }
       }
      })

      
      
axios.get('http://dulian.cartodb.com/api/v2/sql/?q=SELECT%20*%20FROM%20mddk_info')
      .then((response)=>{
        this.info = response.data.rows
        console.log(response)
    })
    .catch((error)=>{
    })
    .then((response)=>{
        

      })


      