### PROYECTO FINAl Cifrado cesar
#### 1. Pedir una frase a través de un prompt.Esta frase servirá de variable para el cifrado.

```javascript
var phrase = prompt("Ingrese la palabra a cifrar")```

#### 2. Debemos convertir las letras de la palabra obtenida a código Ascii.

#####2.1 Las letras deben ser igualadas a mayusculas.

```javascript
phrase = phrase.toUpperCase ();    
var letterInAscci = "";             
var num = 0;
for (var i= 0; i < phrase.length; i++){  
         phrase.charCodeAt(i);
num = ((phrase.charCodeAt(i) + 33) % 26); ```

#### 3.convertimos a letras el código obtenido.

```javascript
letterInAscci = string.fromChartCode(num); ```


#### ![Diagrama de flujo] URL=http://s1146.photobucket.com/user/AriellaRogue4/media/function%20cesar%201_zpsi9gq4q1y.jpg.html][IMG]http://i1146.photobucket.com/albums/o538/AriellaRogue4/function%20cesar%201_zpsi9gq4q1y.jpg[/IMG][/URL]
