import { Router, Request, Response, NextFunction } from 'express';
const router = Router();
import checkToken from '../middleware/check.token';
import QuestionApi from '../apis/question';

// 浏览器发过来的get请求  /api/questionList
router.get('/questionList', checkToken, async function (req: Request, res: Response, next: NextFunction) {
  try {
    const result = await new QuestionApi(req).getQuestionList(req.body);
    res.send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = function (app) {
  app.use('/api', router);
};

