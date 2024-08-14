const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin')

// 這邊是路徑的最前面，會加在根據各個不同的js檔案(admin.js、dogs.js、shelters.js)裡所寫的路徑
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes)

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})
