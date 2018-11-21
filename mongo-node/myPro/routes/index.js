const express = require('express');
const router = express.Router();
const multer = require('multer');
const app = express();
/* GET home page. */
router.all('/judoka_base', function (req, res, next) {
    judoka_base.find({sex:req.query.sex,category:req.query.category}, (err, data) => {
        res.send(data);
    })
});
//查询所有
router.all('/judoka_base_all_man_60kg', function (req, res, next) {
    judoka_base.find({sex:"男",category:"-60kg"},(err,data)=>{
        res.send(data);
    })
});


//上传文件
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});
let upload = multer({storage: storage});
//var cpUpload = upload.fields([{ name: 'imgfile', maxCount: 12 }])
router.all('/multipart', upload.array('imgfile', 40), function (req, res, next) {
    let files = req.files;
    if (!files[0]) {
        res.send('error');
    } else {
        res.send('success');
    }
    alert(files);
});

module.exports = router;
