import React, { useEffect, useState } from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Container, Fab, Grid2 } from '@mui/material';
import foodShared from '../images/foodShared.svg';
import { Offer } from '../types/offer';
import { OfferCard } from '../components/OfferCard';
import { Link } from 'react-router-dom';
import { get } from '../services/api';

const HomePage: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  useEffect(() => {
    const getData = async () => {
      setOffers(await get('request/options') || []);
    };
    getData();
  }, []);

  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={{md: 8}} mt={2}>  
          <img src={foodShared} height="50rem" width="auto" alt="Logo" />
        </Grid2>
        <Grid2 size={{md: 4}} mt={2} textAlign="right">
          <Link to="/offer">
            <Fab variant="extended">
              <RestaurantIcon sx={{ mr: 1 }} />
              Ofertar Comida
            </Fab>
          </Link>
        </Grid2>
      {offers.map(offer => {
        return (
          <Grid2 key={offer.id} size={{xs: 12, sm: 12, md: 3}}>
            <OfferCard 
              offer={offer}
            />
          </Grid2>
        )
      })}
      </Grid2>
    </Container>);
}

export default HomePage;