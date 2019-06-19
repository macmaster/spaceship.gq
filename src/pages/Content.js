import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

export default function Content(props) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box display="flex" style={{ gap: '8px' }}>
        <Button variant="outlined" color="primary" children="primary" />
        <Button variant="outlined" color="secondary" children="secondary" />
        <Button variant="outlined" href="#" children="link" />
      </Box>
      <pre>theme: {JSON.stringify(theme, null, 2)}</pre>
    </React.Fragment>
  );
}
