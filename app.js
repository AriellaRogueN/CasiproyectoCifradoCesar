function progText(){
    var aswer = prompt ("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
    do{

        if(answer != ""){
            if(answer == "1") {
                cifrar();
            } else if (answer == "2") {
                descifrar();
            } else {
                alert("Ingrese una opción válida");
            }
        }
    } while (answer == "" || (answer != "1" && answer != "2"));
}

function cesar (yourphrase){
 var phrase = prompt("Ingrese la palabra a cifrar")
  phrase = phrase.toUpperCase ();    //Igualamos la palabra entregada a mayusculas.
 var letterInAscci = "";             //fijamos las variables e iteramos a traves de la palabra entregada.
 var num = 0;
 for (var i= 0; i < phrase.length; i++){  // obtenemos el codigo a traves de la formula
      phrase.charCodeAt(i);
      num = ((phrase.charCodeAt(i) + 33) % 26);
      letterInAscci = string.fromChartCode(num);     //Obtenemos la letra a traves del codigo

  }
}



























var code = "";
