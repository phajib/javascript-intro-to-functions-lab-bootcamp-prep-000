//shout function
function shout(string){
  return string.toUpperCase()
}

//whisper function
function whisper(string){
  return string.toLowerCase()
}

//logShout function
function logShout(string){
  console.log(string.toUpperCase())
}

//logWhisper function
function logWhisper(string){
  console.log(string.toLowerCase())
}

//sayHiToGrandma function
function sayHiToGrandma(string){
var lowercase = string
  if(string.toLowerCase() === string)
  {
    console.log('I can\'t hear you')
    return string.toLowerCase()
  }else {
    console.log('hello')
  }
  return string

var uppercase = `string`
  if (uppercase.toUpperCase() === uppercase){
    console.log('YES INDEED!')
  }

  if (`string` === 'I love you, Grandma'){
      console.log("I love you too")
  }
}
