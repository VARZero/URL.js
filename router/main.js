module.exports = function(app)
{
   app.get('/랜덤코드 주소', function(req,res){
      res.render('랜덤코드.html')
   })


     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}
