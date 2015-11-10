$(document).ready(function () {
    if ($('.checkbox-click-js').hasClass('active')) {
        $('.checkbox-js').prop('checked', true);
        $('.checkbox-noclick-js').unbind('click');
    } else {
        $('.checkbox-js').prop('checked', false);
        $('.checkbox-noclick-js').bind('click', function (event) {
            event.preventDefault();
        });
    }
    $('.checkbox-click-js').click(function () {
        $(this).toggleClass('active');
        $('.checkbox-noclick-js').unbind('click');
    });
});