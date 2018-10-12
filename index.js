function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return whisper.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log('hello')
  return string.toLowerCase()
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

function sayHiToGrandma(string) {

  var lowercase = 'hello!'
  var uppercase = "HELLO!"

  if (lowercase.toLowerCase() === lowercase) {
    return "I love you, too."
  }
  else if ("HELLO") {
    return "YES INDEED!"
  }
  else {
    return "I love you, too."
  }
}
