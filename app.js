$('#start-button').on('click', function() {
        $('#mexico-form').show();
        $('#drink-submit-mexico').show();
        $('#main-form').hide();
});

$('#drink-submit-btn').on('click', function(event) {
    event.preventDefault();

    $('#after-submit').show();
    $('#drink-submit-mexico').hide();
    $('#mexico-form').hide();
});

$('#move-on').on('click', function() {
    $('#after-submit').hide();
    $('#norway-form').show();
    $('#drink-submit-norway').show();
});

$('#drink-submit-btn2').on('click', function(event) {
    event.preventDefault();

    $('#after-submit2').show();
    $('#drink-submit-norway').hide();
    $('#norway-form').hide();
});

$('#move-on2').on('click', function() {
    $('#after-submit2').hide();
    $('#china-form').show();
    $('#drink-submit-china').show();
});

$('#drink-submit-btn3').on('click', function(event) {
    event.preventDefault();

    $('#after-submit3').show();
    $('#drink-submit-china').hide();
    $('#china-form').hide();
});

$('#move-on3').on('click', function() {
    $('#after-submit3').hide();
    $('#germany-form').show();
    $('#drink-submit-germany').show();
});

$('#drink-submit-btn4').on('click', function(event) {
    event.preventDefault();

    $('#after-submit4').show();
    $('#drink-submit-germany').hide();
    $('#germany-form').hide();
});

$('#move-on4').on('click', function() {
    $('#after-submit4').hide();
    $('#italy-form').show();
    $('#drink-submit-italy').show();
});

$('#drink-submit-btn5').on('click', function(event) {
    event.preventDefault();

    $('#after-submit5').show();
    $('#drink-submit-italy').hide();
    $('#italy-form').hide();
});

$('#move-on5').on('click', function() {
    $('#after-submit5').hide();
    $('#america-form').show();
    $('#drink-submit-america').show();
});

$('#drink-submit-btn6').on('click', function(event) {
    event.preventDefault();

    $('#after-submit6').show();
    $('#drink-submit-america').hide();
    $('#america-form').hide();
});

$('#move-on6').on('click', function() {
    $('#after-submit6').hide();
    $('#japan-form').show();
    $('#drink-submit-japan').show();
});

$('#drink-submit-btn7').on('click', function(event) {
    event.preventDefault();

    $('#after-submit7').show();
    $('#drink-submit-japan').hide();
    $('#japan-form').hide();
});

$('#move-on7').on('click', function() {
    $('#after-submit7').hide();
    $('#morocco-form').show();
    $('#drink-submit-morocco').show();
});

$('#drink-submit-btn8').on('click', function(event) {
    event.preventDefault();

    $('#after-submit8').show();
    $('#drink-submit-morocco').hide();
    $('#morocco-form').hide();
});

$('#move-on8').on('click', function() {
    $('#after-submit8').hide();
    $('#france-form').show();
    $('#drink-submit-france').show();
});

$('#drink-submit-btn9').on('click', function(event) {
    event.preventDefault();

    $('#after-submit9').show();
    $('#drink-submit-france').hide();
    $('#france-form').hide();
});

$('#move-on9').on('click', function() {
    $('#after-submit9').hide();
    $('#uk-form').show();
    $('#drink-submit-uk').show();
});

$('#drink-submit-btn10').on('click', function(event) {
    event.preventDefault();

    $('#after-submit10').show();
    $('#drink-submit-uk').hide();
    $('#uk-form').hide();
});

$('#move-on10').on('click', function() {
    $('#after-submit10').hide();
    $('#canada-form').show();
    $('#drink-submit-canada').show();
});

$('#drink-submit-btn11').on('click', function(event) {
    event.preventDefault();

    $('#after-submit11').show();
    $('#drink-submit-canada').hide();
    $('#canada-form').hide();
});

$('#move-on11').on('click', function() {
    $('#after-submit11').hide();
    $('#complete').show();
});

