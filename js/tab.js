  document.addEventListener('DOMContentLoaded', function () {
    var $tab__link = $('.tab__link')
    var $tab_body_item = $('.tab-body__item')
    $tab__link.on('click', function (e) {
      var target = $(e.currentTarget)
      //タブの表示非表示
      $tab__link.removeClass('on')
      target.addClass('on')
      //タブの中身の表示非表示
      var num = target.data('tab-body')
      $tab_body_item.removeClass('on')
      $('.tab-body__item--' + num).addClass('on')
      if(num == 3){
        $(".tab-body div:nth-child(1)").addClass('no');
        $(".tab-body div:nth-child(2)").addClass('no');
        $(".tab-body").css("height","500px");
      }else{
        $(".tab-body div:nth-child(1)").removeClass('no');
        $(".tab-body div:nth-child(2)").removeClass('no');
        $(".tab-body").css("height","890px");
      };
    })
  })
