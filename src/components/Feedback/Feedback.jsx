import React, { Component } from 'react';
import { Text } from './Feedback.styled';

import { Section } from './Section/Section';
import { FeedbackOptions } from './Options/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Box } from 'components/Box';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addRespond = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  option = Object.keys(this.state);
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box as={'section'}>
        <Section title={'Please Leave feedback'}>
          <FeedbackOptions
            options={this.option}
            onLeaveFeedback={this.addRespond}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              title={'Statistics'}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Text>There is no feedback</Text>
          )}
        </Section>
      </Box>
    );
  }
}
