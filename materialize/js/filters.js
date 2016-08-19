app.filter('kebab', function() {
    return function(input) {
        return input.replace(/_/g, "-");
    };
});

app.filter('camel', function() {
    return function(word, anotherWord, oneMore) {
        return word.replace(/-|_/g, " ").split(" ").map(function(ea, index) {
            if (index > 0) {
                return ea.charAt(0).toUpperCase() + ea.slice(1);
            } else {
                return ea;
            }
        }).join("") + " WTF???? " + anotherWord + " " + oneMore;
    }
})
