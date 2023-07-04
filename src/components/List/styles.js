import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 1, marginBottom: '3px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '2px',
  },
  marginBottom: {
    marginBottom: '3px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));