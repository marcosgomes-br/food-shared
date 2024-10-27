using Carter;
using FoodShared.Core.Interfaces.Services;

namespace FoodShared.API.Modules;

public class RequestModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var requestRoutes = app.MapGroup("request")
                               .WithTags("Request");

        requestRoutes.MapGet("options", async (IRequestService service) => await service.GetOptions());

        requestRoutes.MapPost("{idOffer}", PostRequest)
                     .RequireAuthorization();
    }

    private async Task PostRequest(
        HttpContext httpContext, 
        IRequestService service, 
        Guid idOffer)
    {
        var token = httpContext.Request.Headers["Authorization"].FirstOrDefault();
        await service.Create(idOffer, token!);
    }
}
