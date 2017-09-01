

function shout(string)
{


  return string.toUpperCase();
}
//var greeting = shout("hello");
//logShout(string);
function whisper(string)
{

  return string.toLowerCase();
}

//var quietGreeting = whisper(greeting);

function logShout(string)
{
  console.log(shout(string));
}

function logWhisper(string)
{
  console.log(whisper(string))
}

function sayHiToGrandma(string)
{
  if (string.toUpperCase())
  {

    return "YES INDEED!";
  }

  if(string.toLowerCase())
  {
    return "I love you, too!";

  }

  if(string === "I love you, Grandma.")
  {
    return "I love you, too.";
  }

}
