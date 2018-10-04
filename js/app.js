$(document).ready(function() {
    "use strict";
    $.ajax({
        url: 'https://randomuser.me/api/',
        data: {results: 7},
        dataType: 'json',
        success: function(data) {
            var results = data.results, i;
            for (i = 0; i < results.length; i+=1) {
                console.log(data);
                console.log(i);
                var j=i;
                (j%2==0) ? j=0 : j=1;

                /*------------ Date format yyyy-mm-dd -------------*/
                var registered = results[i].registered.date;
                var reg1 = /(\d+)\-(\d+)\-(\d+)/g;
                var date1=reg1.exec(registered);
                registered = `${date1[3]}/${date1[2]}/${date1[1]}`;

                var dob = results[i].dob.date;
                var reg2 = /(\d+)\-(\d+)\-(\d+)/g;
                var date2 = reg2.exec(dob);
                dob = `${date2[3]}/${date2[2]}/${date2[1]}`;
                /*---------------------------------------------------*/

                $('#user-info').append(
                    '<div class="block row-v box-visible'+j+'">' +
                    '<div><img	src="' + results[i].picture.medium + '" /></div>' +
                    '<div class="last">' + results[i].name.last + '</div>' +
                    '<div class="first">' + results[i].name.first + '</div>' +
                    '<div>' + results[i].login.username + '</div>' +
                    '<div>' + results[i].phone + '</div>' +
                    '<div>' + results[i].location.state + '</div>' +
                    '<div class="btn"><i class="fa fa-plus fa-4x"></i></div>' +
                    '</div>'+
                    /*-------------------*/
                    '<div class="row-h box-hidden'+j+'">' +

                    '<div class="block">' +
                    '<div class="block-v">' +
                    '<div class="first">' + results[i].name.first +
                    '<span class="gender"><i class="fa fa-'+ results[i].gender+'">' + '</i></span>' +
                    '</div>' +
                    '<div><span>Username</span>' + results[i].login.username + '</div>' +
                    '<div><span>Registered</span>' + registered + '</div>' +
                    '<div><span>Email</span>' + results[i].email + '</div>' +
                    '</div>'+

                    '<div class="block-v">' +
                    '<div><span>Adress</span>' + results[i].location.street + '</div>' +
                    '<div><span>City</span>' + results[i].location.city + '</div>' +
                    '<div><span>Zip Code</span>' + results[i].location.postcode + '</div>' +
                    '</div>'+

                    '<div class="block-v">' +
                    '<div><span>Birthday</span>' + dob + '</div>' +
                    '<div><span>Phone</span>' + results[i].phone + '</div>' +
                    '<div><span>Cell</span>' + results[i].cell + '</div>' +
                    '</div>'+

                    '<div><img	src="' + results[i].picture.large + '" /></div>' +
                    '</div>'+
                    '</div>');
            }

            /*-------------User clicked (show, hide more info)-------------*/
            var hidden = $('.row-h');
            var visible = $('.row-v');
            visible.on('click',function(){
                var me = $(this);
                hidden.filter(':visible').slideUp(function(){
                    $(this).prev('.row-v');
                });
                var content = me.next('.row-h');
                if (!content.is(':visible')) {
                    content.slideDown(400);
                }
            });
            /*---------------------------------*/

        }
    });
});

