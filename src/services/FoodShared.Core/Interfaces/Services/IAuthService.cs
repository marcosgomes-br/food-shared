using FoodShared.Core.Models.DTOs;

namespace FoodShared.Core.Interfaces.Services;
public interface IAuthService
{
    Task<string> LogIn(AuthDTO dto, byte[] key);
    Task LogOff();
}
