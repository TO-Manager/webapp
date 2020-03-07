import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
  lenght: {
    width: 500,
  },
  margin: {
    height: theme.spacing(3),
  },
  input: {
    width: 42,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  input: {
    maxWidth: 600,
    width: 500
  },
  button: {
    width: 500,
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 30
  }
}));
