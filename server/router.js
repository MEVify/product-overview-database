const controller = require('./controller');
const router = require('express').Router();

router.get('/:product_id', controller.getAll);
router.get('/:product_id', controller.getOne);
router.get('/:product_id/styles', controller.getStyles);
router.get('/:product_id/related', controller.getRelated);

module.exports = router;