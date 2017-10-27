var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');


var db = mysql.createPool({host:'localhost',user:'root',password:'960906',database:'test'});

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    console.log(sql);
    var name = req.body.username;
    var age = req.body.age;
    db.query(sql, [name, age], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
   /* db.query(`INSERT INTO user VALUES ('${name}', '${age}')`, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });*/
});



module.exports = router;