// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

function decode(message) {
  let stack = [];
  let result = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === "(") {
      stack.push(result);
      result = "";
    } else if (message[i] === ")") {
      let temp = stack.pop();
      result = temp + result.split("").reverse().join("");
    } else {
      result += message[i];
    }
  }
  return result;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
