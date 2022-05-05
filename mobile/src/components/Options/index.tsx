import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface Props {
  onFeedbackTypeChanged(feedbackType: FeedbackType): void;
}

export function Options({onFeedbackTypeChanged}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      
      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([key, {title, image}]) => (
              <Option
                key={key}
                title={title}
                image={image}
                onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
              />
            ))
        }
      </View>

      <Copyright/>
    </View>
  );
}