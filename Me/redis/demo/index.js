var redis = require("redis"),
// redis.createClient(port, host, option)
client = redis.createClient({host: '127.0.0.1', port: 6379, auth_pass: 'admin'});

// 如果需要切换数据库，如下操作
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});
client.on('connect', () => console.log('------ Redis connection succeed ------'));

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});