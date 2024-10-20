import React, { useState } from 'react';
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
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const OfferCard: React.FC<{ offer: offer }> = ({offer}) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState<string[]>(window.localStorage.getItem('likes')?.split(';') || [])
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
        <IconButton 
          aria-label="like" 
          color={likes.find(l => l === offer.id) ? 'error' : 'default'}
          onClick={() => {
            window.sessionStorage.removeItem('like');
            const result = 
            likes.find(l => l === offer.id) ? 
            likes.filter(l => l !== offer.id) :
            [ ...likes, offer.id ];

            window.localStorage.setItem('likes',
            result.toString());
            setLikes(result);
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="buy" onClick={() => {
          if(false)
            navigate("/sign-in");
          console.log("teste")
          toast.success('Pedido reservado com sucesso!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }}>
          <ShoppingCartIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem style={{marginRight: '3rem'}} />
        <SellIcon />
        <Typography textAlign="right">{offer.price}</Typography>
      </CardActions>
      <ToastContainer />
    </Card>
    </Box>);
}