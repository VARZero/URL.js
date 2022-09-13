module.exports = function(app)
{
   
   app.get('/:linkid', function(req,res){
      res.render('랜덤코드.html')
   })

   app.get('/linkadd', function(req,res){
      let randomStr = Math.random().toString(36).substring(2, 12);
      console.log(randomStr);
   })


     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}
