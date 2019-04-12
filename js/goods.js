



	class List{
		constructor(){
			this.init();

		}
		init(){
			var that = this;
			$.ajax("./data/goods.json",{
				type:"get",
				dataType:"json",
				success:function(res){
					console.log(res)
					that.display(res);
				}
			});
		}
//		load(){
//						
//		}
		display(res){
			var str = "";
			for(var i=0;i<res.length;i++){
				str +=`<div class="zheng" index="${res[i].id}">
					        <a>
					            <img src="${res[i].src}">
					        </a>
					       	<div class="xia">
					            <p>
					                <span class="s1">${res[i].g1}</span>
					                <span class="s2">${res[i].g2}</span>
					            </p>
					            <span>${res[i].g3}</span>
					            <p>
					                <span class="s4">${res[i].g4}</span>
					                <span class="s5">${res[i].g5}</span>
					            </p>
					            <div class="more">${res[i].g6}</div>
					        </div>
					   </div>`
			}
			$(".xin").children("ul").children("li").html(str);
			$(".xin").children("ul").children("li").children(".zheng").click(function(){
				$.cookie("goods",$(this).attr("index"))
				$(location).attr('href', './xiangqingye.html')
			})
		
		}
		
	}
			
	new List();














