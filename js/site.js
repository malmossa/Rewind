const userInput = document.getElementById("userString");
const btn = document.getElementById("btnSubmit");
const alertBox = document.getElementById("alert");
const message = document.getElementById("message");

btn.addEventListener("click", displayReverseString);

function getUserSring()
{
  let userString = userInput.value;
  let stringArray = [];

  for (let i = 0; i < userString.length; i ++)
  {
    stringArray.push(userString[i]);
  }

  return stringArray;
}

function displayReverseString()
{
  let array = getUserSring();

  alertBox.classList.remove("invisible");

  for (let i = array.length - 1; i >= 0; i-- )
  {
    message.innerText += array[i];
  }

}
