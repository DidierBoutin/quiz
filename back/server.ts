import express from 'express';
import serveIndex from 'serve-index';
import cors from 'cors';
import {QuizMap} from "../front/src/app/interfaces/quiz-map";


const app = express();


let quizzMap: QuizMap = {};
app.use(cors());

app.get('/v1/quizz', (req, res, next) => {
  res.json(quizzMap);
});

const www = "../front/dist/front";
app.use(express.static(www));
app.use(serveIndex(".", {icons: true}))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
