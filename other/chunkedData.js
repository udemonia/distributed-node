const fs = require('fs');

let cleanedTweets = '',
function cleanTweets(tweetsToClean) {
    //! algo to clean tweets
}
function doOnNewBatch(data) {
    cleanedTweets += cleanTweets(data)
}
const accessTweetsArchive = fs.createReadStream(`./tweetsArchive.json`);
accessTweetsArchive.on('data', doOnNewBatch)



