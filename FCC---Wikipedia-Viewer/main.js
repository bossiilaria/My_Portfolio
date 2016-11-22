$(document).ready(function()
{
  $('#search-trigger').click(function()
          {$('#search-input').toggleClass('search-input-open');
        });

      $(document).click(function(e)
      {
        if(!$(e.target).closest('.ngen-search-form').length)
        {
          $('#search-input').removeClass('search-input-open');
        }
      })
});
//For this app I'll visit a url to download json data on the fly (without a page reload) and use it on my website
//I only want to get data when the search button is clicked 

var resultsContainer = document.getElementById("show_results");
var btn = document.getElementById("btn");
//Set up event listener for when the button gets clicked
btn.addEventListener("click", function()
{
  /*
The process of sending a request and getting data without a page reload is known as Asynchronous Javascript And XML (AJAX)
Web browsers have built in tool called XMLhttprequest that will let us send/receive data
*/
var ourRequest = new XMLHttpRequest();
//The web browser expects the variable to use a method called OPEN; 
//With the method open I can send (in that case I would type 'POST' vs 'GET') or receive ('GET') data from the url provided as second argument
//ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json");

//onload is a method that tells browser what to do now that we load the data
ourRequest.onload = function()
{
  
  /*
  By default the browser doesn't know that the data is a json.
  We need to tell our browser not to see this as a string, but interpret it as a json data
  */
  var ourData = JSON.parse(ourRequest.responseText);
  //I want to show the data in the html
  renderHTML(ourData);
  
};
//Final step is send the request
ourRequest.send();
/*By default the browser doesn't know that the data is a json. 
We need to tell our browser not to see this as a string, but interpret it as a json data
*/
})
function renderHTML(data)  //This function's job is to create HTML content in the empty div show_results
{

  //Loop thru the array and do something for each element of the loop
 var htmlString = "";
  //Loop thru the array and do something for each element of the loop
  for(var i = 0; i < data.length; i++)
  {
    htmlString += "<p>" + data[i] .name + " is a " + data[i].species + "." + "</p>";
  }
  resultsContainer.insertAdjacentHTML('beforeend', htmlString)
  
}



