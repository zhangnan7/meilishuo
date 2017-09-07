$(".top_list li").mouseover(function(){
		$(this).children("a").css("color","#f36")
		
	}).eq(4).mouseover(function(){
		$(".collect").css("display","block")
	}).end().eq(9).mouseover(function(){
		$(".service_1").css("display","block")
	})
	$(".top_list li").mouseout(function(){
		$(this).children("a").css("color","")
		
	}).eq(4).mouseout(function(){
		$(".collect").css("display","none")
	}).end().eq(9).mouseout(function(){
		$(".service_1").css("display","none")
	})
	
//导航条点击效果
$(".nav li").click(function(){
	
	$(this).find("a").css({"color":"#f36","border-bottom":"2px solid #FF3366"}).end().siblings().find("a").css({"color":"#333","border":"none"})
})


    var timer = setInterval(autoPlay , 2000);
    
    var index = 0;
    function autoPlay(){
     	index++;
     	
     	if(index == 3){
     		index = 0;
     	}
     	$(".banner-num span").eq(index-1).addClass("active").siblings().removeClass("active");
     	$(".banner li").eq(index-1).animate({"left":0},1000,function(){
     		$(this).css("z-index",0).siblings().css({"z-index":1,"left":1200})
     	}) 	
    }
    
//ajax请求数据
var deffered = $.ajax({
		type:"get",
		url:"js/data.json",
		dataType:"json" //如果指定预期返回的类型，结果就是预期类型 就不是string
	});
	//ajax请求成功执行done方法
	deffered.done(function(res){
		//添加商品信息
		for(var j=0;j<res.xinpin.list.length;j++){
						$content=$(`<li><a href="#">
					<img src="img/${res.xinpin.list[j].src}" alt="" />
									<p>${res.xinpin.list[j].price}</p>
									<span>${res.xinpin.list[j].name}</span>
									</a>
									</li>
									`)
						$content.appendTo($(".ajax_list"))
						
		}
		$(".today").css({"color":"#FF3366","border-bottom":"2px #f36 solid"})
			$(".week").click(function(){
				$(".ajax_list").html("")
					for(var j=0;j<res.rexiao.list.length;j++){
						$content=$(`<li><a href="#">
					<img src="img/${res.rexiao.list[j].src}" alt="" />
									<p>${res.rexiao.list[j].price}</p>
									<span>${res.rexiao.list[j].name}</span>
									</a>
									</li>
									`)
						$content.appendTo($(".ajax_list"))
						
					}
				$(this).css({"color":"#FF3366","border-bottom":"2px #f36 solid"})
						.siblings().css({"color":"#333","border-bottom":"none"})
			})
			$(".today").click(function(){
				$(".ajax_list").html("")
					for(var j=0;j<res.xinpin.list.length;j++){
						$content=$(`<li><a href="#">
					<img src="img/${res.xinpin.list[j].src}" alt="" />
									<p>${res.xinpin.list[j].price}</p>
									<span>${res.xinpin.list[j].name}</span>
									</a>
									</li>
									`)
						$content.appendTo($(".ajax_list"))
						
					}
				$(this).css({"color":"#FF3366","border-bottom":"2px #f36 solid"})
						.siblings().css({"color":"#333","border-bottom":"none"})
				
			})
			
	
	})
