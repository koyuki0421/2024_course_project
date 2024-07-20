【express：web開發框架+幫助使用node並運行伺服器】

原本：
當我每次更改我的js code時，都需要在git上執行先離開在進入
>ctrl+c 再 >node index.js

自動載入伺服器：
>npm i -g nodemon在global下載nodemon
>nodemon -v看板本
>nodemon index.js表讓nodemon監視我的index.js檔案

【Templating範本】會與express合作
有EJS嵌入式js、handlebars、jade、Pug、Nunjucks

老師使用EJS：git上下載>npm i ejs
並建立一個views的資料夾，是一個預設目錄>mkdir views
然後在views資較夾中建一個home.ejs檔案，而在.ejs檔案中可寫HTML

【EJS語法】
<%=這裡輸入的東西視為js，並且會顯示在網站上 %> 
<%這裡輸入的東西視為js邏輯而已，並不會顯示在網站上 %> 