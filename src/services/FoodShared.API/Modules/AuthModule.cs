using Carter;
using FoodShared.Core.Interfaces.Services;

namespace FoodShared.API.Modules;
public class AuthModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var auth = app.MapGroup("auth")
                      .WithTags("Auth");

        auth.MapPost("login", LogIn);
        auth.MapPost("logoff", LogOff);
    }

    private async Task LogIn(IAuthService service) => await service.LogIn();
    private async Task LogOff(IAuthService service) => await service.LogOff();
}