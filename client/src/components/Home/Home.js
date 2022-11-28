import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core'
import { getItems } from '../../actions/items';
import useStyles from '../../styles.js';
import { useDispatch } from 'react-redux';
import Items from '../../components/Items/Items'
import Form from '../../components/Form/Form'


const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [currentId, dispatch]);

  return (
    <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Items setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home