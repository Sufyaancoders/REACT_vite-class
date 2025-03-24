import React, { useEffect } from 'react';
import Card from './card';
import { Grid, Container, CircularProgress, Box } from '@mui/material';

const Cards = ({ products, category, liked, setLiked }) => {
    useEffect(() => {
        // Debug logs to check incoming props
        console.log('Initial Products:', products);
        console.log('Current Category:', category);
    }, [products, category]);

    // Early return with loading state
    if (!products || products.length === 0) {
        console.log('No products available');
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    // Filter products based on category
    const filteredProducts = products.filter(product => {
   

        switch(category) {
            case "ALL":
                return true;
            case "LESS THAN $100":
                return Number(product.price) < 100;
            case "MORE THAN $100":
                return Number(product.price) >= 100;
            case "ELECTRONICS":
                return product.category?.toLowerCase() === "electronics";
            default:
                return true;
        }
    });

    // Log filtered results
    console.log('Filtered Products Count:', filteredProducts.length);

    // Show message if no products match filter
    if (filteredProducts.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                No products found for category: {category}
            </Box>
        );
    }

    // Render product grid
    return (
        <Container sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {filteredProducts.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <Card 
                            item={item}
                            liked={liked}
                            setLiked={setLiked}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Cards;
