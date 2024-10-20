using Carter;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;

namespace FoodShared.API.Modules;

public class RequestModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var requestRoutes = app.MapGroup("request")
                               .WithTags("Request");

        requestRoutes.MapGet("options", async (IRequestRepository repository) => await repository.GetOptions())
                     .AllowAnonymous();
        requestRoutes.MapPost("", async (IRequestRepository repository, Request request) => await repository.Create(request))
                     .RequireAuthorization();
        requestRoutes.MapDelete("{idOffer}", async (IRequestRepository repository, Guid idOffer) => await repository.Delete(idOffer))
                     .RequireAuthorization();
    }
}
