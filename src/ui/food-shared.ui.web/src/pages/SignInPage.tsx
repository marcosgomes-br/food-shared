import { Box, Button, Divider, Grid2, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"
import { User } from "../types/user";
import { post } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SigInPage: React.FC = () => {
  return (
    <>
      <Grid2 container spacing={2} height="100vh" style={{background: "#FEFEFE"}}>
        <Grid2 size={{xs: 12, sm: 9}} className="bg-image">
        </Grid2>
        <Grid2 size={{xs: 12, sm: 3}}>
          <Box mt={10} ml={2} mr={2}>
            <Typography variant="h5" component="h5" textAlign="center">
              Faça login
            </Typography>
          </Box>
          <LoginForm />
          <Box mt={5} ml={2} mr={2}>
            <Divider orientation="horizontal" flexItem>OU</Divider>
          </Box>
          <Box mt={1} ml={2} mr={2}>
            <Typography variant="h5" component="h5" textAlign="center">
              Crie uma conta para continuar
            </Typography>
          </Box>
          <CadastroForm />
        </Grid2>
      </Grid2>
    </>
  );
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm<User>()
  const onSubmit: SubmitHandler<User> = async (data) => {
    sendFormSignIn(data, 'auth/login', 'Email ou senha incorretos', navigate);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={2} ml={2} mr={2}>
        <TextField
          fullWidth
          { ...register("email", { required: true}) }
          label="Email"
          type="email"
          required
        />
      </Box>
      <Box mt={2} ml={2} mr={2}>
        <TextField
          fullWidth
          { ...register("password", { required: true}) }
          label="Senha"
          type="password"
          required
        />
      </Box>
      <Box mt={2} ml={2} mr={2}>
        <Button 
          type="submit" 
          variant="contained" 
          color="success" 
          size="large" 
          fullWidth
        >
          Entrar
        </Button>
      </Box>
    </form>);
}

const CadastroForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm<User>()
  const onSubmit: SubmitHandler<User> = async (data) => {
    sendFormSignIn(data, 'user', 'Falha ao efetuar cadastro, tente novamente.', navigate);
  }

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <Box mt={2} ml={2} mr={2}>
      <TextField
        {...register('firstName', {required: true})}
        fullWidth
        label="Nome"
        type="text"
      />
    </Box>
    <Box mt={2} ml={2} mr={2}>
      <TextField
        {...register('lastName', {required: true})}
        fullWidth
        label="Sobrenome"
        type="text"
      />
    </Box>
    <Box mt={2} ml={2} mr={2}>
      <TextField
        {...register('email', {required: true})}
        fullWidth
        label="Email"
        type="email"
      />
    </Box>
    <Box mt={2} ml={2} mr={2}>
      <TextField
        fullWidth
        {...register('password', {required: true})}
        label="Nova Senha"
        type="password"
      />
    </Box>
    <Box mt={2} ml={2} mr={2}>
      <Button type="submit" variant="outlined" color="primary" size="large" fullWidth>Cadastrar</Button>
    </Box>
  </form>);
}

const sendFormSignIn = async (
  user: User, 
  url: string,
  errorMessage: string,
  navigate: NavigateFunction
): Promise<void> => {
  await post<string>(
    url, 
    user, 
    (token) => {
    window.sessionStorage.setItem('bearer', `Bearer ${token}`);
    navigate('/');
  },
  () => {
    toast.error(errorMessage)
  });
}

export default SigInPage;