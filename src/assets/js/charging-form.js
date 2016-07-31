$('#Grant').change(function(){
  if(this.checked){
   $('#GrantID').removeClass('hide');
   $('#GiftID').addClass('hide');
   $('#YaleDesignatedID').addClass('hide');
   $('#additional-required').addClass('hide');
  }
});

$('#Gift').change(function(){
  if(this.checked){
   $('#GrantID').addClass('hide');
   $('#GiftID').removeClass('hide');
   $('#YaleDesignatedID').addClass('hide');
   $('#additional-required').removeClass('hide');
  }
});

$('#YaleDesignated').change(function(){
  if(this.checked){
   $('#GrantID').addClass('hide');
   $('#GiftID').addClass('hide');
   $('#YaleDesignatedID').removeClass('hide');
   $('#additional-required').removeClass('hide');
  }
});

// Move the input focus to the end of the input string
$(':input').focus(function() {
    setTimeout((function(el) {
        var strLength = el.value.length;
        return function() {
            if(el.setSelectionRange !== undefined) {
                el.setSelectionRange(strLength, strLength);
            } else {
                $(el).val(el.value);
            }
    }}(this)), 0);
});