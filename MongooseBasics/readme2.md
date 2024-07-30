【Mongoose】express node mongo

是一個mongo的驅動程式

也是一種ODM\(Object Data Mapper or Object Document Mapper\)

將mongo連接到node\.js上\(連接到mongo資料庫上\)

【下載步驟】：在git上

先創建一個資料夾：MongooseBasics

再建立package\.js：npm init \-y

下載：npm i mongoose

建立js檔案 :touch index\.js

再到vs code裡打開index\.js：

打上const mongoose = require\('mongoose'\);

貼上mongoose\.set\('strictQuery', true\)是預防在git上有警告訊息跳出來

因mongoose 的預設port:27017

所以貼上：mongoose\.connect\('mongodb://127\.0\.0\.1:27017/test'\);

看在vs code js檔案裏創建的資料步驟

1\.先打node

2\.再打\.loadn index\.js

3\.物件名稱  \-\->  例如amadeus

要把資料存到資料庫裏面:物件名稱\.save\(\)  \-\->  例如amadues\.save\(\)

然後就可以再mongosh \-\->use movieApp \-\->db\.movies\.find\(\)找到

這邊的movies是根據我的模型名稱\(Movie大寫單數\)，在mongosh中就會變成小寫複數

查詢

全部:

模型名稱\.find\(\{\}\)\.then\(data =>console\.log\(data\)\)  \-\->例如 Movie\.find\(\{\}\)\.then\(data => console\.log\(data\)\)

篩選:

例如 Movie\.find\(\{rating:\{'PG\-13'\}\)\.then\(data => console\.log\(data\)\)

例如 Movie\.find\(\{year: \{$gte:2010\}\}\)\.then\(data => console\.log\(data\)\)

只找一個：

例如 Movie\.findOne\(\{\}\)\.then\(m =>console\.log\(m\)\)

利用ID尋找:

方法一

Movie\.find\(\{\_id:'66a76320aaa9bf4a176f31a1'\}\)\.then\(m => console\.log\(m\)\)

方法二

Movie\.findById\('66a76320aaa9bf4a176f31a1'\)\.then\(m => console\.log\(m\)\)

更新

只更新第一個匹配的東西

Movie\.updateOne\(\{title: 'Amadeus'\},\{year:1984\}\)\.then\(res => console\.log\(res\)\)

一次更新多個

Movie\.updateMany\(\{title: \{$in:\['Amadeus','Stand By Me'\]\}\},\{score: 10\}\)\.then\(res =>console\.log\(res\)\)

回傳更新後的Object：需要第三個參數new把它改成true，因new預設是false表更新之前的資料

Movie\.findOneAndUpdate\(\{title:'The Iron Giant'\},\{score:7\.8\},\{new:true\}\)\.then\(m => console\.log\(m\)\)

或是\.findByIdAndUpdate

