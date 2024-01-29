$(function(){
  $('.menu-trigger').on('click', function(event){
    //.menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');//トグル処理、該当のclass属性がある場合にはclassが削除され、ない場合は追加される。
    //$(this)アイコンが切り替わる。クリックされた要素自身を表す。
    $('#sp-menu').fadeToggle();//要素のフェードイン・フェードアウトを切り替えるメソッド
    //このメソッドを使って開いた時の状態を設定する
    //sp-menuが開いたときに処理されるように設定する
    //menuのところに設定している
    event.preventDefault();
  });
});