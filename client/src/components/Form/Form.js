import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createItem, updateItem } from '../../actions/items';

const Form = ({ currentId, setCurrentId }) => {
  const [itemData, setItemData] = useState({
    title: '',
    brand: '', 
    image: '', 
    occasion: '',
    colors: [],
  });
  const item = useSelector((state) => (currentId ? state.items.find((message) => message._id === currentId) : null));
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const clear = () => {
    setCurrentId(0);
    setItemData({
      title: '',
      brand: '',
      image: '',
      occasion: '',
      colors: ''
    });
  };

  useEffect(() => {
    if (!item?.title) clear();
    if (item) setItemData(item);
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId === 0) {
      dispatch(createItem({...itemData, name: user?.result?.name}, navigate));
      clear();
    } else {
      dispatch(updateItem(currentId, {...itemData, name: user?.result?.name}));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to add items to your closet.
        </Typography>
      </Paper>
    )
  };

  

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" 
            noValidate 
            className={` ${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} an Item</Typography>
        <TextField name="title"
                   variant="outlined"
                   label="Title"
                   fullWidth
                   value={itemData.title}
                   onChange={(e) => setItemData({ ...itemData, title: e.target.value })} />
        <TextField name="brand"
                   variant="outlined"
                   label="Brand"
                   fullWidth
                   value={itemData.brand}
                   onChange={(e) => setItemData({ ...itemData, brand: e.target.value })} />
        <TextField name="occasion"
                   variant="outlined"
                   label="Occasion"
                   fullWidth
                   value={itemData.occasion}
                   onChange={(e) => setItemData({ ...itemData, occasion: e.target.value })} />
        <TextField name="colors"
                   variant="outlined"
                   label="Colors"
                   fullWidth
                   value={itemData.colors}
                   onChange={(e) => setItemData({ ...itemData, colors: e.target.value.split(',') })} />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setItemData({ ...itemData, image: base64 })}>
          </FileBase>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form;