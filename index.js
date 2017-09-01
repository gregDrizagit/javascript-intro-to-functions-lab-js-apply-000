

function shout(string)
{

  logShout(string); 
  return string.toUpperCase();
}
var greeting = shout("hello");

function whisper(string)
{
  logWhisper(string);
  return string.toLowerCase();
}
var quietGreeting = whisper(greeting);

function logShout(string)
{
  console.log(string);
}

function logWhisper(string)
{
  console.log(string)
}
function sayHiToGrandma(string)
{
  if(string === lowercase)
  {
    return "I can't hear you!";
  }else if (string === uppercase)
  {

    return "YES INDEED!";

  }else if (string === "I love you, Grandma.")

    return "I love you, too";
}

sayHiToGrandma(greeting);
