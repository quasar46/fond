$(document).ready(function () {
    $('#show-more').on('click', function () {
        $('.down').slideToggle();
        if (!$(this).data('status')) {
            $(this).html('Показать меньше');
            $(this).data('status', true);
        }
        else {
            $(this).html('Показать больше');
            $(this).data('status', false);
        }
    })
})