import React, { useEffect, useState } from 'react';
import { red, blue, yellow, green, blueGrey } from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Container, Fab, Grid2 } from '@mui/material';
import foodShared from '../images/foodShared.svg';
import { offer } from '../types/offer';
import { OfferCard } from '../components/OfferCard';
import { Link } from 'react-router-dom';
import { get } from '../services/api';

const HomePage: React.FC = () => {
  const offers: offer[] = [
    {
      personOffer: "Maria Souza",
      dateOffer: "Hoje, 10:00",
      avatarOffer: "M",
      avatarColor: red[500],
      description: "Arroz de forno com queijo e presunto, gratinado no ponto certo. Perfeito para uma refeição prática e saborosa.",
      image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/7c44045d2e8577819cb76b2b404902dd.jpg",
      id: "offer001",
      price: "R$ 10,00"
    },
    {
      personOffer: "Carlos Oliveira",
      dateOffer: "Ontem, 22:00",
      avatarOffer: "C",
      avatarColor: blue[500],
      description: "Feijoada completa, com todos os acompanhamentos tradicionais. Tenho certeza que você vai adorar.",
      image: "https://www.minhareceita.com.br/app/uploads/2020/10/feijoada-light-com-linguica-calabresa-seara-mais-couve-manteiga-e-vinagrete-1.jpg",
      id: "offer002",
      price: "R$ 11,90"
    },
    {
      personOffer: "Ana Lima",
      dateOffer: "Quinta-feira, 12:00",
      avatarOffer: "A",
      avatarColor: green[500],
      description: "Risoto de camarão com alho-poró, cremoso e bem temperado. Um prato sofisticado para ocasiões especiais.",
      image: "https://www.saboresajinomoto.com.br/uploads/images/recipes/risoto-de-alho-poro.jpg",
      id: "offer003",
      price: "R$ 15,00"
    },
    {
      personOffer: "João Mendes",
      dateOffer: "Quarta-feira, 15:30",
      avatarOffer: "J",
      avatarColor: yellow[900],
      description: "Galinhada caipira com arroz e legumes frescos, saborosa e feita com ingredientes locais.",
      image: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/10/28/1138487367-galinhada-tradicional.jpg",
      id: "offer004",
      price: "R$ 11,90"
    },
    {
      personOffer: "Fernanda Silva",
      dateOffer: "Hoje, 09:00",
      avatarOffer: "F",
      avatarColor: blueGrey[800],
      description: "Escondidinho de carne seca, com purê de mandioca cremoso e queijo gratinado por cima.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG5zkSkd4_dLPWe4rJ97mDaA8CdCe0ypmuQ&s",
      id: "offer005",
      price: "R$ 20,00"
    },
    {
      personOffer: "Lucas Almeida",
      dateOffer: "Ontem, 18:45",
      avatarOffer: "L",
      avatarColor: blue[500],
      description: "Lasanha à bolonhesa com molho de queijo cremoso, camadas de massa fresca e carne bem temperada.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0HIAborxb9_NKy7k6bxwZrl8pOfhgnv-0Q&s",
      id: "offer006",
      price: "R$ 13,90"
    },
    {
      personOffer: "Bruna Santos",
      dateOffer: "Terça-feira, 14:00",
      avatarOffer: "B",
      avatarColor: red[900],
      description: "Moqueca de peixe com leite de coco e temperos frescos, servida com arroz branco e farofa.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogC8ByfTUqRXx1kgds3yIsQQGBMvZzkjIxA&s",
      id: "offer007",
      price: "R$ 18,90"
    },
    {
      personOffer: "Pedro Nascimento",
      dateOffer: "Segunda-feira, 11:30",
      avatarOffer: "P",
      avatarColor: green[700],
      description: "Filé à parmegiana com arroz e batatas fritas, coberto com molho de tomate e queijo derretido.",
      image: "https://www.estadao.com.br/resizer/v2/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg?quality=80&auth=1e80a50a274f370b5a498c5c05e3c3922fcfcc23a8d31821b4ab182863e56060&width=1200&height=630&smart=true",
      id: "offer008",
      price: "R$ 10,00"
    }
  ];

  useEffect(() => {
    const getData = async () => {
      get('offer');
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
          <Grid2 size={{xs: 12, sm: 12, md: 3}}>
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