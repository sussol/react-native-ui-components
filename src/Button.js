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
    actionNumber,
    actionNumberStyle,
    actionNumberTextStyle,
  } = props;

  if (isDisabled) {
    return (
      <View style={[style, { backgroundColor: disabledColor }]}>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  }

  function renderActionNumber() {
    if (!actionNumber) return null;
    return (
      <View style={[styles.actionNumber, actionNumberStyle]}>
        <Text style={[styles.actionNumberText, actionNumberTextStyle]}>
          {actionNumber}
        </Text>
      </View>
    );
  }

  return (
    <TouchableHighlight
      style={style}
      underlayColor="#B5B5B5"
      onPress={onPress}
    >
      <Text style={textStyle}>{text}</Text>
      {renderActionNumber()}
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
  actionNumber: PropTypes.number,
  actionNumberStyle: Text.propTypes.style,
  actionNumberTextStyle: Text.propTypes.style,
};

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
  actionNumber: {
    width: 5,
    height: 5,
    borderRadius: 5/2,
    backgroundColor: '#CDCDCD'
  }
  actionNumberText: {
    fontSize: 12,
    fontWeight: '500',
  }
});

Button.defaultProps = { // 'styles' needs to be declared before use!
  style: styles.button,
  textStyle: styles.buttonText,
};
