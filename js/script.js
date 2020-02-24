console.log('news-api'); //testing script

$(document).ready(function(){

  //accessing key from json file
  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  //reading users choice
    document.getElementById('submit').addEventListener('click',function(){
      search = document.getElementById('search').value;
      country = document.getElementById('country').value;
      category = document.getElementById('category').value;
      console.log(country, category, search); // actual parameter
      displayData(country, category, search); // actual parameter
    });

function displayData(co, ca, se){

  $.ajax({
    url: `http://newsapi.org/v2/top-headlines?q=${se}&country=${co}&category=${ca}&apiKey=${myKey}`,
    type: 'GET',
    data: 'json',
    success: function(data) {
      console.log(data);

      var img = data.articles[0].urlToImage;
      var title = data.articles[0].title ;
      var description = data.articles[0].description;
      console.log(img, title, description);

      var i;
      for (i = 0; i < data.articles.length; i++) {
        document.getElementById('result').innerHTML +=
        '<div class="col">' +
          '<div class="card" style="width: 18rem;">' +
            '<img class="card-img-top" src="' + data.articles[i].urlToImage + '" alt="">' +
              '<div class="card-body">' +
                '<h5 class="card-title">' + data.articles[i].title + '</h5>' +
                '<p class="card-text">' + data.articles[i].description + '</p>' +
                '<a href="#" class="btn btn-primary">Go somewhere</a>' +
              '</div>' +
          '</div>' +
        '</div>';
      } // for loop

    },  // success
    error:function(){
      console.log('error');
    } // error

  }); //ajax
  } // displayData ends here

    // Clear div
    document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('result').innerHTML = " ";
    });


  }); // document.ready
