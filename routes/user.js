const { Router } = require('express');
const { check } = require('express-validator');
const { fileValidate } = require('../middleware/filesValidate');
const { Get, Post, Put, Patch, Delete } = require('../controllers/User');
const { isRolValid, isEmailValid, isIdValid } = require('../helpers/db-validators');

const router = Router();


router.get(
    '/', 
    [
        check('id', 'id requiered').optional().isMongoId(),
        check('id', 'id requiered').optional().custom( isIdValid ),
        check('form', 'form requiered').optional().isInt(),
        check('limit', 'limit requiered').optional().isInt(),
        fileValidate
    ], 
    Get
 );

router.post(
    '/', 
    [
        check('name', 'name requiered').not().isEmpty(),
        check('email', 'email not valid').isEmail(),
        check('email', 'email not valid').custom( isEmailValid ),
        check('password', 'password requiered').isLength({ min: 6}),
        check('rol', 'rol not valid').custom( isRolValid ),
        fileValidate
    ],
    Post 
);

router.put(
    '/:id',
    [
        check('id', 'id not valid').isMongoId(),
        check('id', 'id not valid').custom( isIdValid ),
        check('rol', 'rol not valid').custom( isRolValid ),
        fileValidate  
    ],
    Put 
);
router.patch('/', Patch );
router.delete(
    '/:id',
    [
        check('id', 'id not valid').isMongoId(),
        check('id', 'id not valid').custom( isIdValid ),
        fileValidate
    ],
    Delete
);

module.exports = router;