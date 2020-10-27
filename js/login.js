	var apikey = "b8c1447caab373a024639158d67ecfcbd56660e6a02f1af9430dc324e9d0e166";
	var clientkey = "2e772540e92f9f2bd1491076e14414f7389ab590b64a3e4e62045fe1017ae524";
	var ncmb = new NCMB(apikey, clientkey);
	var count = 0;
	function login(){
		if( count == 0){
			var user = $("#username").val();
			var password = $("#password").val();

			// ユーザー名とパスワードでログイン
			ncmb.User.login(user, password)
				.then(function(data){
					alert("ログインに成功しました");
					setTimeout(loginIn , 2000);
				})
				.catch(function(err){
					alert("ログインに失敗しました");
					location.reload();
				});
			//ダブルクリック禁止
			count ++;
		}
	}

	function loginIn(){
		location.href ="login.html";
	}