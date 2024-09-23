using Carter;

namespace FoodShared.API.Modules;
public class AuthModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var auth = app.MapGroup("auth");
        auth.MapPost("login", LogIn);
        auth.MapPost("logoff", LogOff);
    }

    private async Task LogIn() => throw new NotImplementedException();
    private async Task LogOff() => throw new NotImplementedException();
}
