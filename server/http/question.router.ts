import { Router, Request, Response, NextFunction } from 'express';
import checkToken from '../middleware/check.token';
import QuestionApi from '../apis/question';
const router = Router();

// 浏览器发过来的get请求  /api/questionList
router.get('/question/list', checkToken, async function (req: Request, res: Response, next: NextFunction) {
  try {
    const result = await new QuestionApi(req).getList(req.body);
    res.send(result.data);
  } catch (err) {
    next(err);
  }
});

router.get('/question/delete', checkToken, async function (req: Request, res: Response, next: NextFunction) {
    try {
        const result = await new QuestionApi(req).deleteItem(req.body);
        res.send(result.data);
    } catch (err) {
        next(err);
    }
});

router.get('/question/modify', checkToken, async function (req: Request, res: Response, next: NextFunction) {
    try {
        const result = await new QuestionApi(req).modifyItem(req.body);
        res.send(result.data);
    } catch (err) {
        next(err);
    }
});

router.get('/question/create', checkToken, async function (req: Request, res: Response, next: NextFunction) {
    try {
        const result = await new QuestionApi(req).createItem(req.body);
        res.send(result.data);
    } catch (err) {
        next(err);
    }
});

module.exports = function (app) {
  app.use('/api', router);
};

