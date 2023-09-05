import React, { useState } from 'react';
import { Button, Card, Radio, Table } from 'antd';
import './quizpage.module.css';

interface QuizProps {
  questionUrls: string[];
}

const QuizPage: React.FC<QuizProps> = ({ questionUrls }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questionUrls.length).fill(''));

  const handleAnswerClick = (index: number, answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    return questionUrls.map((url, index) => {
      const userAnswer = selectedAnswers[index];
      const isCorrect = userAnswer === url.charAt(url.length - 1);
      return { url, userAnswer, isCorrect };
    });
  };

  const columns = [
    {
      title: '问题',
      dataIndex: 'question',
      key: 'question',
      render: (text: string, record: any, index: number) => (
        <Card title={`问题 ${index + 1}`} className={`question-card ${record.isCorrect ? 'correct' : 'incorrect'}`}>
          <img src={questionUrls[index]} alt={`问题 ${index + 1}`} className="question-image" />
        </Card>
      ),
    },
    {
      title: '答案',
      dataIndex: 'answer',
      key: 'answer',
      render: (text: string, record: any, index: number) => (
        <div className="answer-options">
          {['A', 'B', 'C', 'D'].map((option) => (
            <span
              key={option}
              className={`answer-option ${option === record.userAnswer ? 'selected' : ''} ${
                option === questionUrls[index].charAt(questionUrls[index].length - 1) ? 'correct' : ''
              }`}
              onClick={() => handleAnswerClick(index, option)}
            >
              {option}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="quiz-container">
      <Table
        columns={columns}
        dataSource={questionUrls.map((url, index) => ({ key: index, question: url }))}
        pagination={false}
        rowKey={(record, index) => `${index}`}
      />
      <Button type="primary" onClick={checkAnswers} className="submit-button">
        检查答案
      </Button>
      <Button onClick={() => setSelectedAnswers(new Array(questionUrls.length).fill(''))} className="reset-button">
        重置答案
      </Button>
    </div>
  );
};

export default QuizPage;
