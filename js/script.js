$(function(){
  $('.menu-trigger').on('click', function(event){
    //.menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');//トグル処理、該当のclass属性がある場合にはclassが削除され、ない場合は追加される。
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});