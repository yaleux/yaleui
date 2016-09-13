// Display fields based on type of Charge ID
$('#ChargeID').change(function(){
  chargeID = this.value;

  if(chargeID.startsWith("GRN")){
    $('#additional-required').addClass('hide');
  }

  if( chargeID.startsWith("GFT") || chargeID.startsWwith("YD") ){
    $('#additional-required').removeClass('hide');
  }
});


// Move the input focus to the end of the input string
$(':input[type=text]').focus(function() {
     setTimeout((function(el) {
        var strLength = el.value.length

        return function() {
            if(el.setSelectionRange !== undefined) {
                el.setSelectionRange(strLength, strLength);
            } else {
                $(el).val(el.value);
            }
    }}(this)), 0);
});

// Convert input to uppercase
$('input[type=text]').bind('change', function() {
   this.value = this.value.toLocaleUpperCase();

});

