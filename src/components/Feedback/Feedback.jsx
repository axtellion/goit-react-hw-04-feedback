import { useState } from 'react';
import { Text } from './Feedback.styled';

import { Section } from './Section/Section';
import { FeedbackOptions } from './Options/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Box } from 'components/Box';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const onLeaveFeedback = e => {
    if (e === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (e === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (e === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  return (
    <Box as={'section'}>
      <Section title={'Please Leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() > 0 ? (
          <Statistics
            title={'Statistics'}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Text>There is no feedback</Text>
        )}
      </Section>
    </Box>
  );
};
