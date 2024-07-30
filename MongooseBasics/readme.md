
# Mongoose

## Express Node Mongo
Mongoose 是一個 Mongo 的驅動程式，也是一種 ODM (Object Data Mapper or Object Document Mapper)，用於將 Mongo 連接到 Node.js 上（連接到 Mongo 資料庫上）。

## 下載步驟
1. 在 Git 上創建一個資料夾：`MongooseBasics`
2. 再建立 `package.json`：
   ```
   npm init -y
   ```
3. 下載 Mongoose：
   ```
   npm i mongoose
   ```
4. 建立 JS 檔案：
   ```
   touch index.js
   ```

## 在 VS Code 裡打開 index.js
1. 加入以下內容：
   ```javascript
   const mongoose = require('mongoose');
   mongoose.set('strictQuery', true); // 預防在 Git 上有警告訊息跳出來
   mongoose.connect('mongodb://127.0.0.1:27017/test'); // 因 Mongoose 的預設 port: 27017
   ```

## 在 VS Code JS 檔案裡創建的資料
1. 使用 Node.js 執行：
   ```
   node index.js
   ```
   再打 `.load index.js` 加載檔案。

2. 創建物件，例如：
   ```javascript
   const amadeus = new Movie({ title: 'Amadeus', year: 1984 });
   amadeus.save(); // 將資料存到資料庫裏面
   ```

3. 在 `mongosh` 中使用：
   ```
   use movieApp
   db.movies.find() // 這邊的 movies 是根據模型名稱 (Movie 大寫單數)，在 mongosh 中會變成小寫複數
   ```

## 查詢

### 查詢全部
```javascript
Movie.find({}).then(data => console.log(data));
```

### 篩選
```javascript
Movie.find({ rating: 'PG-13' }).then(data => console.log(data));
Movie.find({ year: { $gte: 2010 } }).then(data => console.log(data));
```

### 只找一個
```javascript
Movie.findOne({}).then(m => console.log(m));
```

### 利用 ID 尋找
方法一：
```javascript
Movie.find({ _id: '66a76320aaa9bf4a176f31a1' }).then(m => console.log(m));
```
方法二：
```javascript
Movie.findById('66a76320aaa9bf4a176f31a1').then(m => console.log(m));
```

## 更新

### 只更新第一個匹配的項目
```javascript
Movie.updateOne({ title: 'Amadeus' }, { year: 1984 }).then(res => console.log(res));
```

### 一次更新多個
```javascript
Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 }).then(res => console.log(res));
```

### 回傳更新後的 Object
需要第三個參數 `new` 把它改成 `true`，因 `new` 預設是 `false` 表示回傳更新之前的資料：
```javascript
Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.8 }, { new: true }).then(m => console.log(m));
```
或者：
```javascript
Movie.findByIdAndUpdate('66a76320aaa9bf4a176f31a1', { score: 8.2 }, { new: true }).then(m => console.log(m));
```
