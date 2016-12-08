$(document).ready(function()
{
  $('#search-trigger').click(function()
          {$('#search_input').toggleClass('search-input-open');
        });

      $(document).click(function(e)
      {
        if(!$(e.target).closest('.ngen-search-form').length)
        {
          $('#search_input').removeClass('search-input-open');
        }
      });

$("#search_btn").click(function() //I want stuff to happen when I click on the search button 
      {
        /*I don't know what the user will want to search so I create a variable where to store
        whatever entry the user inputs*/
        var userEntry = $("#search_input").val();
        /*Now the question that I wasn't able to answer until this week: how do I know what my url 
        will look like? This is how I understand it: from the main wikipedia api page I can try a bunch of
        actions. In my case a good action seems to be the action=opensearch. When I type in search in the
        wikipedia main page I get several urls to try out. I'm interested in the Interactive experience so 
        I start from https://en.wikipedia.org/w/api.php?action=opensearch. Then I want the user to
        be able to search anything they want. So I add &search" + userEntry + "": 
        https://en.wikipedia.org/w/api.php?action=opensearch&search" + userEntry + "".
        What goes now inside those quotes? The format, that is json, and a function that will process
        the json data. This function is called callback: https://en.wikipedia.org/w/api.php?action=opensearch&search" + 
        userEntry + "&format=json&callback=?"
        */ 
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userEntry + "&format=json&callback=?";
        //Now it's time to setup our ajax
        $.ajax(
        {
          type: "GET",
          url: url,
          async: false,
          dataType: 'json',
          success: function(data)
          {
             // console.log(data[1][0]);This line tests that elements of the array are printed in the console
              /*
              My goal is not to print in the console, but list the array elements in the HTML. To do that I
              can use prepend as shown below
              */
              //$("#show_results").prepend(data[1][0]); This line tests that prepend works
              /*
              At this point I am ready to display the entries in a list, by looping thru the data.
              Remember to wipe out everything that may be in the HTML already*/
              $("#show_results").html("");
              
              for(var i = 0; i < data[1].length; i++)
                
              {
                $("#show_results").append("<li><a href = " + data[3][i] +" target='_blank' >" + data[1][i]
                  + "</a><p>"+data[2][i]+" </p></li>");
              }
              
              
          },
          error: function(errorMessage)
          {
            alert("Error!");
          }
        }); //ends ajax
      });//ends search_button
        
      });//ends document.ready
  

  


      
/*
     $("#search_btn").on("click", function()
     {
        superagent.get('https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q39246&format=json&origin=*').end(function(err, res)
        {
          console.log(res);
          var results = document.getElementById('show_results');
          results.innerHTML = res;
        })
     })
        

/*
https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=
superagent.get('https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q39246&format=json&origin=*').end(function(err, res)
{
  console.log(res);
})

https://www.youtube.com/watch?v=KiRwQpONE18
*/

