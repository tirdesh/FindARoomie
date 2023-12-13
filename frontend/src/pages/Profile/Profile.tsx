import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUser, resetUser } from '../../redux/slices/user-slice';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './UserProfile.css'; 

const UserProfile: React.FC = () => {
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const sessionUser = useSelector((state: RootState) => state.user);
  const isLogged = Boolean(sessionUser.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle profile update
  const handleUpdate = () => {
    // Dispatch update profile action or API call
  };

  // Function to confirm deletion
  const handleDeleteClick = () => {
    setOpenDeleteConfirm(true);
  };

  // Function to handle user account deletion
  const deleteUserAccount = () => {
    // Make API call to delete account
    dispatch(resetUser());
    setOpenDeleteConfirm(false);
    navigate('/login');
  };

  return (
    <Paper className="userProfilePaper">
      <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        {isLogged ? (
          <>
            <Typography variant="h6">User ID: {sessionUser.userId}</Typography>
            <Typography variant="h6">First Name: {sessionUser.firstName}</Typography>
            <Typography variant="h6">Last Name: {sessionUser.lastName}</Typography>
            <Typography variant="h6">Age: {sessionUser.age}</Typography>
            <Typography variant="h6">Gender: {sessionUser.gender}</Typography>
            <Typography variant="h6">Email: {sessionUser.email}</Typography>
            <Typography variant="h6">Phone: {sessionUser.phone}</Typography>
          </>
        ) : (
          <Typography variant="body1">Please log in to view your profile details.</Typography>
        )}
      </Grid>
        
        <Grid item xs={12}>
          <Avatar src="/broken-image.jpg" /> 
          <Button variant="contained" component="label">
            Upload
            <input type="file" hidden />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Save
          </Button>
          <IconButton color="error" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Dialog
        open={openDeleteConfirm}
        onClose={() => setOpenDeleteConfirm(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your profile? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteConfirm(false)} color="primary">
            No
          </Button>
          <Button onClick={deleteUserAccount} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default UserProfile;
