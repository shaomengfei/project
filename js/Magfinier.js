
function Magfinier(){
//			this.sbox=document.querySelector(".m-c");
//			this.pbox=this.sbox.children[1];
//			this.bbox=document.querySelector(".m-y");
//			this.bimg=this.bbox.children[0];				
			
			this.addEvent();
		}
		Magfinier.prototype.addEvent=function(){
			var that=this;
			$(".main").on("mouseover",".m-c",function(){
				that.mc = this;
				that.show();
//				console.log(this);
			})
			$(".main").on("mouseout",".m-c",function(){
				that.hide();
//				console.log(this);
			})
//			this.sbox.onmouseover=function(){
//				that.show();
//			}
//			this.sbox.onmouseout=function(){
//				that.hide();
//			}
		}
		Magfinier.prototype.show=function(){
//			this.pbox.style.display="block";
//			this.bbox.style.display="block";
			console.log(this.mc);
			this.addMove();
		}
		
		Magfinier.prototype.hide=function(){
//			this.pbox.style.display="none";
//			this.bbox.style.display="none";
		}
		
		
		Magfinier.prototype.addMove=function(){
			var that=this;
//			this.sbox.onmousemove=function(eve){
//				var e=eve || window.event;
//				that.pBoxMove(e)
//			}
		}
		Magfinier.prototype.pBoxMove=function(e){
			
			this.l=e.offsetX-this.pbox.offsetWidth/2
			this.t=e.offsetY-this.pbox.offsetHeight/2
			if(this.l<0){this.l=0};
			if(this.t<0){this.t=0};
//			if(this.l>this.sbox.offsetWidth-this.pbox.offsetWidth){
//				this.l=this.sbox.offsetWidth-this.pbox.offsetWidth;
//			}
//			if(this.t>this.sbox.offsetHeight-this.pbox.offsetHeight){
//				this.t=this.sbox.offsetHeight-this.pbox.offsetHeight
//			}
//			this.pbox.style.left=this.l+"px"
//			this.pbox.style.top=this.t+"px"
//			
//			this.x=this.l/(this.sbox.offsetWidth-this.pbox.offsetWidth)
//			this.y=this.t/(this.sbox.offsetHeight-this.pbox.offsetHeight)
//			
			this.move();
		}
		Magfinier.prototype.move=function(){
//			this.bimg.style.left=-(this.bimg.offsetWidth-this.bbox.offsetWidth)*this.x+"px"
//			this.bimg.style.top=-(this.bimg.offsetHeight-this.bbox.offsetHeight)*this.y+"px"
		}
		
//		
//		----------------------------------------------------------
		
	class xiangqing{
		constructor(){
			this.goods()
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
				
				that.goodsDisplay(res);
  			}
		})
		}
		
		goodsDisplay(res){
			var str = "";
			for(var i=0;i<res.length;i++){
				if(res[i].id ==$.cookie("goods")){
						console.log(res[i])
					str +=`<div class="m-l">
        		<div class="lass">
        			<img src="${res[i].src}">
        			
        		</div>
        		<div class="lass">
        			<img src="${res[i].src}">
        			
        		</div>
        	</div>
        	<div class="m-c">
        		
        		<img src="${res[i].src}">
        		<span></span>
				<p></p>
				
        	</div>
        	<div class="m-y">
				<img src="${res[i].src}">
			</div>
        	
        	<div class="m-r">
        		<div class="m-r-t">
        			<span>特惠价：${res[i].g1}</span>
        			<a>充100返100，立即充值</a>
        		</div>
        		<div class="m-r-c">
        			<div class="div1">
        				<span>颜色：</span>
        				<div>
        					<ul>
        						<li>黑色</li>
        						<li>白色</li>
        					</ul>
        				</div>
        			</div>
        			<div class="div2">
        				<span>尺寸：</span>
        				<div>
        					<ul>
        						<li>XS</li>
        						<li>S</li>
        						<li>M</li>
        						<li>L</li>
        						<li>XL</li>
        					</ul>
        				</div>
        			</div>
        			<div class="div3">
        				<span>数量：</span>
        				<select>
        					<option value="">1</option>
        					<option value="">2</option>
        					<option value="">3</option>
        					<option value="">4</option>
        				</select>
        				
        			</div>
        			<div class="div4">
        				<span>已选：</span>
        				<span>白色</span>
        			</div>
        			<div class="div5">
        				<a>
	        				<input type="button" class="btn1" value="立即购买" />
	        				<input type="button" class="btn2" value="加入购物车" />
        				</a>
        			</div>
        		</div>
        		<div class="m-r-b"></div>
        		</div>`
				}
			}
			$(".main").html(str);
//			$(".xin").children("ul").children("li").children(".zheng").click(function(){
//				$.cookie("goods",$(this).attr("index"))
//				$(location).attr('href', './xiangqingye.html')
//			})
		
		}
	}	
		
	new xiangqing();
	new Magfinier();
		
		
		