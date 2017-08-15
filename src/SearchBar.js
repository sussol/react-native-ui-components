import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const defaultStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
  },
});

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.inputReference = null;
  }

  render() {
    const { color, onChange, style, ...textInputProps } = this.props;
    return (
      <TouchableOpacity
        style={[defaultStyles.container, { borderColor: color }]}
        onPress={() => this.inputReference.focus()}
      >
        <Icon name="search" size={40} color={color} />
        <TextInput
          {...textInputProps}
          style={[defaultStyles.textInput, { color: color }, style]}
          onChange={(event) => onChange(event.nativeEvent.text)}
          ref={(reference) => (this.inputReference = reference)}
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
        />
      </TouchableOpacity>
    );
  }
}

SearchBar.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  style: TextInput.propTypes.style,
};

SearchBar.defaultProps = {
  style: defaultStyles.textInput,
};
