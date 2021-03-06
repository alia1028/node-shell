const request = require('request')


function curl (url) {
    request(url, function(err, res, body) {
    process.stdout.write(body)
    process.stdout.write("\nprompt > ");
});
}

module.exports = curl;