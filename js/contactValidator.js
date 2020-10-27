
function checkForm(){
			var email = $("#email").val();//メールアドレス
      var tel01 = $("#tel01").val();//TEL一番目
      var tel02 = $("#tel02").val();//TEL二番目
      var tel03 = $("#tel03").val();//TEL三番目
      var familyname = $("#familyname").val();
      var firstname = $("#firstname").val();
      var familynameKana = $("#familynameKana").val();
      var firstnameKana =  $("#firstnameKana").val();
      var content = $("#content").val();
      var select = $("#select").val();
      var errorList = new Array();
      $("#errorList").html("");

      if(select == 0){
        errorList.push('質問内容を選択してください。');
        $("#selectError").html("<br><div style='color:red;font-weight: bold'>*質問を選択してください。");
      }else{
        $("#selectError").html("");
      }

      if(familyname == "" || firstname == ""){
        errorList.push('氏名を入力してください。');
        $("#nameError").html("<br><div style='color:red;font-weight: bold'>*氏名を入力してください。");
      }else{
        $("#nameErrors").html("");
      }

      if(familynameKana == "" || firstnameKana == ""){
        errorList.push('フリガナを入力してください。');
        $("#furiError").html("<br><div style='color:red;font-weight: bold'>*フリガナを入力してください。");
      }else{
        $("#furiError").html("");
      }

      if(tel01 == "" || tel02 == "" || tel03 == ""){
        errorList.push('電話番号を正式に入力してください。');
        $("#telError").html("<br><div style='color:red;font-weight: bold'>*電話番号を正式に入力してください。");
      }else if(isNaN(tel01) || isNaN(tel02) || isNaN(tel03)){
        errorList.push('電話番号が数値ではありません。');
        $("#telError").html("<br><div style='color:red;font-weight: bold'>*電話番号が数値ではありません。");
      }else{
        $("#telError").html("");
      }

			if(email == ""){
				errorList.push('メールアドレスを入力してください。');
        $("#emailError").html("<br><div style='color:red;font-weight: bold'>*メールアドレスを入力してください。");
      }else if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
        errorList.push('メールアドレスの形式が違います。')
        $("#emailError").html("<br><div style='color:red;font-weight: bold'>*メールアドレス形式が違います。");
      }else{
        $("#emailError").html("");
      }

      if(content == ""){
        errorList.push('本文が入力されていません。')
        $("#contentError").html("<br><div style='color:red;font-weight: bold'>*本文が入力されていません。");
      }else{
        $("#contentError").html("");
      }
 
      if(errorList.length == 0){
				$("#submit").trigger("click");  
			}else{
        $("#errorList").append("<div style='color:red;font-weight: bold'>*下記エラーが発生しています。");
        for(i = 0 ; i<errorList.length ; i++){
          $("#errorList").append("<div style='color:red;'>・"+errorList[i]);
        }
      }
		}
