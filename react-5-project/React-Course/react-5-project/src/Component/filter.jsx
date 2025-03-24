import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: '25px',
  padding: '8px 20px',
  textTransform: 'none',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  }
}));



const Filter = ({ filterdata, category, setCategory }) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        padding: '20px 0',
      }}
    >
      {filterdata.map((item) => (
        <StyledButton 
          key={item.id}
          variant="outlined"
          color="primary"
          onClick={() => setCategory(item.title)}
          className={category === item.title ? 'active' : ''}
        >
          {item.title}
        </StyledButton>
      ))}
    </Box>
  );
}

export default Filter;
