# front-end-assessment


``1``
 Create a basic angular app that includes a mainCtrl,mainService,app.js and routes.js The index.html file is included in this repo so you dont need to add one. ***DONE***

``2``
 Config your router so that the home.html loads first. Also set up the routes for the about.html,blog.html and shop.html. ***DONE***

``3``
Connect the navigation links that are located in the index.html to point to the corresponding page. ***DONE***

``4``
 After you have your routing setup you can start working on getting the data you'll need.
 For the shop.html view your going to need to make an api call to https://dev-assessment.firebaseio.com/products.json to get all the products. **DONE**

 All the styles are completed for you already so you'll just need to display the data in the right spot. LOOK FOR COMMENTS. **DONE**

 After your data is displaying correctly you'll need to get the product-details view configured.
 ``
 In your routes file add a route called details. This route is going to have an id being passed in. The url will look like this detail/:id.
 Now that the route is setup you can finish the links in the shop.html file.

 The link that points to the product detail will need to pass along the id of the item being clicked ui-sref="details(id: the id )"".

``5``
This will be the hardest view to get working. You'll need to check the state params for the id being passed along in the route.
after you have that id you'll need to make an api call to https://dev-assessment.firebaseio.com/products/ + the id + .json being passed in the route.
This will return the specific item based off the id you passed.
Put that item on $scope and display in the view.


# Congratulations your have finished the assessment
