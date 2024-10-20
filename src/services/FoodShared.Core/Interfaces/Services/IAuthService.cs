using FoodShared.Core.Models.DTOs;

namespace FoodShared.Core.Interfaces.Services;
public interface IAuthService
{
    Task LogIn(AuthDTO dto);
    Task LogOff();
}
