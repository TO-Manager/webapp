import React from 'react';
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
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { style } from './style';

const PasswordsGeneratorPage = () => {
  const classes = style();

  // slider
  const [lenghtValue, setValueLenght] = React.useState(8);

  const handleSliderChange = (event, newValue) => {
    setValueLenght(newValue);
  };

  // checkbox
  const [state, setState] = React.useState({
    simpleLetters: true,
    complexLetters: true,
    numbers: true,
    symbols: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { simpleLetters, complexLetters, numbers, symbols } = state;


  // generate pwd
  const generateAll = (length) => {
    let result = '';
    let characters = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChar = '0123456789';
    const symbolsChar = '%^]-\|÷×[]³£ß«»@{}µ«»~¡^°`•´˜¨¤!»#$%&/()=?*~{};:_> @’ ^[]y<,.-';

    if (simpleLetters == true) {
      characters += lowercase;
    }
    if (complexLetters == true) {
      characters += uppercase;
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
    if (symbols == false && numbers == false && complexLetters == false && simpleLetters == false) {
      pwd = 'Aucuns paramètres cochés.'
    } else {
      pwd = generateAll(lenghtValue)
    }
    return pwd;
  }



  return (
    <Container component="main" maxWidth="lg">

      <h1>Générateur de mot de passe</h1>

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
              lenghtValue={typeof lenghtValue === 'number' ? lenghtValue : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={8}
              max={100}
            />
          </Grid>
          <Grid item>
            <span>{lenghtValue}</span>
          </Grid>
        </Grid>
      </div>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Paramètres</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={simpleLetters}
                color="primary"
                onChange={handleChange('simpleLetters')}
                value="simpleLetters" />}
            label="Lettres"
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
      <h2>
        <TextField
          className={classes.input}
          id="outlined-number"
          value={generatePassword()}
          label="Mot de passe généré"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />



      </h2>



    </Container>
  );
}

export default PasswordsGeneratorPage;
