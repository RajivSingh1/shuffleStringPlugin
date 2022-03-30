(function ($) {

    $.fn.charCount = function () {


        var x;
            $("#name").keyup(function (event)
            {
                $("nameo").text($(this).val().length);
            });


        return x;
    }


}(jQuery));