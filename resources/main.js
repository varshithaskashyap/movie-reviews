class movie_review_app{
    registerEvents(){
        this.register_movie_review();
        this.delete();

    }
    register_movie_review(){
        self=this;
        self.show_movie_details();
        jQuery("#form").submit(function(){
            self.register_methods();
        })
    }
    register_methods(){
    self =this;
    self.get_movie_reviews();
    self.set_movie_reviews();
    self.show_movie_details();
    self.delete();
    }

    constructor(){
        this.movie_name ='';
        this.review = 0;
    }
    register_local_storage(){
     if (typeof(Storage) !== "undefined") {
         
    }
                if (localStorage.movie_review_storage) {
                 movie_details = JSON.parse(localStorage.getItem("movie_review_storage"));
                    }

                        else{
                localStorage.setItem("movie_review_storage", JSON.stringify(movie_details));
            }
     }
        get_movie_reviews(){
            self=this;
            self.movie_name = jQuery('#movie_name').val();
            self.review = jQuery('#review').val();
            self.register_local_storage();
        }

        set_movie_reviews(){

            
            current_movie_review['movie_name'] = this.movie_name;
            current_movie_review['review'] = this.review;
            movie_details.push(current_movie_review);
            
            current_movie_review={};

            localStorage.setItem('movie_review_storage',JSON.stringify(movie_details));

        }

        show_movie_details(){
            if (localStorage.movie_review_storage) {
             movie_details = JSON.parse(localStorage.getItem("movie_review_storage"));
           }

             $("#table_movie > tbody").html("");

            for(let i =0 ;i<movie_details.length;i++){
                if(movie_details.length!=0){
                    jQuery(document).ready(function(){  
                          var add_prev_details=
                        `<tr>
                        <td class = 'td' id='movie_name'>`+movie_details[i].movie_name+`</td>
                        <td class = 'td'>`+movie_details[i].review+`</td>
                        <td class = 'td'><button class="btn btn-danger" id = 'delete' >Delete</button></td>
                        </tr>`
                        jQuery('#table_movie tbody').append(add_prev_details);

                    });
                }
            }
        }
        delete(){
        jQuery('.table').on('click','#delete', function(){
            var movie_name = $(this).closest('tr').find('#movie_name').text();       

        for(let i=0;i<movie_details.length;i++)
        {
            if(movie_details[i].movie_name==movie_name)
            {
                movie_details.splice(i,1);
                break;
            }
        }
        $(this).closest('tr').remove();
            localStorage.setItem("movie_review_storage", JSON.stringify(movie_details));
                })

        }
}
 var current_movie_review = {};      
    var movie_details=[];

    $(document).ready(function() {
var movie_review_obj = new movie_review_app();
movie_review_obj.registerEvents();
});