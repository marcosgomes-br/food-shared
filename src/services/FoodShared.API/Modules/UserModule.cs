using Carter;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.Entities;

namespace FoodShared.API.Modules;

public class UserModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var userRoutes = app.MapGroup("user").WithTags("User");

        userRoutes.MapPost("", async (IUserService service, User user) => await service.Create(user, Secutiry.Key))
                  .AllowAnonymous();
        userRoutes.MapPatch("", async (IUserRepository repository, string password) => await repository.ChangePassword(password))
                  .RequireAuthorization();
    }
}
