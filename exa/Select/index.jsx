import React from 'react';
import {
  withStyles
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectInput = withStyles(() => ({
  input: {
    backgroundColor: '#1F55AB',
    color: 'rgb(195,219,255)',
    width: '10rem',
    height: '1.875rem',
    lineHeight: '1.875rem',
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
    padding: '0 0.625rem',
    '&:focus': {
      backgroundColor: '#1F55AB',
      borderRadius: '0.25rem',
    }
  }
}))(InputBase);

const SimpleSelect = withStyles(() => ({
  icon: {
    color: 'rgb(97,160,255)'
  }
}))(Select);

export default class SelectCountry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChangeCountry(e) {
    const value = e.target.value;
    this.setState({
      selectCountry: value
    });

    this.props.onChange && this.props.onChange(value);
  }

  render() {
    const { selectCountry, countries } = this.props;

    if (!selectCountry) return null;
    return (
      <SimpleSelect
        value={selectCountry}
        onChange={this.handleChangeCountry.bind(this)}
        input={<SelectInput/>}
      >
        {countries.map((countryName) =>
          <MenuItem
            value={countryName}
            key={countryName}>
            {countryName + '-Market'}
          </MenuItem>
        )}
      </SimpleSelect>
    );
  }
}