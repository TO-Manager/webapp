import React, { useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { style } from './style';

const PasswordsGeneratorPage = () => {
  const classes = style();

  // slider
  const [value, setValue] = React.useState(8);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setState({ ...state, valueInput: generatePassword() });
  };

  const handleBlur = () => {
    if (value < 8) {
      setValue(8);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    setState({ ...state, valueInput: generatePassword() });
  };


  // checkbox
  const [state, setState] = React.useState({
    simpleLetters: true,
    complexLetters: true,
    numbers: true,
    allChecked: true,
    symbols: true,
    valueInput: '',
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  let { simpleLetters, complexLetters, numbers, symbols, allChecked } = state;


  // generate pwd
  const generateAll = (length) => {
    let result = '';
    let characters = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChar = '0123456789';
    const symbolsChar = '%^]-\|÷×[]£«»@{}µ«»~¡^°`•´˜¨¤!»#$%&/()=?*~{};:_> @’^[]y<,.-';

    if (simpleLetters == true) {
      characters += lowercase;
    }
    if (complexLetters == true) {
      characters += uppercase;
      characters += lowercase;
    }
    if (numbers == true) {
      characters += numbersChar;
    }
    if (symbols == true) {
      characters += symbolsChar;
    }


    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const generatePassword = () => {
    let pwd = '';

    if (symbols == true && numbers == true && complexLetters == true && simpleLetters == true) {
      allChecked = true;
    }
    if (allChecked == true) {
      symbols = true;
      numbers = true;
      complexLetters = true;
      simpleLetters = true;
    }
    if (symbols == false && numbers == false && complexLetters == false && simpleLetters == false) {
      pwd = 'Aucuns paramètres cochés.'
    }
    else {
      pwd = generateAll(value);
    }
    return pwd;
  }

  const setValueInput = () => {
    setState({ ...state, valueInput: generatePassword() });
    return state.valueInput;
  }

  const getValueInput = () => {
    return state.valueInput;
  }

  return (
    <Container component="main" maxWidth="lg">
      <h1>Générateur de mot de passe</h1>
      <h2>
        <TextField
         
          className={classes.input}
          id="outlined-number"
          value={getValueInput()}
          label="Mot de passe généré"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </h2>

      <div className={classes.button}>
        <Button variant="contained"
          onClick={() => {
            setValueInput()
          }}
        >
          Regénérer
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigator.clipboard.writeText(getValueInput())
          }}
        >
          Copier
          </Button>


      </div>


      <div className={classes.lenght}>
        <Typography id="input-slider" gutterBottom>
          Longueur
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <VpnKeyIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={8}
              max={100}
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 8,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </div>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Paramètres</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={allChecked}
                color="primary"
                onChange={handleChange('allChecked')}
                value="allChecked" />}
            label="Tout cocher"
          />
          <Divider variant="middle" />
          <FormControlLabel
            control={
              <Checkbox
                checked={simpleLetters}
                color="primary"
                onChange={handleChange('simpleLetters')}
                value="simpleLetters" />}
            label="Lettres minuscules"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={complexLetters}
                onChange={handleChange('complexLetters')}
                value="complexLetters" />}
            label="Lettres majuscules et minuscules"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={numbers}
                onChange={handleChange('numbers')}
                value="numbers" />}
            label="Chiffres"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={symbols}
                onChange={handleChange('symbols')}
                value="symbols" />}
            label="Symboles"
          />
        </FormGroup>
      </FormControl>



    </Container>
  );
}

export default PasswordsGeneratorPage;
