// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    
    $('#email_form').validate({

        rules: {
            'email':
            {
                required: true,
                email: true,
            },
        },
        
    messages:
        {
            'email':
            { 
            required:"Please provide your email address",
            email: "Please provide a valid email address",
        },
        },
    });
    });
        
function myMap() {
 var mapOptions= {
        center: new google.maps.LatLng(40.112971, -88.179898),
        zoom: 17,
       mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}
