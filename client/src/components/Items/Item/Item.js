import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../actions/items';

const Item = ({ item, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={item.image} title={item.title}/>
      <div className={classes.overlay}>
        <Typography variant="body2">{moment(item.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === item?.owner || user?.result?._id === item?.owner) && (
        <div className={classes.overlay2} name='edit'>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(item._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{item.colors.map((color) => `#${color} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{item.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Brand: {item.brand}</Typography>
        <Typography variant="body2" component="p">Occasion: {item.occasion}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === item?.owner || user?.result?._id === item?.owner) && (
          <Button size="small" color="primary" onClick={() => dispatch(deleteItem(item._id))}>
            <DeleteIcon fontSize="small"/>Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Item;