const express = require('express')

const app = express();

const PORT = 5000;

const Timereq =  (req, res, next)=>{
//    console.log(day)
let date = new Date();
    ((date.getDay() == 0) || (date.getDay() == 6 ))  ? res.send('The application is only available during working days (Monday to Friday)')
    : ((date.getHours() < 9) || (date.getDay() > 17 )) ? res.send('The application is only available during working hours (from 9 to 17)')
    :
    next();
}

app.use(Timereq);

app.use(express.static('public'));

app.listen(PORT, (err) => {
    if (err) console.log('server not running')
    else console.log(`Server is running on port ${PORT}`);
});
