using Carter;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;

namespace FoodShared.API.Modules;

public class UserModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var userRoutes = app.MapGroup("user").WithTags("User");

        userRoutes.MapPost("", async (IUserRepository repository, User user) => await repository.Create(user));
        userRoutes.MapPatch("", async (IUserRepository repository, string password) => await repository.ChangePassword(password))
                  .RequireAuthorization();
    }
}
