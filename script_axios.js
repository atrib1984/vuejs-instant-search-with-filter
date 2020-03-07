
var router = new VueRouter({
						   
						   
    mode: 'history',
    routes: []
});





const app = new Vue({
router,
  el: '#app',
  data: {
    ksearch: '',
	postList: []
	},
	
	

	
	

	
	
	
	mounted() {
		

		
		
		axios
			.get('https://www.websitedesignservice.co.in/data.json')
			.then(response => {
				  
				this.postList = response.data;
				
				
			})
			.catch(error => console.log(error))
	},
	


  computed: {
	  
	
	  
    filteredList() {
		
		
	
		
	
		
		
		
		var authorNameSearchString = this.ksearch;
		
if ((authorNameSearchString === '' ) ){
		  
	
            	this.$router.replace({
  path: 'index.html',
 
}).catch(err => {})
				
				
				
				
        }else{
			
			this.$router.replace({
								 
								 path: '',
  
  query: {
	  //
    term: authorNameSearchString
   
  }
}).catch(err => {})
			
		}
		
	 
		

		
     return this.postList.filter(
								  
								  post => {
									  
						if((post.name.toLowerCase().indexOf(authorNameSearchString) !== -1) || (post.name.indexOf(authorNameSearchString) !== -1) || (post.sku.toLowerCase().indexOf(authorNameSearchString) !== -1) ){
							
                    return post;
                }
				

		
		
		
		
		
		
      });
	 
	
	 
	 
	 
	 
    } } });


