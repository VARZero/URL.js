module.exports = function(app)
{
   app.get('
   let randomStr = Math.random().toString(36).substring(2, 12);
   console.log(randomStr);' , function(req,res))   


     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}
