alert('Faça seu cadastro abaixo:') + '\n'; 



alert('Sua senha deve conter: ') + "\n";



alert('* No mínimo 6 caracteres '), 
alert('* No mínimo 1 digito '), 
alert('* No mínimo uma letra maiúscula '), 
alert('* No mínimo uma letra minúscula '), 
alert('* no mínimo um caractere especial | ( !,@,#,$,%,ˆ,&,*,(,),-,+ )');

  

var usuario = prompt('Usuário:')
var senha = prompt('Senha:')

var maiuscula = /[A-Z]/;

var minuscula = /[a-z]/;

var especiais = /[!|@|#|$|%|ˆ|&|*|(|)|-|+]/;

var numeros = /[0-9]/;
  
  if(senha.length >= 6 + (maiuscula.test(senha)) +  (minuscula.test(senha)) + (especiais.test(senha)) + (numeros.test(senha))){
    alert ('Senha segura cadastrada com sucesso!')

  }
  
  else {
      alert('Sua senha deve ter mais ' + ( 6 - senha.length) + ' caracteres contendo no mínimo: 1 letra maiúscula, 1 letra minúscula, 1 digito e 1 caractere especial para ser considerada segura.');
    }

    

  
  
   
    


  
