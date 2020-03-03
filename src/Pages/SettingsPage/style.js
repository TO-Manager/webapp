import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
  flex: {
    display: 'flex',
    justifyContent: "center",
  },
  marginRight: {
    marginRight: 20
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  sub: {
    display: 'flex',
    justifyContent: "space-around",
  },
  box: {
    width: '100%',
    padding: '3%'
  }

}));


