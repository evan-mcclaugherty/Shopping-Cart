app.factory("firstService", function() {
    return {
        sayHi: function() {
            return "Hello"
        },
        sayGoodbye: function() {
            return "Goodbye!"
        },
        getAllUsers: function() {
            // some AJAX call to our database to get all the users
        },
        addUser: function(user) {
            // another AJAX call to our database to add a user
        }
    }
})
