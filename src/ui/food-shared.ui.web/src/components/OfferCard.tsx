import React, { ReactNode, useState } from 'react';
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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SellIcon from '@mui/icons-material/Sell';
import { Box,  Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';
import { blue } from '@mui/material/colors';
import 'react-toastify/dist/ReactToastify.min.css';
import { verifyToken } from '../services/auth';
import { deletee, post } from '../services/api';

const OfferCardRoot: React.FC<{ children: ReactNode }> = ({children}) => {
  return (
    <Box mb={1}>
      <Card sx={{ maxWidth: 345 }}>    
        {children}
      </Card>
    </Box>);
}

const OfferCardBody: React.FC<{ image: string, description: string }> = ({image, description}) => {
  return (
    <>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </>
  );
}

const OfferCardHeader: React.FC<{user: {profile: string, name: string, }, timer: string }> = ({user, timer}) => {
  return (
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {user.profile}
          </Avatar>
        }
        title={user.name}
        subheader={timer}
      />
  )
}

const OfferCardActions: React.FC<{id: string, price: string}> = ({id, price}) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState<string[]>(window.localStorage.getItem('likes')?.split(',') || [])
  return (  
      <CardActions>
      <IconButton 
        aria-label="like" 
        color={likes.find(l => l === id) ? 'error' : 'default'}
        onClick={() => {
          window.sessionStorage.removeItem('like');
          const result = 
          likes.find(l => l === id) ? 
          likes.filter(l => l !== id) :
          [ ...likes, id ];

          window.localStorage.setItem('likes',
          result.toString());
          setLikes(result);
        }}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="buy" onClick={async () => {
        if(!verifyToken())
          navigate("/sign-in");
        await post(`request/${id}`, () => {
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
        });
      }}>
        <ShoppingCartIcon />
      </IconButton>
      <Divider orientation="vertical" flexItem style={{marginRight: '3rem'}} />
      <SellIcon />
      <Typography textAlign="right">{price}</Typography>
    </CardActions>
  )
}

const OfferCardRequests: React.FC<{
  requests: string[], 
  id: string, 
  title: string, 
  onRemove: () => Promise<void>
}> = ({requests, id, title, onRemove}) => {
  return (
    <>
      <CardActions>
        <IconButton 
          aria-label="remove" 
          onClick={async () => {
            await deletee(`offer/${id}`, async () => {
              toast.success('Pedido excluído com sucesso!', {
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
              await onRemove();              
            })
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem style={{marginRight: '.5rem'}} />
        <Typography>{title}</Typography>
      </CardActions>
      {requests.length > 0 && <Divider orientation="horizontal" flexItem style={{margin: '0 .7rem .5rem'}} />}
      <ul>
        {requests.map((request) => {
          return <li>{request}</li>
        })}
      </ul>
    </>
  );
}

export const OfferCard = {
  Root: OfferCardRoot,
  Body: OfferCardBody,
  Header: OfferCardHeader,
  Actions: OfferCardActions,
  Requests: OfferCardRequests
}