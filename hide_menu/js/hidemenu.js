$(document).ready(function(){
$(function(){
  $('#showPhoneNav').click(function() {
      $("#myNav").slideToggle('normal',function(){ //Shows Nav Area
      if ($('#myNav').is(':visible')) {
          $('#showPhoneNav').text('Hide Navigation');
        } else {
            $('#showPhoneNav').text('Show Navigation');
        } // end of if   
      });// slide of slide toggle
    });// End of myNav
});// End of showPhoneNav
});// End of ready