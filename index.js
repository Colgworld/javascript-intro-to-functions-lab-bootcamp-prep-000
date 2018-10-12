function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log('hello')
  return string.toLowerCase()
}

function sayHiToGrandma(string) {

  var uppercase = "HELLO!"
   // true
  var lowercase = 'hello!'
   // true

  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  }
  else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }
  else if("I love you, Grandma") {
    return "I love you, too."
  }
}
