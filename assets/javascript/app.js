//test
console.log('hello');

let food = [];
//zomato api bffe3bea078cbc9eee86b514973b129e
$(document).ready(function(){

// $("#search").on('click', function(){
//   search = $("#input").val();
// });


/*add this to your html -> <script src="https://storage.googleapis.com/code-snippets/rapidapi.min.js"></script> */
var rapid = new RapidAPI("default-application_5b85e35fe4b02d6cfa69e89b", "39d8805b-7d44-474d-92c4-b6d5a8def142");
$("#search").on('click', function(){
rapid.call('Zomato', 'search', { 
	'apiKey': 'bffe3bea078cbc9eee86b514973b129e',
	'coordinates': '30.26875275473545, -97.7448378504939',
	'count': '50',
	'radiusSearch': '1500',
	'entityId': '0',
	'searchQuery': $("#input").val(),
	'order': 'desc',
	'sort': 'rating'

}).on('success', function (payload) {
   /*YOUR CODE GOES HERE*/ 

   //empty list when new search 
   $("#card_list").empty();
   food = payload.result.restaurants;

   //provide cards for each result
   for(i=0; i< food.length; i++){

     //test
  console.log(payload.result.restaurants[i]);

  //target restaurant name
  let name = food[i].restaurant.name;
  //test
  console.log(name + ' name');
  //target restaurant address
  let address = food[i].restaurant.location.address;
  //test
  console.log(address + ' address');
   //target restaurant price
  let priceRange = food[i].restaurant.price_range;
  //test
  console.log(priceRange + ' price_range');
 //target restaurant rating
  let rating = food[i].restaurant.user_rating.aggregate_rating;
  //test
  console.log(rating +' rating');
 //target restaurant image
  let image = food[i].restaurant.featured_image;
  //test
  console.log(image +' image');

  // <div class="card-reveal">
  //         <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right"> X </i></span>
  //         <p>Here is some more information about this product that is only revealed once clicked on.</p>
  //       </div>

  //card for the food result
  let foodDiv = $("<div class='card col-sm-3 m-3' data=''>");
  console.log(foodDiv);
  //create image for card
  let imageDiv = $("<div class='card-image waves-effect waves-block waves-light'> <img class='activator' src='"+image+"'></div>");
  //create content div
  let contentDiv = $("<div class='card-content'> <span class='card-title activator grey-text text-darken-4'>"+ name +"<i class='material-icons text-light bg-danger p-1 rounded right'>more</i></span></div>");
  //creating div to hold more content pop-up
  let moreContent = $("<div class='card-reveal'>");
  //create element for content
  //display name on the card
  let pName = $("<p>").text(name);
  //display rating on the card
  let pRating = $("<p>").text("Rating: " + rating);
  //display price on the card
  let pPrice = $("<p>").text("Price Range: " + priceRange);
  //display address on the card
  let pAddress = $("<p>").text(address);

  //append content to card
  foodDiv.append(imageDiv)
  foodDiv.append(contentDiv)
  foodDiv.append(moreContent);
  moreContent.append(pName, pRating, pPrice, pAddress);
  //populate cards in the card list div
  $("#card_list").prepend(foodDiv);

  //add data attribute to the card equal to the restaurant's rating
  foodDiv.attr("data", priceRange);
  //test
  console.log($(".card").attr("data") + ' ayn');

  
$(".card").on('click', function(){
  console.log("yes");
  $(".card").classList.toggle("show");
})

  // $(".pRange").on('click', function(){
  //   let range = $(this).attr('data');
  //   console.log(range);

  //   $(".card").hide();

  //   if($(".card").attr('data') === range){
  //     console.log($(this) +' f');
  //     $(".card").each(function(){
  //       $(this).show();
  //     })
  //   }
  // })
   };

}).on('error', function (payload) {
	 /*YOUR CODE GOES HERE*/ 
});



});

})