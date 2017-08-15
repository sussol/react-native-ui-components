# react-native-ui-components

## Installation
```npm install --save react-native-ui-components```

## Usage
Currently provides two reusable UI components for react native apps, a Button and a SearchBar. The intention for this repository is to collect similar widgets that can be used across various react native projects. If you are looking for a component that is not already here, see if it exists in the [mobile](https://github.com/sussol/mobile) repository, and if so extract it into this repository.

### Button
A tappable component that looks like a button, allowing customised styling, label, and callback function.

| Prop Name     | Type     | Description                                                            |
| ------------- | -------- | ---------------------------------------------------------------------- |
| textStyle     | style    | Will override styling of the Text label within the button              |
| style         | style    | Will override styling of the TouchableHighlight enclosing the button   |
| onPress       | function | The callback to execute when the button is pressed                     |
| text          | string   | Label to display inside the button                                     |
| isDisabled    | boolean  | If true, the button is not pressable and appears in its disabled state |
| disabledColor | string   | Defines the button's background colour when it is disabled             |

```
<Button
  style={styles.authFormButton}
  textStyle={styles.authFormButtonText}
  text={'Login'}
  onPress={this.onLogin}
  disabledColor={WARM_GREY}
  isDisabled={!this.canAttemptLogin}
/>
```

### ProgressBar
Basic progress bar with the ability to set how far through some process is.

| Prop Name  | Type     | Description                                                                                                             |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| progress   | integer  | The current number representing progress (compared to total, see below)                                                 |
| total      | integer  | The total needed to finish                                                                                              |
| isComplete | boolean  | Will fill the progress bar to the end no matter what the progress. Useful for error states                              |

### SearchBar
A text field with a search icon that appears as a search bar. Will not actually filter a dataset itself, it is a dumb component doing the display work only, and leaving the business logic for someone else.

| Prop Name | Type     | Description                                                                                                             |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| color     | string   | Defines the colour of the SearchBar's underline and icon                                                                |
| style     | style    | Will override styling of the Text field                                                                                 |
| onChange  | function | The callback to execute when the text is changed, should take the search string as a parameter and filter some data |

```
onSearchChange(searchTerm) {
  this.setState({ searchTerm: searchTerm });
}

renderSearchBar() {
  const { pageStyles, searchBarColor } = this.props;
  return (
    <SearchBar
      onChange={this.onSearchChange}
      style={pageStyles.searchBar}
      color={searchBarColor}
    />);
}
```
