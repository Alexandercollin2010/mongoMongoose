# Assignment Tracker
Project Purpose: To understand the way Document Databases function, and how to interact with them.

Create a MongoDB application to store student assignment information, including the assignment name, the student's identity, their score on the assignment, and the date it was turned in. Only the identity and date completed are required.

###Tying it all together

[x] When the page loads, display a list of all assignments that are in the database.

[x] Create text inputs that will create assignments using the "/assignments" POST route.

[x] In your Node application, create a folder called `models`. Within that folder create a mongoose model named `assignments` and give it some properties that an assignment would have.

[x] The minimum requirements are: assignment_name, student_name, score, and date_completed.

[x] Next you'll need to be able to access the assignments via an API. Use a combination of REST methods and Mongo methods to make a route for reading all assignments, and for creating new assignments.

[x] In addition, the route that reads all assignments should also accept an ID. When it receives the ID, it should be given to the mongoose function `Assignments.find` and return only that one. Otherwise if no ID is supplied, it should return all assignments.

[x] Create a basic NodeJS application with an Express server. Set up a router called index.js (for your home page) and also a router called assignment.js (for your assignment routes).

##HARD MODE

[] Once you have that working add a button next to each assignment record. When the button is clicked, it will delete the record from the database using Ajax. You will need to create a DELETE route, and will need to use `Assignments.findByIdAndRemove`.  Feel free to break this into two steps (first find, then remove).

##PRO MODE

[] Finally, add another button to each record on the index that allows the user to update the database entry. This will also need to be done via Ajax. Updating should either be done in a modal window, or a series of inputs that shows/hides when the edit button is clicked. You will need to pass the assignment ID and the form data to a new PUT route, and to `Assignments.findByIdAndUpdate`, or alternatively, `Assignments.findById` followed by a `model.save()`.
