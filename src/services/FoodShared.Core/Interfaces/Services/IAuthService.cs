namespace FoodShared.Core.Interfaces.Services;
public interface IAuthService
{
    Task LogIn();
    Task LogOff();
}
