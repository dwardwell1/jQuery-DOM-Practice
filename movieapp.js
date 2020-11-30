$('#movie-form').submit(function(event) {
	event.preventDefault();
	let name = $('#name').val();
	let score = $('#score').val();
	if (name.length < 2) {
		alert('name a real movie jerkass');
		return;
	}
	$('ul').append(`<li>${name} =====> My Score: ${score}   <button class= remove>Delete</button</li>`);
});

$('#movie-list').on('click', '.remove', function() {
	$(this).parent().remove();
});
