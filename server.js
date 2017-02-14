var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
    'article-one':{
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
    },
    'article-two':{
        
        title: "Article Two|Tanveer Ahmad",
        heading:"Article Two",
        date:"09 feb 2017",
        content:`
             <p>
                This is my Second article on page article one.This page was posted on 06 february 2017 at 11.40 PM. 
            </p>
            <p>
               Coming Soon...
            </p>`
            
    },
    'article-three':{
        
        title: "Article Two|Tanveer Ahmad",
        heading:"Article Two",
        date:"09 feb 2017",
        content:`
             <p>
                This is my Second article on page article one.This page was posted on 06 february 2017 at 11.40 PM. 
            </p>
            <p>
               Coming Soon...
            </p>`
    }
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

var counter=0;
app.get('/counter', function(req,rea){
    counter=counter+1;
    res.send(counter.tostring());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articlename', function (req, res) {
    var articlename = req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});
    

app.get('/ui/1f602.png', function (req, res) {   //A smiling emoji.
  res.sendFile(path.join(__dirname, 'ui', '1f602.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));  
});

app.get('/ui/20160913_110849-min.png', function (req, res) {  //My photo
  res.sendFile(path.join(__dirname, 'ui', '20160913_110849-min.png'));  
});

app.get('/ui/salih.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'salih.jpg'));  
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
