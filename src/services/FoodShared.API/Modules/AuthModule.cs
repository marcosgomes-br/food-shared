using Carter;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;

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

    private async Task LogIn(IAuthService service, AuthDTO dto) => await service.LogIn(dto);
    private async Task LogOff(IAuthService service) => await service.LogOff();
}