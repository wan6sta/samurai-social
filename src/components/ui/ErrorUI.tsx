import React from 'react';
import {Alert} from "@mui/material";
import Box from "@mui/material/Box";

const ErrorUI = () => {
  return (
    <Box sx={{width: '100%'}}>
      <Alert severity="error">Произошла ошибка попробуйте обновить страницу!</Alert>
    </Box>
  );
};

export default ErrorUI;