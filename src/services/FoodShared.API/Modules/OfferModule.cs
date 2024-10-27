using Carter;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;
using FoodShared.Core.Models.Entities;
using Microsoft.AspNetCore.Http;

namespace FoodShared.API.Modules;
public class OfferModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var requestRoutes = app.MapGroup("offer")
                               .WithDisplayName("Offer")
                               .WithDescription("Grupo de endPoints para ofertantes de alimento.");

        requestRoutes.MapPost("", PostOffer)
                     .RequireAuthorization();
        requestRoutes.MapGet("", GetOffer)
                     .RequireAuthorization();
        requestRoutes.MapPut("", async (IOfferRepository repository, Offer offer) => await repository.Change(offer))
                     .RequireAuthorization();
        requestRoutes.MapDelete("{id}", async (IOfferRepository repository, Guid id) => await repository.Delete(id))
                     .RequireAuthorization();
    }

    private async Task PostOffer(HttpContext httpContext, IOfferService service, Offer offer)
    {
        var token = httpContext.Request.Headers["Authorization"].FirstOrDefault();
        await service.Create(offer, token!);
    } 

    private async Task<List<OfferDTO>> GetOffer(HttpContext httpContext, IOfferService service)
    {
        var token = httpContext.Request.Headers["Authorization"].FirstOrDefault();
        var response = await service.Get(token!);
        return response;
    }
}
