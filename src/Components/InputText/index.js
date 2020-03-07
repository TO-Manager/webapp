import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputText = ({ name, type, label, autoComplete="", helperText="" }) => (
    <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name={name}
        label={label}
        type={type}
        id={name}
        autoComplete={autoComplete}
        helperText={helperText}
    />
);

export default InputText;
