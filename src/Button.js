import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewPropTypes,
} from 'react-native';

export function Button(props) {
  const { disabledColor, isDisabled, onPress, text, textStyle, style } = props;

  if (isDisabled) {
    return (
      <View style={[style, { backgroundColor: disabledColor }]}>
        <Text style={textStyle}>{text}</Text>
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
    </TouchableHighlight>
  );
}

Button.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  disabledColor: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

Button.defaultProps = { // 'styles' needs to be declared before use!
  style: styles.button,
  textStyle: styles.buttonText,
};
