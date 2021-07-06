import { FormControl, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { StoreContext } from '../store/StoreContext';
import { viewerTheme } from '../viewer.utils';

const useStyles = makeStyles((theme) => ({
  affinityContainer: {
    padding: theme.spacing(3),
    minHeight: '70vh',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  infoContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(0),
    },
  },
  scrollImage: {
    width: '20%',
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(-8),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  textItem: {
    marginBottom: theme.spacing(1),
  },
  itemContainer: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  affinityItem: {
    width: '110px',
    marginBottom: theme.spacing(2),
  },
  exampleContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  affinityDropdown: {
    width: '215px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const Affinities = observer((): JSX.Element => {
  const store = useContext(StoreContext);
  const classes = useStyles(viewerTheme);
  const affinityOptions = Object.keys(store.ranks.wizardSummary.affinityOccurences);
  const [affinity, setAffinity] = useState<string | undefined>();

  const { affinityToTraits, traitMap } = store.ranks.wizardSummary;
  return (
    <div className={classes.affinityContainer}>
      <Typography variant="h4" align="center">
        What is Affinity?
      </Typography>
      <div className={classes.infoContainer}>
        <img src="/assets/affinity_example.png" className={classes.scrollImage} />
        <div>
          <Typography variant="body1" className={classes.textItem}>
            Within the realm of the Forgotten Runes Wizard's Cult there are overarching themes or ideas known as
            affinities. As of now, these affinities have no names - they are only referred to by a numeric id. All
            components of a wizard (body, familiar, etc.) are associated with one or many affinities. The combination of
            these affinities make up a wizard's overall affinity. Any given wizard's maximum affinity would be the
            number of traits they have.
          </Typography>
          <Typography variant="body1" className={classes.textItem}>
            As these affinities currently have no names, it is impossible to qualify them or provide searchable terms
            for them. Thus, as a community, we should name these affinities to have common terminology to discuss them.
          </Typography>
        </div>
      </div>
      <div className={classes.exampleContainer}>
        <FormControl variant="filled" className={classes.affinityDropdown}>
          <InputLabel>Affinity Option</InputLabel>
          <Select onChange={(e) => setAffinity(e.target.value as string)}>
            {affinityOptions.map((opt, i) => (
              <MenuItem key={i} value={opt}>
                Affinity {`${opt}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.cardContainer}>
        {affinity &&
          affinityToTraits[affinity].map((item) => {
            return (
              <Paper key={item} className={classes.card}>
                <Typography variant="body2">{traitMap[item]}</Typography>
              </Paper>
            );
          })}
      </div>
    </div>
  );
});

export default Affinities;