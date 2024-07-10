
// 先抓表格和需要的id
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// 當提交時要發生的事情+預防預設
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // 上面是比較一般的方法、下面比較高級，是在抓輸入的資料
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    // 抓到資料後要.value才能實際抓到裡面的內容並進行function→最後再把input輸入的值變成空值
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

// 這邊是function寫法：先創所需element，再把內容放入想要放入的位置(可用.append()或..appendChild())
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

