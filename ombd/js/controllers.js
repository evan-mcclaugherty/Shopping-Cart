var Home = function(s, params, http, state) {
    s.form = {};
    s.form.rotten = false;
    s.form.searchType = 'Movies';
    s.results = [];
    s.types = ['Movie', 'Series', 'Episode'];
    s.search = function() {
        http.get(`http://www.omdbapi.com/?s=${s.form.title}&type=${s.form.searchType}`).then(data => {
            s.results = data.data.Search;
            state.go('search', reload = true);
        })
        s.form.title = "";
    }
}

Home.$inject = ['$scope', '$stateParams', '$http', '$state'];

var Search = function(s, params, http) {

}
Search.$inject = ['$scope', '$stateParams', '$http'];

var Show = function(s, params, http) {
    s.headerData = {}
    s.results = [];
    http.get(`http://www.omdbapi.com/?i=${params.i}&tomatoes=${params.tomatoes}`).then(data => {
        s.headerData = data.data;
        var keys = Object.keys(data.data);
        keys.forEach(key => {
            if (data.data[key] !== "N/A") {
                s.results.push({
                    key: key,
                    value: data.data[key]
                })
            }
        })
        s.results = s.results.filter(key => {
            if (key.key == "Title" || key.key == "Actors" || key.key == "Plot" || key.key == "Poster") {
                return false;
            } else {
                return true;
            }
        })
    })
}
Show.$inject = ['$scope', '$stateParams', '$http'];

app.controller('home', Home);
app.controller('search', Search);
app.controller('show', Show);
