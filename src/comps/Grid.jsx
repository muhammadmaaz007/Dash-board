import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Btn from './Btn';
import SideBar from './SideBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  borderRadius: '12px',
}));

const products = [
  { name: 'Product 1', price: '$25' },
  { name: 'Product 2', price: '$30' },
  { name: 'Product 3', price: '$18' },
  { name: 'Product 4', price: '$22' },
  { name: 'Product 5', price: '$27' },
  { name: 'Product 6', price: '$35' },
  { name: 'Product 7', price: '$20' },
  { name: 'Product 8', price: '$40' },
];

export default function BasicGrid() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box sx={{ width: '250px', bgcolor: '#f5f5f5', p: 2, boxShadow: 3 }}>
        <SideBar />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto' }}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Item>
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.price}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>

        {/* Centered Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Btn text="Add Product" />
        </Box>
      </Box>
    </Box>
  );
}
