import React, {FC} from 'react';
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface IProps {
  isLoading: boolean
}

const Loading: FC<IProps> = ({isLoading}) => {
  return (
    <>
      {isLoading
        && <Box sx={{width: '100%'}}>
          <LinearProgress/>
        </Box>}
    </>
  );
};

export default Loading;