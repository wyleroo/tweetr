
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


//Should create the entire tweet DOM structure
$(document).ready(function () {
  function renderTweets (tweetArray) {
    tweetArray.forEach(function(element) {
      let currentTweet = $(createTweetElement(element));
      $('.tweet').append(currentTweet);
    });
    return $('.tweet');
  }

  function createTweetElement (input) {
    let userName = input.user.name;
    let imgSource = input.user.avatars.small;
    let userHandle = input.user.handle;
    let textInput = input.content.text;
    let timeStamp = input.created_at;

    let header_username = $('<div></div>').addClass('username');
    let header_username_p = $('<p></p>');
    $(header_username_p).text(userName);
    $(header_username).append(header_username_p);
    let header_handle = $('<div></div>').addClass('handle');
    let header_handle_p = $('<p></p>');
    $(header_handle_p).append(userHandle);
    $(header_handle).append(header_handle_p);
    let header_image = $('<img></img>').attr('src', imgSource);
    let header = $('<header></header>');
    $(header).append(header_image, header_username, header_handle);

    let tweet_body = $('<div></div>').addClass('tweet-body');
    let tweet_body_p = $('<p></p>');
    $(tweet_body_p).text(textInput);
    $(tweet_body).append(tweet_body_p);

    let footer_timestamp_p = $('<p></p>');
    $(footer_timestamp_p).text(timeStamp);
    let footer_timestamp = $('<div></div>');
    $(footer_timestamp).append(footer_timestamp_p);
    let footer = $('<footer></footer>');
    $(footer).append(footer_timestamp);

    let article = $('<article></article>');
    $(article).append(header, tweet_body, footer);
    return article;
  }

    $('#donut-form').on('submit', function (event) {
    event.preventDefault();
    var donutType = $('#donut-type');
    var donutTypeText = donutType.val();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: {
        //Fill this in
      }
    }).done(function (newDonut) {
      $('#donut-form').removeClass('error');
      donutType.val('');
      donutType.focus();
      addDonut(newDonut);
    }).fail(function (err) {
      $('#donut-form').addClass('error');
    });
  });












  renderTweets(data);
});




