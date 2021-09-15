class movie_review_app {
    constructor() {
        this.current_movie_review = {};
        this.movie_details = [];

    }
    registerEvents() {
        this.register_movie_review();
        //this.show_movie_details();
        this.delete();


    }
    register_movie_review() {
        

        if (typeof (Storage) !== "undefined") {
            alert("hello in local")
            if (localStorage.movie_review_storage) {
                this.movie_details = JSON.parse(localStorage.getItem("movie_review_storage"));
            }

            else {
                localStorage.setItem("movie_review_storage", JSON.stringify(this.movie_details));
            }
        }
        jQuery("form").submit(function (event) {
            
            var x = jQuery("form").serializeArray();

            jQuery.each(x, function (i, field) {
                alert("inside ..")
                

                var get_values = {};
                get_values[field.name] = field.value;
                alert(get_values['name'])
                alert(get_values['review'])
                this.show_movie_details();

            });

            alert("hello")
            console.log(get_values);

            this.movie_details.push(get_values);
            localStorage.setItem("movie_review_storage", JSON.stringify(this.movie_details));
            get_values = {};

        });




    }
    show_movie_details() {
        if (localStorage.movie_review_storage) {
            this.movie_details = JSON.parse(localStorage.getItem("movie_review_storage"));
        }
        alert("in show")
        jQuery("#table_movie > tbody").html("");

        for (let i = 0; i < this.movie_details.length; i++) {
            if (this.movie_details.length != 0) {
                jQuery(document).ready(function () {
                    var add_prev_details =
                        `<tr>
                    <td class = 'td' id='movie_name'>`+ this.movie_details[i].movie_name + `</td>
                    <td class = 'td'>`+ this.movie_details[i].review + `</td>
                    <td class = 'td'><button class="btn btn-danger" id = 'delete' >Delete</button></td>
                    </tr>`
                    jQuery('#table_movie tbody').append(add_prev_details);

                });
            }
        }
    }
    delete() {
        jQuery('.table').on('click', '#delete', function () {
            var movie_name = jQuery(this).closest('tr').find('#movie_name').text();

            for (let i = 0; i < this.movie_details.length; i++) {
                if (this.movie_details[i].movie_name == movie_name) {
                    this.movie_details.splice(i, 1);
                    break;
                }
            }
            jQuery(this).closest('tr').remove();
            localStorage.setItem("movie_review_storage", JSON.stringify(this.movie_details));
        })

    }




}
jQuery(document).ready(function () {
    var movie_review_obj = new movie_review_app();
    movie_review_obj.registerEvents();
});