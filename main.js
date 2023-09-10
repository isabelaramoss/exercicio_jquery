$(document).ready(function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    let tarefa = $('input').val();
    let lista = $('.lista');
    let item = `<li>${tarefa}</li>`

    $(item).appendTo(lista)
  });

  $('ul').on('click','li',function(){
    $(this).addClass('concluido');
  });

})