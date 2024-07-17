★node→沒有瀏覽器
★打開git，打node就可以使用，要離開按ctrl+D或.exit
★REPL：read、evaluate、print、loop
★沒有window document，但有globall
★看版本：node -v
★看目前路徑：process.cwd()
★打開js檔案：node 檔案名字(node後面有空格)(node firstScript.js)
-------------------------☆★☆-------------------------------
在git上創建參數：node 檔案名字 參數1 參數2 參數3
並在js上寫process.argv可以引用參數
-------------------------☆★☆-------------------------------
安裝npm節點包:
●方法一
>npm install 節點包名稱(npm install give-me-a-joke)
可以在js檔console.dir(give-me-a-joke)看有什麼寫法
●方法二
>npm i 節點包名稱(npm i colors)
●方法三(在globall安裝節點包)
>npm i -g 節點包名稱(npm i -g cowsay)
訪問globall節點包若在js檔裡寫:const cowsay - require("cowsay")是找不到的，
要在git上打>npm link cowsay才能
●方法四
若是下載別人的code，其中的package.json檔中所需的dependencies，不需一個一個下載，只要在git上打：
>npm install就可以自動獲得所需的東西
-------------------------☆★☆-------------------------------
製作package.json:紀錄使用的所有內容
git上打>npm init然後一直按enter
-------------------------☆★☆-------------------------------
注意在上傳檔案到github上面時，不會上傳node_modules的資料夾

