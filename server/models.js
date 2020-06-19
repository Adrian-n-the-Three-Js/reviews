const db = require('../database/index.js');
const mysql = require('mysql');

var getReviewData = (callback) => {
  // may refactor to specify hotel_id for which reviews are retrieved
  let sql = 'SELECT reviews.*, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM reviews JOIN hotels ON reviews.hotel_id = hotels.id JOIN users ON reviews.user_id = users.id';

  db.query(sql, (err, results) => {
    if (err) throw error;
    callback(results);
  });
};

var getQuestionData = (callback) => {
  // may refactor to specify hotel_id for which Q&A data is retrieved
  let questionSql = 'SELECT questions.*, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM questions JOIN hotels ON questions.hotel_id = hotels.id JOIN users ON questions.user_id = users.id';

  let answersSql = 'SELECT answers.*, users.username, users.user_avatar, users.user_city FROM answers JOIN questions ON answers.question_id = questions.id JOIN users on answers.answerer_user_id = users.id';

  var questionAnswerPacket = {};

  db.query(questionSql, (err, results) => {
    if (err) throw err;
    questionAnswerPacket.questions = JSON.stringify(results);

    db.query(answersSql, (err, results) => {
      if (err) throw err;
      questionAnswerPacket.answers = JSON.stringify(results);
      callback(questionAnswerPacket);
    });
  });
};

module.exports.getReviewData = getReviewData;
module.exports.getQuestionData = getQuestionData;