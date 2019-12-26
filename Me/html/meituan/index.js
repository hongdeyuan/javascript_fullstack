var express = require('express');
var url = require('url');
var router = express.Router();
var BufferHelper = require('bufferhelper');
const {spawn}  = require('child_process');
router.get('/', function(req, res, next) {
    var bufferHelper = new BufferHelper();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;
    console.log("data: " + params.data);
    console.log("CA: " + params.rootCA);
    const spawnObj = spawn('./tool', [params.data,params.rootCA], {encoding: 'utf-8'});
    spawnObj.stdout.on('data', function(chunk) {
        bufferHelper.concat(chunk);       
    });

    spawnObj.stdout.on('end',function(){
        var html = bufferHelper.toBuffer().toString();
        console.log(html);
        res.end(html);
    }) 
});