import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Item from './Item/Item';
import useStyles from './styles';

const Posts = ({ currentId, setCurrentId }) => {
  const items = useSelector((state) => state.items);
  const classes = useStyles();

  console.log(items);

  return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {items.map((item) => (
          <Grid key={item._id} item xs={12} sm={6}>
            <Item item={item} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    
  );
}

export default Posts;