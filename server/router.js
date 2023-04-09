const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:product_id', controller.getOne);
router.get('/:product_id/styles', controller.getStyles);
router.get('/:product_id/related', controller.getRelated);

module.exports = router;
