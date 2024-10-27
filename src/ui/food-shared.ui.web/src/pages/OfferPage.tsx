import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
import { OfferCard } from "../components/OfferCard";
import { get, post } from "../services/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewOffer } from "../types/new-offer";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Offer } from "../types/offer";

const OfferPage: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const getOffers = async () => {
    setOffers(await get('offer') || []);
  };
  const {
    register,
    handleSubmit,
    reset
  } = useForm<NewOffer>()
  useEffect(() => {
    getOffers();
  }, []);
  const onSubmit: SubmitHandler<NewOffer> = async (data) => {
    await post<void>(
      'offer', 
      data, 
      async () => {
        await getOffers();
        reset();
        toast.success('Oferta registrada com sucesso!', {
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
    },
    () => {
      toast.error('Falha ao registrar oferta, tente novamente.');      
    });
  }
  return (<Container>
    <div className="new-offer">
      <Grid2 container spacing={2} mr={2} ml={2}>
        <Grid2 size={{md: 12}}>
          <Typography variant="h5" component="h5" textAlign="center" mb={5}>
            Evite desperdício de alimento e ganhe uma renda extra!
          </Typography>
        </Grid2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={1} mr={2} ml={2}>
            <Grid2 size={{md: 4}} mb={1}>
              <TextField
                {...register('title', { required: true })}
                fullWidth
                label="Título"
              />
            </Grid2>
            <Grid2 size={{md: 4}} mb={1}>
              <TextField
                {...register('quantity', { required: true })}
                fullWidth
                label="Quantidade"
                type="number"
              />
            </Grid2>
            <Grid2 size={{md: 4}} mb={1}>
              <TextField
                {...register('price', { required: true })}
                fullWidth
                label="Preço (R$)"
                type="number"
              />
            </Grid2>
            <Grid2 size={{md: 12}} mb={1}>
              <TextField
                {...register('description', { required: true })}
                fullWidth
                label="Descrição"
                type="text"
              />
            </Grid2>
            <Grid2 size={{md: 12}} mb={1}>
              <TextField
                {...register('image', { required: true })}
                fullWidth
                id="image"
                label="URL da Imagem"
                type="text"
              />
            </Grid2>
            <Grid2 size={{md: 12}} mb={1} textAlign="right">
              <Button type="submit" variant="outlined" color="primary" size="large">Ofertar</Button>
            </Grid2>
          </Grid2>
        </form>
        <Grid2 size={{md: 12}}>
          <Typography variant="h5" component="h5" textAlign="center" mb={1} style={{borderTop: '1px solid #DDD', paddingTop: '.9rem'}}>
            Seus alimentos ofertados
          </Typography>
        </Grid2>
          {offers.map(offer => {
            return <Grid2 key={offer.id} size={{md: 3}}> 
              <OfferCard offer={offer} />
            </Grid2>
          })}
      </Grid2>
    </div>
    <ToastContainer />
  </Container>)
}

export default OfferPage;