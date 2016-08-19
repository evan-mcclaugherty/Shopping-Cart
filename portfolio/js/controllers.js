var Portfolio = function(s, params, http) {
    s.operator = params.operator;
    s.operand1 = parseInt(params.operand1);
    s.operand2 = parseInt(params.operand2);
    s.answer;
    switch (s.operator) {
        case 'add':
            s.answer = s.operand1 + s.operand2;
            break;
        case 'divide':
            s.answer = s.operand1 / s.operand2;
            break;
        default:
            s.answer = "Only recognizes 'add' or 'divide' /add/4/5 or /divide/4/5"
    }
}
Portfolio.$inject = ['$scope', '$stateParams', '$http'];


var Resume = function(s, params, http) {
    s.operator = params.operator;
    s.x = parseInt(params.x);
    s.y = parseInt(params.y);
    s.answer;
    switch (s.operator) {
        case 'add':
            s.answer = s.x + s.y;
            break;
        case 'divide':
            s.answer = s.x / s.y;
            break;
        default:
            s.answer = "Only recognizes 'add' or 'divide' /add/4/5 or /divide/4/5"
    }
}
Resume.$inject = ['$scope', '$stateParams', '$http'];


var Bio = function(s, params, http) {
    s.view = {};
    s.data = {};
    s.submit = function() {
        var data = {
            message: {
                name: s.view.name,
                content: s.view.content
            }
        }
        //http.post('https://messagehttpservice.herokuapp.com/messages', data);
    };

    http.get('https://messagehttpservice.herokuapp.com/messages').then(data => {
        s.view.data = data.data.filter(post => {
            return post.name != null && post.content != null;
        })
    });
}
Bio.$inject = ['$scope', '$stateParams', '$http'];

app.controller('resume', Resume);
app.controller('portfolio', Portfolio);
app.controller('bio', Bio);
