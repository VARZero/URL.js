module.exports = function(app, fs)
{
        app.get('/link/:linkid',function(req,res){ 
		fs.readFile(__dirname+"/../json/links.json", 'utf8', function(err,data) {
            var link = JSON.parse(data);
            if (!link[req.params.linkid]) {res.send("해당 링크 없음");}
            else {
                res.send('<html><meta http-equiv="refresh" content="0; url=https://'+link[req.params.linkid]["url"]+'"></meta></html>');
            }
		});
    });
    app.get('/linkadd',function(req,res){
    	fs.readFile(__dirname+"/../json/links.json", 'utf8', function(err,data) {
    		var c_link = JSON.parse(data);
    		let randomStr;
    		do{
                randomStr = Math.random().toString(36).substring(2,12); 
                console.log(randomStr);
    		} while(c_link[randomStr]);
    		// 위에 다섯줄 랜덤값 겹치는지 확인하는 코드
    	
            console.log(req.query.url)
    		c_link[randomStr] = {};
            c_link[randomStr].url = req.query.url;
    		fs.writeFile(__dirname+"/../json/links.json", JSON.stringify(c_link, null, '\t'), 'utf8', function(err,data) {
    			res.send(randomStr+ "주소에 연결 완료!")
    		});
    	});
    }) 
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}
