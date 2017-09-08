import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export function Button(props) {
  const {
    disabledColor,
    isDisabled,
    onPress,
    text,
    textStyle,
    style,
    actionCount,
    actionCountStyle,
    actionCountTextStyle,
  } = props;

  if (isDisabled) {
    return (
      <View style={[style, { backgroundColor: disabledColor }]}>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  }

  function renderActionCount() {
    if (!actionCount) return null;
    return (
      <View style={[styles.actionCount, actionCountStyle]}>
        <Text style={[styles.actionCountText, actionCountTextStyle]}>
          {actionCount}
        </Text>
      </View>
    );
  }

  return (
    <TouchableHighlight
      underlayColor="#B5B5B5"
      onPress={onPress}
    >
      <View style={[style, { overflow: 'visible' }]}>
        <Text style={textStyle}>{text}</Text>
        {renderActionCount()}
      </View>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  actionCount: PropTypes.number,
  actionCountStyle: Text.propTypes.style,
  actionCountTextStyle: Text.propTypes.style,
};

const ACTION_CIRCLE_SIZE = 20;

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    margin: 15,
    fontSize: 17,
    fontWeight: '500',
  },
  actionCount: {
    position: 'absolute',
    bottom: -ACTION_CIRCLE_SIZE / 2,
    right: -ACTION_CIRCLE_SIZE / 2,
    width: ACTION_CIRCLE_SIZE,
    height: ACTION_CIRCLE_SIZE,
    borderRadius: ACTION_CIRCLE_SIZE / 2,
    overflow: 'visible',
    backgroundColor: '#CDCDCD',
  },
  actionCountText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

Button.defaultProps = { // 'styles' needs to be declared before use!
  style: styles.button,
  textStyle: styles.buttonText,
};
