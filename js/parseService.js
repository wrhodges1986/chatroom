var app = angular.module('chatroom');

app.service('parseService', function($http, $q){
  //Here you'll need to create two methods. One called postData and the other called getData.


  //On the line below create the postData method. This method will add data to the parse backend.
  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.
  //Make sure that in your post request, the format of the data you sent to parse is an object with a key of text and a value of whatever the message was. IE {text: message}
  
  //postData method here
	this.postData = function(myData) {
		// The "return" is not necessary here in postData
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/chat',
			data: {text: myData}
		});
	}

  //On the line below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
  
  
	this.getData = function() {
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
		});
	}
  
  
  /* IGNORE THE PARAGRAPH BELOW! WE DIDN'T COVER THIS TODAY */
     /*Also, we want to be able to manipulate the data we get back from parse before we pass it back to our controller. The problem is 
     when we're making a request, we don't know when the response will come back. This sound like a perfect use case for a promise. We can 
     create a promise that resolves with the correct data from parse whenever our $http get requests finishes. 
     Because of the way parse sends back their data, let's resolve our promise with data.data.results if you had the original parameter be date like below.
    .then(function(data){
      deferred.resolve(data.data.results)
    })
  */
  
  //STOP IGNORING. Be sure to return whatever gets returned from $http so you can call .then in your controller.
  
  //getData method here
});
