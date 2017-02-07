var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title: "Article One|Tanveer Ahmad",
    heading:"Article One",
    date:"07 feb 2017",
    content:`
         <p>
            This is my first article on page article one.This page was posted on 06 february 2017 at 11.40 PM. 
        </p>
        <p>
            I am TANVEER AHMAD H.I am studying B.Tech Electronics and Communication Engineering- first year in Sastra University, Tanjore, TamilNadu.
        </p>
        <p>
            I am rellay happy to have you as a viewer of my webapp. For any comments or suggestions mail to 1999tanveer@gmail.com or tweet to @tanveersboa.
        </p>`
    
};


function createtemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmltemplate=`
    <html>
    
        <head>
            <title>
                ${title}
            </title>
            <meta name="view port" content="width=device-, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        
        <body>
        <div class="container">
            <div>
                <a href ="/"> Home </a>
             </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
        </body>
    
    
    </html>
`;

return htmltemplate;
    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function (req, res) {
    res.send(createtemplate(articleone));
});
    
app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
