import React from 'react';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { hideSnackbar } from '../redux/slice/snackbarSlice';
import { RootState } from '../redux/store';

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const { visible, message } = useSelector((state:RootState) => state.snackbar);

  return (
    <Snackbar
      visible={visible}
      onDismiss={() => dispatch(hideSnackbar())}
      duration={2000}
      action={{
        label: 'Close',
        onPress: () => dispatch(hideSnackbar()),
      }}
    >
      {message}
    </Snackbar>
  );
};

export default SnackbarComponent;
