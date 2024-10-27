using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;
using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Services;
public class UserService(
    IUserRepository repository, 
    IAuthService authService) : IUserService
{
    public async Task<string> Create(User user, byte[] key)
    {
        await repository.Create(user);
        return await authService.LogIn(new AuthDTO(user.Email, user.Password), key);
    }
}
