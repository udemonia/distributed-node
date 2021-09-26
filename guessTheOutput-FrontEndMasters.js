const fs = require('fs')
function useImportedTweets(errorData, data) {
    const tweets = JSON.parse(data)
    console.log(tweets.tweet1)
}
function immediately() {console.log('Run me last 😀')}
function printHello() {console.log('Hello')}
function blockFor500ms() {
    //! blocking code here
}
setTimeout(printHello, 0)
fs.readFile('./tweets.json', useImportedTweets)
blockFor500ms()
console.log('Me First')
setImmediate(immediately)




