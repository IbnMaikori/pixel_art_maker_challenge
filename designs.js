// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var height, width, color;

	//get size from the user input, call make grid function.
$('#sizePicker').submit(function (event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();

	makeGrid(height, width);
		
});

	//make grid using a for loop and .append() method.
function makeGrid(row, column){
	$('tr').remove();
	for (let i = 0; i<row; i++){
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (let j = 0; j<column; j++){
			$('#table' + i).append('<td></td>');
		}
	} 

	//add color to cell
	$('td').click(function (){
		let color = $('#colorPicker').val();
		if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
		
	});

}//end of makeGrid Function.

	



