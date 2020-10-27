<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh"
　　　　　　　　 content="3;URL=https://altairsys.co.jp/test">
  <style type="text/css">
    body{
      font-size: 38px;s
    }
  </style>
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");
      //送信先メールドレス指定
      $to = "larsalex8@gmail.com";
      $email = $_POST['email'];
      $title = "ホームページよりお問合せが届きました";
      $content = $_POST['content']; //内容
      $contact= $_POST['contact']; 
      $seibetsu = $_POST['seibetsu'];
      $name01 = $_POST['familyname'];
      $name02 = $_POST['firstname'];
      $kana01 = $_POST['familynameKana'];
      $kana02 = $_POST['firstnameKana'];
      $tel01 = $_POST['tel01'];
      $tel02 = $_POST['tel02'];
      $tel03 = $_POST['tel03'];
      $checkbox = $_POST["checkbox"][0];
      $tel = $tel01 ."-" .$tel02 ."-" .$tel03;
      $text = "下記メッセージが届きました。\n\n名前\n姓：$name01\n名：$name02\n\nふりがな\nセイ：$kana01\nメイ：$kana02\n\n・性別\n$seibetsu\n\n・電話番号\n$tel\n\n・お問い合わせ内容\n$contact\n\n・メールアドレス\n$email\n\n・内容\n$content";
     
      $text02 = "下記メッセージを送信しました。\n\n名前\n姓：$name01\n名：$name02\n\nふりがな\nセイ：$kana01\nメイ：$kana02\n\n・性別\n$seibetsu\n\n・電話番号\n$tel\n\n・お問い合わせ内容\n$contact\n\n・メールアドレス\n$email\n\n・内容\n$content";
      $from = mb_encode_mimeheader(mb_convert_encoding('株式会社アルタイル', 'UTF-8', 'AUTO'))." <altair@www3831.sakura.ne.jp>";
      $head = "From: {$from}" . "\r\n" . 'X-Mailer: PHP/' . phpversion();
      if($email == "" || $contact == ""|| $checkbox != "0"){
          echo "不正アクセスです";
          echo "三秒後に戻ります";
      }else {
        if(mb_send_mail($to, $title, $text, $head)){
          echo "メールを送信しました";
          echo "3秒後に戻ります";
          mb_send_mail($email, "送信内容の確認", $text02 , $head);
        } else {
          echo "メールの送信に失敗しました";
          echo "3秒後に戻ります";
        }
    }

    ?>
    <script type="text/javascript"></script>
  </body>
</html>