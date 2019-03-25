$('.country-forms').hide();
$('.drink-submit').hide();
$('.after-submit').hide();

// Show Mexico form and Mexico drink submit on "Let's Go!" button click
$('#start-button').click(function() {
    $('#main-form').hide();
    $('#mexico-form').fadeIn(1500);
    $('#drink-submit-mexico').fadeIn(1500);
});

// Hide Mexico forms on "Submit" button click and show after submit page
$('.mexico').click(function(event) {
    event.preventDefault();
    
    $('#mexico-form').hide();
    $('#drink-submit-mexico').hide();
    $('.norway').fadeIn(1500);
});

// Show Norway form and Norway drink submit on button click
$('.move-on-norway').click(function() {
    $('.norway').hide();
    $('#norway-form').fadeIn(1500);
    $('#drink-submit-norway').fadeIn(1500);
});

// Hide Norway forms on "Submit" button click and show after submit page
$('.drink-submit-btn-norway').click(function(event) {
    event.preventDefault();
    
    $('#norway-form').hide();
    $('#drink-submit-norway').hide();
    $('.china').fadeIn(1500);
});

// Show China form and China drink submit on button click
$('#move-on-china').click(function() {
    $('.china').hide();
    $('#china-form').fadeIn(1500);
    $('#drink-submit-china').fadeIn(1500);
});

// Hide China forms on "Submit" button click and show after submit page
$('#drink-submit-btn-china').click(function(event) {
    event.preventDefault();
    
    $('#china-form').hide();
    $('#drink-submit-china').hide();
    $('.germany').fadeIn(1500);
});

// Show Germany form and Germany drink submit on button click
$('#move-on-germany').click(function() {
    $('.germany').hide();
    $('#germany-form').fadeIn(1500);
    $('#drink-submit-germany').fadeIn(1500);
});

// Hide Germany forms on "Submit" button click and show after submit page
$('#drink-submit-btn-germany').click(function(event) {
    event.preventDefault();
    
    $('#germany-form').hide();
    $('#drink-submit-germany').hide();
    $('.italy').fadeIn(1500);
});

// Show Italy form and Italy drink submit on button click
$('#move-on-italy').click(function() {
    $('.italy').hide();
    $('#italy-form').fadeIn(1500);
    $('#drink-submit-italy').fadeIn(1500);
});

// Hide Italy forms on "Submit" button click and show after submit page
$('#drink-submit-btn-italy').click(function(event) {
    event.preventDefault();
    
    $('#italy-form').hide();
    $('#drink-submit-italy').hide();
    $('.america').fadeIn(1500);
});

// Show America form and America drink submit on button click
$('#move-on-america').click(function() {
    $('.america').hide();
    $('#america-form').fadeIn(1500);
    $('#drink-submit-america').fadeIn(1500);
});

// Hide America forms on "Submit" button click and show after submit page
$('#drink-submit-btn-america').click(function(event) {
    event.preventDefault();
    
    $('#america-form').hide();
    $('#drink-submit-america').hide();
    $('.japan').fadeIn(1500);
});

// Show Japan form and Japan drink submit on button click
$('#move-on-japan').click(function() {
    $('.japan').hide();
    $('#japan-form').fadeIn(1500);
    $('#drink-submit-japan').fadeIn(1500);
});

// Hide Japan forms on "Submit" button click and show after submit page
$('#drink-submit-btn-japan').click(function(event) {
    event.preventDefault();
    
    $('#japan-form').hide();
    $('#drink-submit-japan').hide();
    $('.morocco').fadeIn(1500);
});

// Show Morocco form and Morocco drink submit on button click
$('#move-on-morocco').click(function() {
    $('.morocco').hide();
    $('#morocco-form').fadeIn(1500);
    $('#drink-submit-morocco').fadeIn(1500);
});

// Hide Japan forms on "Submit" button click and show after submit page
$('#drink-submit-btn-morocco').click(function(event) {
    event.preventDefault();
    
    $('#morocco-form').hide();
    $('#drink-submit-morocco').hide();
    $('.france').fadeIn(1500);
});

// Show France form and France drink submit on button click
$('#move-on-france').click(function() {
    $('.france').hide();
    $('#france-form').fadeIn(1500);
    $('#drink-submit-france').fadeIn(1500);
});

// Hide France forms on "Submit" button click and show after submit page
$('#drink-submit-btn-france').click(function(event) {
    event.preventDefault();
    
    $('#france-form').hide();
    $('#drink-submit-france').hide();
    $('.uk').fadeIn(1500);
});

// Show UK form and UK drink submit on button click
$('#move-on-uk').click(function() {
    $('.uk').hide();
    $('#uk-form').fadeIn(1500);
    $('#drink-submit-uk').fadeIn(1500);
});

// Hide UK forms on "Submit" button click and show after submit page
$('#drink-submit-btn-uk').click(function(event) {
    event.preventDefault();
    
    $('#uk-form').hide();
    $('#drink-submit-uk').hide();
    $('.canada').fadeIn(1500);
});

// Show Canada form and Canada drink submit on button click
$('#move-on-canada').click(function() {
    $('.canada').hide();
    $('#canada-form').fadeIn(1500);
    $('#drink-submit-canada').fadeIn(1500);
});

// Hide UK forms on "Submit" button click and show after submit page
$('#drink-submit-btn-canada').click(function(event) {
    event.preventDefault();
    
    $('#canada-form').hide();
    $('#drink-submit-canada').hide();
    $('.complete').fadeIn(1500);
});

// Show challenge complete
$('#move-on-complete').click(function() {
    $('.complete').hide();
    $('#complete').fadeIn(1500);
});