# 【Mongoose與Express中間件的差別】   
【Mongoose與Express中間件的差別】   
程式碼：   
```
//in index.js
app.delete('/farms/:id', async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})

// in models/farm.js
// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        console.log(res);
    }
})

```
1. **路由專屬中間件（Express 中間件）:**   
    - 這種中間件是針對你在 Express 應用程式中的路由專門設計的。它會在特定路由被觸發時運行。   
    - 在你的程式碼中，這個中間件是 `app.delete('/farms/:id', ...)` 路由處理器的一部分。當對 `/farms/:id` 發出 `DELETE` 請求時，這個中間件會根據 ID 查找並刪除農場。之後，它會將用戶重定向到 `/farms`。   
2. **Mongoose 中間件（文件中間件）:**   
    - 這是 Mongoose 提供的中間件，在 Mongoose 文件生命週期的某些階段運行（例如，在保存或刪除之前或之後）。   
    - 在你的程式碼中， `farmSchema.post('findOneAndDelete', ...)` 中間件是一個後置鉤子，它在某個農場文件被刪除後運行。它會檢查被刪除的農場是否有相關聯的產品，如果有，則將這些產品從資料庫中刪除。   
   
**主要差異：**   
- **範圍：**   
    - **Express 中間件:** 在處理 HTTP 請求和響應時運行，通常用於處理路由、身份驗證和錯誤處理等。   
    - **Mongoose 中間件:** 在 Mongoose 文件和模型的生命週期中運行，通常用於執行如驗證、更新相關數據或記錄等操作，當文件被保存、更新或刪除時觸發。   
- **執行上下文：**   
    - **Express 中間件:** 在 Express 應用程式中處理 HTTP 請求時運行。   
    - **Mongoose 中間件:** 在 Mongoose 模型的生命週期上下文中運行，與 HTTP 請求處理無關。   
- **使用場景：**   
    - **Express 中間件:** 適合處理與請求/響應相關的操作，例如身份驗證、記錄、路由等。   
    - **Mongoose 中間件:** 適合處理與資料庫文件變更相關的操作，例如級聯刪除、驗證或更新相關集合。   
