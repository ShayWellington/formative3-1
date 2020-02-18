console.log('news-api'); //testing script

$(document).ready(function(){

  //accessing key from json file
  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  //reading users choice
    document.getElementById('submit').addEventListener('click',function(){
      country = document.getElementById('country').value;
      category = document.getElementById('category').value;
      console.log(country, category); // actual parameter
      // var apiUser = 'News API';
      displayData(country, category); // actual parameter
    });

function displayData(co, cu){
  if
}

});
