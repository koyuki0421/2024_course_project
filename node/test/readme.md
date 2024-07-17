終端機Git Bash
ls表主目錄
~表引用主目錄
pwd表列印工作目錄(告訴現在的路徑)
cd表將目錄導向哪裡(前進)
cd ..表後退(cd後面有空格)
clear表清空終端機

cd  /表絕對路徑(/後面+路徑、cd後面有空格)
cd ../../Pets(可以先退後2次再進入Pets資料夾)這是相對路徑

cd /表進入根目錄
cd ~表進入主目錄

mkdir創建一個新資料夾
(例:mkdir 新資料夾名字)
(一次創兩個:mkdir cats dogs)
(mkdir ../birds表在上一層的路徑中建birds的資料夾)

man表描述命令的訊息(man ls解釋ls是什麼命令功能)
q表離開

touch 創建新檔案(touch app.html)(touch cat.html cat.css cat.js)

rm表刪除(直接消失不會進垃圾桶)
刪檔案：(rm cat.css)(rm cat.html cat.js)
刪空資料夾：(rmdir 資料夾名字)但此資料夾必須為空的才能進行刪除
刪資料夾：(rm -rf 資料夾名字)會刪除此資料夾包含的所有東西 要小心!

若遇到這個：
> 
要離開的話按ctrl+D