	
/*
Функции обработки событий при увеличении/уменьшении количества товара в карточке
*/
$('#count_right').click(function(){
	var count = parseInt($('.quantityInput').val()) + 1;
	if(count <= 0) count = 1;
	$('.quantityInput').val(count);
});
$('#count_left').click(function(){
	var count = parseInt($('.quantityInput').val()) - 1;
	if(count <= 0) count = 1;
	$('.quantityInput').val(count);
});
$('.quantityInput').change(function(){
	var count = parseInt($('.quantityInput').val());
	if(count <= 0 || isNaN(count)) count = 1;
	$('.quantityInput').val(count);
});
$('.quantityInput').change(function(){
	modificationID = $(this).attr('data-id');
    quantityItem = $('.quantityInput').val();
    order_amount_btn = $('.addCart').attr("onclick", "return $.addIntoCart('/shop/cart/', " + modificationID + ", " + quantityItem + ")");
});
