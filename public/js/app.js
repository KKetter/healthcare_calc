//Get Started form becomes visible to user
$ ('#finderButton').on('click', function(event){
  event.preventDefault();
  console.log('finder button clicked');
  $('#form').removeClass('hide-form');
  $('#form').addClass('show-form');
  $('#finderButton').addClass('hide-form');
});