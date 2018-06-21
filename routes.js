// Bring in Models
let Article = require('./models/article');


// Home Route
exports.home = (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.error(err);
        } else {
            res.render('home', {
                text: "Welcome to the Home Page",
                articles: articles
            });
        } 
    });
};




// About Route
exports.about = (req, res) => {
    res.render('about', {});
};