//1. Check off specific todo by clicking

$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");

}); 

//2. Click on X- span to select and delete parent ToDo(Add and Click on delete button)
$("ul").on("click","span",function(event){
	
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
}); 

//3. Add New ToDo
$("input[type='text']").keypress(function(event){
	if(event.which==13)
	{
		//get value of input
		var toDoText = $(this).val();
		$(this).val("");
		
		//add new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li>");
	}
})

//4. toggle input are when clicking plus
$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
})


