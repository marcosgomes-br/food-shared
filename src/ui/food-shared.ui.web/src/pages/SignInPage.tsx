import { Box, Button, Divider, Grid2, TextField, Typography } from "@mui/material";

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
          <Box mt={2} ml={2} mr={2}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
            />
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <TextField
              fullWidth
              id="email"
              label="Senha"
              type="password"
            />
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <Button variant="contained" color="success" size="large" fullWidth>Entrar</Button>
          </Box>
          <Box mt={5} ml={2} mr={2}>
            <Divider orientation="horizontal" flexItem>OU</Divider>
          </Box>
          <Box mt={1} ml={2} mr={2}>
            <Typography variant="h5" component="h5" textAlign="center">
              Crie uma conta para continuar
            </Typography>
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <TextField
              fullWidth
              id="nome"
              label="Nome"
              type="text"
            />
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <TextField
              fullWidth
              id="sobrenome"
              label="Sobrenome"
              type="text"
            />
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <TextField
              fullWidth
              id="novoEmail"
              label="Email"
              type="email"
            />
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <TextField
              fullWidth
              id="novaSenha"
              label="Nova Senha"
              type="password"
            />
          </Box>
          <Box mt={2} ml={2} mr={2}>
            <Button variant="outlined" color="primary" size="large" fullWidth>Cadastrar</Button>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default SigInPage;