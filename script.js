
	$(document).ready(function(){
		$("#inputName").blur(function(){
			var text=$(this).val();
			if(text.length<4)
				{
					$("#nameLabel").show();
				}
			else{
				$("#nameLabel").hide();
			}
		});
		
			$("#inputNumber").blur(function(){
			var num=$(this).val();
			if(num.length!==10)
				{
					$("#numberLabel").show();
				}
			else{
				$("#numberLabel").hide();
			}
		});
		
		$("#inputPlace").blur(function(){
			var place=$(this).val();
			if(place.length<4)
				{
					$("#placeLabel").show();
				}
			else{
				$("#placeLabel").hide();
			}
		});
			$("#Comments").blur(function(){
			var comment=$(this).val();
			if(comment.length<=0)
				{
					$("#commentLabel").show();
				}
			else{
				$("#commentLabel").hide();
			}
		});
	});
	
	