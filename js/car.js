class car{
		constructor(){
			this.goods()
//			this.tbody = document.querySelector("#tbody");
//			this.load()
//			this.addElement()
		}
//		商品
		goods(){
			var that = this;
		$.ajax({
		   url: "./data/goods.json",//json文件位置
		   type: "get",//请求方式为get
		   dataType: "json", //返回数据格式为json
		   success: function(res) {//请求成功完成后要执行的方法 
		       //each循环 使用$.each方法遍历返回的数据date
//		       $.each(res.first, function(i, i) {
//		            var str = '<div>姓名:' + item.name + '性别：' + item.sex + '</div>';
//		            document.write(str);
//		       })
				console.log(res)
				
		--		that.carDisplay(res);
//				that.getCookie()
			}
		})
		}
//		getCookie(){
////				获取cookie
//				this.goods = JSON.parse(getCookie("goods"));
////				4.渲染页面
//				this.carDisplay()
//			}
		
		carDisplay(res){
			var str = "";
			for(var i=0;i<res.length;i++){
				if(res[i].id ==$.cookie("goods")){
						console.log(res[i])
					str +=`
					<tr height="60" align="center">
							
							<td width="100">
								<input type="checkbox" name="" id="" value="" />
							</td>
							<td>
								<img src="${res[i].src}"/>
								<span>${res[i].g3}</span>
							</td>
							<td>L</td>
							<td>${res[i].g1}</td>
							<td>
								<input type="number" value="1">
							</td>
							<td>
								${res[i].g1}
							</td>
							<td><em data-index="">删除</em></td>
						</tr>
					`
				}
			}
			$(".m-c").children("table").children("#tbody").html(str);
//			new Magfinier();
			$(".xin").children("ul").children("li").children(".zheng").click(function(){
				$.cookie("goods",$(this).attr("index"))
				$(location).attr('href', './car.html')
			})
		
		}
	}	
		
	new car();
//-------------------------------------------------------------
//class Car{
//			constructor(options){
////				1.解析参数
//				this.tbody = options.tbody;
//				this.url = options.url;
//				
////				2.请求数据
//				this.load();
//				
////				5.绑定事件
//				this.addEvent();
//			}
//			load(){
//				var that = this;
//				ajax({
//					url:this.url,
//					success:function(res){
//						that.res = JSON.parse(res);
////						3.获取cookie
//						that.getCookie();
//					}
//				})
//			}
//			getCookie(){
////				获取cookie
//				this.goods = JSON.parse(getCookie("goods"));
////				4.渲染页面
//				this.display()
//			}
//			display(){
//				var str = "";
////				比对cookie和总数据
//				for(var i=0;i<this.res.length;i++){
//					for(var j=0;j<this.goods.length;j++){
//						if(this.res[i].goodsId == this.goods[j].id){
//							str += `
//							<tr height="60" align="center">
//							
//							<td width="100">
//								<input type="checkbox" name="" id="" value="" />
//							</td>
//							<td>
//								<img src="${res[i].src}"/>
//								<span>${res[i].g3}</span>
//							</td>
//							<td>L</td>
//							<td>${res[i].g1}</td>
//							<td>
//								<input type="number" value="1">
//							</td>
//							<td>
//								${res[i].g1}
//							</td>
//							<td><em data-index="">删除</em></td>
//						</tr>
//							
//							
//							`
//						}
//					}
//				}
//				this.tbody.innerHTML = str;
//			}
//			addEvent(){
//				var that = this;
//				this.tbody.addEventListener("click",function(eve){
//					if(eve.target.nodeName == "EM"){
////						找到点击商品的货号
//						that.id = eve.target.getAttribute("data-index");
////						删除DOM元素
//						eve.target.parentNode.parentNode.remove();
////						6.遍历cookie,找到符合条件的数据,做删除
//						that.changeCookie(function(index){
////							8.删除并再次设置回去
//							that.goods.splice(index,1);
//						})
//					}
//				})
//				this.tbody.addEventListener("input",function(eve){
//					if(eve.target.type == "number"){
////						10.先获取修改之后的数量,再获取当前商品的id
//						that.value = eve.target.value;
//						that.id = eve.target.parentNode.nextElementSibling.children[0].getAttribute("data-index");
////						11.遍历cookie,找到符合条件的数据,做修改
//						that.changeCookie(function(index){
//							that.goods[index].num = that.value;
//						});
//					}
//				})
//			}
//			changeCookie(callback){
////				7.找到cookie中符合条件的数据
//				for(var i=0;i<this.goods.length;i++){
//					if(this.goods[i].id == this.id){
//						break;
//					}
//				}
//				
//				callback(i);
//				
////				9.再设置回去
////				12.再设置回去
//				setCookie("goods",JSON.stringify(this.goods))
//			}
//		}
//		
//		new Car({
//			tbody:document.getElementById("tbody"),
//			url:"./data/goods.json"
//		})






