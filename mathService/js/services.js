app.factory("firstService", function() {
    var showButton = true;
    return {
        showButton: true,
        toggleButton: function() {
            showButton = !showButton;
        },
        number: {},
        operators: ['Add', 'Subtract', 'Multiply', 'Divide'],
        Add: function(x, y) {
            return x + y;
        },
        Subtract: function(x, y) {
            return x - y;
        },
        Multiply: function(x, y) {
            return x * y;
        },
        Divide: function(x, y) {
            return x / y;
        }
    }
})
