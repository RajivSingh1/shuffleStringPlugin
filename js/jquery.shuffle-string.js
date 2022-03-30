(function ($) {

    $.fn.shuffleString = function () {


        return this.each(function () {
            $(this).text(shuffleString($(this).text()));

                function shuffleString(str) {
                    var array = str.split("");
                    for (var index = array.length - 1; index > 0; index--) {
                        var val = Math.floor(Math.random() * (index + 1));
                        var temp = array[index];
                        array[index] = array[val];
                        array[val] = temp;

                    }
                    return array.join("");
                }
        })
    }


}(jQuery));