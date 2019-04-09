class Register{
			constructor(){
//				1.先准备好接口
				this.url = "http://www.icodeilife.cn/ctrl/register.php";
				
//				2.绑定事件
				this.init();
			}
			init(){
				var that = this;
				$("#btn").click(function(){
//					3.触发事件时开启ajax
					that.load()
				})
			}
			load(){
				$.ajax({
//					4.使用接口
					url:this.url,
//					7.成功之后的处理
					success:function(res){
						switch(res){
							case "0":
								$("span").html("用户名重复");break;
							case "1":
								$("span").html("注册成功，2秒后跳转到登录");
								setTimeout(()=>{
									location.href = "login.html";
								},2000)
								break;
							case "2":
								$("span").html("数据不全");break;
						}
					},
//					5.发送数据
					data:{
						tel:$("#user").val(),
						pass:$("#pass").val()
					},
//					6.发送之前loading
//					beforeSend:function(){
//						$("span").html("<img src='loading.gif'>")
//					}
				})
			}
		}
		
		new Register;		
