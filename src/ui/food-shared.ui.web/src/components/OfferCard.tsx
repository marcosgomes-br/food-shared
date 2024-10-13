import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import { Box,  Divider } from '@mui/material';
import { offer } from '../types/offer';

export const OfferCard: React.FC<{offer: offer}> = ({offer}) => {
  return (
    <Box mb={1}>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: offer.avatarColor }} aria-label="recipe">
            {offer.avatarOffer}
          </Avatar>
        }
        title={offer.personOffer}
        subheader={offer.dateOffer}
      />
      <CardMedia
        component="img"
        height="194"
        image={offer.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {offer.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="buy">
          <ShoppingCartIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem style={{marginRight: '3rem'}} />
        <SellIcon />
        <Typography textAlign="right">{offer.price}</Typography>
      </CardActions>
    </Card>
    </Box>);
}