function setUser() { // Cria o cookie com as chaves "username" e expires
    let userid = "username=" + document.getElementById( "user" ).value;
  
    let d = new Date();
    d.setTime( d.getTime() + 10 * 60 * 1000 ); // Este cookie expira em 10 minutos (10*60*1000 miliseg.)
    let expires = "expires="+ d.toUTCString();
  
    let c  = userid + ";" + expires + ";path=/";
    document.cookie = c;
    document.getElementById( "verificar" ).innerHTML = "cookie enviado: " + c;
  }
  
  function getUser() { // Procura o valor da chave "username" no cookie
    let decodedCookie = decodeURIComponent(document.cookie); // Limpa caracteres especiais no cookie
    let ca = decodedCookie.split( ';' ); // Quebra o cookie numa lista de strings nos ";"
    for( let i = 0; i < ca.length; i++ )
      if( ca[i].indexOf( "username=" ) == 0 ) // Se tem a chave "username="
        return ca[i].substring( "username=".length, ca[i].length ); // retorna seu valor
  
    return ""; // Não tem "username=" no cookie
  }
  
  function getExpires() { // Procura o valor da chave "expires" no cookie
    let decodedCookie = decodeURIComponent(document.cookie); // Limpa caracteres especiais no cookie
    let ca = decodedCookie.split( ';' ); // Quebra o cookie numa lista de strings nos ";"
    for( let i = 0; i < ca.length; i++ )
      if( ca[i].indexOf( "expires=" ) == 0 ) // Se tem a chave "expires="
        return ca[i].substring( "expires=".length, ca[i].length ); // retorna seu valor
  
    return ""; // Não tem "expires=" no cookie
  }
  