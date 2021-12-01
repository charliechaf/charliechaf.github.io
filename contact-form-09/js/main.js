class TravellerCollection extends Array {

    add(accumulator, a) {
        return accumulator + a;
    }

    groupBy(name, key) {
        // Return the end result
        return this.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[name]] = result[currentValue[name]] || []).push(
                parseFloat(currentValue[key])
            );
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    };
}

function sum(array) {
    return array.reduce((a, b) => a + (parseInt(b) || 0), 0);
}

function showStats(obj) {
    let exerciseList = document.querySelector(".summary-list");

    let exerciseItems = "";

    for ([key, value] of Object.entries(obj)) {
        exerciseItems += '<li>' + key + ' - ' + value + '</li>';
    }

    exerciseList.innerHTML = exerciseItems;
};

(function ($) {

        "use strict";

        Date.prototype.toDateInputValue = (function () {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0, 10);
        });

        $(document).ready(function () {
            $('#date').val(new Date().toDateInputValue());
        })

        $("#stats").click(function () {
                var $submit = $('.submitting'),
                    waitText = 'Loading...';
                $.ajax({
                        type: "GET",
                        url: "https://16gndf2633.execute-api.us-east-1.amazonaws.com/",
                        // beforeSend: function () {
                        //     $submit.css('display', 'block').text(waitText);
                        // },
                        success: function (result) {
                            const obj = JSON.parse(result);
                            console.log(obj);

                            const traveler = new TravellerCollection(...obj.Items);

                            let grouped = (traveler.groupBy('name', 'amount'));

                            const statSummary = {};

                            for (const [key, value] of Object.entries(grouped)) {
                                statSummary[key] = sum(value);
                            }

                            console.log(statSummary);

                            showStats(statSummary);


                            $('#form-message-warning').hide();
                            setTimeout(function () {
                                $('#contactForm').hide();
                            }, 0);

                            setTimeout(function () {
                                $('#statsSummary').fadeIn();
                            }, 500);

                            setTimeout(function () {
                                $('#showForm').fadeIn();
                            }, 500);
                        }
                    }
                )
            }
        )

        $("#showForm").click(function () {
            setTimeout(function () {
                $('#statsSummary').fadeOut();
            }, 100);

            setTimeout(function () {
                $('#showForm').fadeOut();
            }, 100);

            setTimeout(function () {
                $('#contactForm').fadeIn();
            }, 500);

        }

)

// Form
var contactForm = function () {
    if ($('#contactForm').length > 0) {
        $("#contactForm").validate({
            rules: {
                name: "required",
                subject: "required",
                amount: {
                    required: true,
                    min: 0
                },
                message: {
                    required: false,
                    minlength: 0
                }
            },
            messages: {
                name: "Please enter your name",
                subject: "Please enter your subject",
                email: "Please enter a valid email address",
                message: "Please enter a message"
            },

            /* submit via ajax */

            submitHandler: function (form) {
                var $submit = $('.submitting'),
                    waitText = 'Submitting...';

                $.ajax({
                    type: "POST",
                    url: "https://16gndf2633.execute-api.us-east-1.amazonaws.com/",
                    data: $(form).serialize(),

                    beforeSend: function () {
                        $submit.css('display', 'block').text(waitText);
                    },
                    success: function (msg) {

                        $('#form-message-warning').hide();
                        setTimeout(function () {
                            $('#contactForm').fadeOut();
                        }, 500);
                        setTimeout(function () {
                            $('#form-message-success').fadeIn();
                        }, 700);
                        setTimeout(function () {
                            $('#form-message-success').fadeOut();
                        }, 1800);
                        setTimeout(function () {
                            $('#contactForm').fadeIn();
                            $('#contactForm').trigger("reset");
                            $(document).ready(function () {
                                $('#date').val(new Date().toDateInputValue());
                            })
                        }, 2200);

                        // setTimeout(function(){
                        //  $('#form-message-success').fadeOut();
                        // }, 8000);

                        setTimeout(function () {
                            $submit.css('display', 'none').text(waitText);
                        }, 1400);

                        //       	setTimeout(function(){
                        //       		$( '#contactForm' ).each(function(){
                        //     this.reset();
                        // });
                        //       	}, 1400);
                    },
                    error: function () {
                        $('#form-message-warning').html("Something went wrong. Please try again.");
                        $('#form-message-warning').fadeIn();
                        $submit.css('display', 'none');
                    }
                });
            } // end submitHandler

        });
    }
};
contactForm();

})
(jQuery);
