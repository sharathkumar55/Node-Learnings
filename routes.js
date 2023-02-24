const fs = require('fs')


function rqListener(req,res) {
    //console.log(req);
    const url  = req.url;
    if(url === '/')
    {
        res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
    res.write('</html>');
    return res.end();
    }
    if(url==="/message" && req.method ==='POST')
    {
            const body =[];
            req.on('data',(chunk)=>{
                console.log('chunk is'+chunk)
                body.push(chunk);
            });
            req.on('end',()=>{
                const parsedBody = Buffer.concat(body).toString();
                console.log('data is '+parsedBody);
                const message = parsedBody.split('=')[1]
            fs.writeFileSync('formData.txt',message);
    
            })
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
    }
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My Website</title></head>');
    res.write('<body><h5>This is test response </h5></body>')
    res.write('</html>');
    res.end();
    }
   
    module.exports = rqListener;