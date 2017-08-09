
import praw

reddit = praw.Reddit('bot1')

subreddit = reddit.subreddit("learnpython")

for submission in subreddit.hot(limit=5):
    print("Title: ", submission.title)
    print("Text: ", submission.selftext)
    print("Score: ", submission.score)
    print("---------------------------------\n")

dir(submission)
 
['approve',
'approved_by',
'author',
 
'domain',
'downs',
'downvote',
'edit',
'edited',
 
'saved',
 
'score',
'secure_media',
'secure_media_embed',
'selftext',
'selftext_html',
 
'title',
 
'ups',
'upvote',
'url',
'user_reports',
'visited',
'vote']

$(document).on('click', '.hotpostsButton', function(){
    $('#hotposts').empty();
    $('.hotpostButton').removeClass('active');
    $(this).addClass('active');

    var type = $(this).data('type');
    var queryURL = "https://www.reddit.com/r/hot/.json";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;

         for(var i=0; i < results.length; i++){
             var hotpostDiv = $('<div class="hotpost-item">')

             var rating = results[i].rating;

             var p = $('<p>').text( "Rating: " + rating);

                   {
                    kind: "Listing"
                     -
                     data: {
                     count: ""
                     show: ""
                     sr_detail: ""
                     limit: [ ]
                     after: null
                     before: null
                          }
}
             hotpostDiv.append(p)
             hotpostDiv.append(hotpostImage)

             $('#hotposts').append(hotpostDiv);
         }
        
    }); 
});


$(function() {
    //do on page load
    populateButtons(hotposts, 'hotpost', '#hotpost');
});

var hotposts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

//function to make buttons and add to page
function populateButtons(arrayToUse, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++){
        var a = $('<button>')
        a.addClass(classToAdd);
        a.attr('data-type', arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }

}


$(document).on('click', '.hotpostImage', function(){
    var state = $(this).attr('data-state'); //.data('state') won't work the way we expect
    
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

$('#addhotpost').on('click', function(){
    var newhotpost = $('input').eq(0).val();

    if (newhotpost.length > 5){
        hotposts.push(newAnimal);
    }

    populateButtons(hotposts, 'hotpostButton', '#hotpostButtons');

for submission in subreddit.hot(limit=5):
    print("Title: ", submission.title)
    print("Text: ", submission.selftext)
    print("Score: ", submission.score)
    print("---------------------------------\n")for submission in subreddit.hot(limit=5):
    print("Title: ", submission.title)
    print("Text: ", submission.selftext)
    print("Score: ", submission.score)
    print("---------------------------------\n")

    return false;
});