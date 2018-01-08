import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export const getProgressPercentage = (progress, total) =>
  (progress >= total ? 100 : (progress / total) * 100);

export const ProgressBar = ({ progress, total, isComplete }) => (
  <View style={localStyles.wrapper}>
    <View
      style={[
        localStyles.inner,
        {
          width: `${isComplete ? 100 : getProgressPercentage(progress, total)}%`,
          opacity: progress < 0 ? 0 : 1,
        },
      ]}
    />
  </View>
);

ProgressBar.propTypes = {
  total: PropTypes.number,
  progress: PropTypes.number,
  isComplete: PropTypes.bool,
};

ProgressBar.defaultProps = {
  total: 0,
  progress: 0,
  isComplete: true, // Fill the progress bar even if total not reached. Useful for errors states.
};

const borderRadius = 13;

const localStyles = StyleSheet.create({
  wrapper: {
    borderRadius,
    borderWidth: 2,
    borderColor: 'white',
    height: 26,
    padding: 1,
  },
  inner: {
    backgroundColor: 'white',
    borderRadius,
    flex: 1,
    minWidth: borderRadius * 2,
  },
});
