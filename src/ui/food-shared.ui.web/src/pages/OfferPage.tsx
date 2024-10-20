import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
import { OfferCard } from "../components/OfferCard";
import { red } from "@mui/material/colors";

const OfferPage: React.FC = () => {
  return (<>
  <Container>
    <div className="new-offer">
      <Grid2 container spacing={2} mr={2} ml={2}>
        <Grid2 size={{md: 12}}>
          <Typography variant="h5" component="h5" textAlign="center" mb={5}>
            Evite desperdício de alimento e ganhe uma renda extra!
          </Typography>
        </Grid2>
        <Grid2 size={{md: 4}} mb={1}>
          <TextField
            fullWidth
            id="name"
            label="Nome"
            type="text"
          />
        </Grid2>
        <Grid2 size={{md: 4}} mb={1}>
          <TextField
            fullWidth
            id="ammount"
            label="Quantidade"
            type="number"
          />
        </Grid2>
        <Grid2 size={{md: 4}} mb={1}>
          <TextField
            fullWidth
            id="price"
            label="Preço (R$)"
            type="number"
          />
        </Grid2>
        <Grid2 size={{md: 12}} mb={1}>
          <TextField
            fullWidth
            id="description"
            label="Descrição"
            type="text"
          />
        </Grid2>
        <Grid2 size={{md: 12}} mb={1}>
          <TextField
            fullWidth
            id="image"
            label="URL da Imagem"
            type="text"
          />
        </Grid2>
        <Grid2 size={{md: 12}} mb={1} textAlign="right">
          <Button variant="outlined" color="primary" size="large">Ofertar</Button>
        </Grid2>
        <Grid2 size={{md: 12}}>
          <Typography variant="h5" component="h5" textAlign="center" mb={1} style={{borderTop: '1px solid #DDD', paddingTop: '.9rem'}}>
            Seus alimentos ofertados
          </Typography>
        </Grid2>
        <Grid2 size={{md: 3}}>
          <OfferCard offer={{
              personOffer: "Maria Souza",
              dateOffer: "Hoje, 10:00",
              avatarOffer: "M",
              avatarColor: red[500],
              description: "Arroz de forno com queijo e presunto, gratinado no ponto certo. Perfeito para uma refeição prática e saborosa.",
              image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/7c44045d2e8577819cb76b2b404902dd.jpg",
              id: "offer001",
              price: "R$ 10,00"
            }} 
          />
        </Grid2>
      </Grid2>
    </div>
  </Container>
  </>)
}

export default OfferPage;