function textcheck(){
	window.location.href='textindex.html';
	}
	function jiami(){
		var user=document.getElementById("user").value;
		var pass=document.getElementById("password").value;
		var passarray=parseInt(pass).toString(16).split("");
		var j=user;
		for(var i=0;i<passarray.length;i++){
			j=escape(j+passarray[i]);
		}
		if(j=='%2525252525252525252525252525u4F55%2525252525252525252525252525u9759717281fb0f87880'){
			window.location.href='index.html';
		}
		else{
			alert('姓名或者身份证号错误');
		}
	}
	function check(){
		var user=document.getElementById("user").value;
		var pass=document.getElementById("password").value;
		checknumber=0;
		if ( user=="") {
			document.getElementById("checkuser").innerHTML="未填写!";
			checknumber++;
		}
		else{
				document.getElementById("checkuser").innerHTML="";
		}
		if (pass=="") {
			document.getElementById("checkpassword").innerHTML="未填写!"
			checknumber++;
		}
		else{
			document.getElementById("checkpassword").innerHTML="";
		}
		if(checknumber!=0)
			{
				return false;
			}
		else{
			jiami();
		}
	}