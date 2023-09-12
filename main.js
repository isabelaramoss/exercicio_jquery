$(document).ready(function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    let tarefa = $('input').val();
    let lista = $('.lista');
    let item = `<li>${tarefa}</li>`

    lista.append(item);

    $('input').val('');
  });

  $('ul.lista').on('click','li',function(){
    $(this).addClass('concluido');
  });

});