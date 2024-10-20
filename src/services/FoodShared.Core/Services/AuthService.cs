using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;

namespace FoodShared.Core.Services;
public class AuthService(IUserRepository userRepository) : IAuthService
{
    public async Task LogIn(AuthDTO dto)
    {
        var user = await userRepository.Find(dto.email, dto.password);
        if (user == null)
            throw new Exception("Usuário ou senha inválido");
    }

    public Task LogOff()
    {
        throw new NotImplementedException();
    }
}
