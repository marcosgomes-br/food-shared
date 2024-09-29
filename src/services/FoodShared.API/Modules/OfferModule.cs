using Carter;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;

namespace FoodShared.API.Modules;
public class OfferModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var requestRoutes = app.MapGroup("offer")
                               .WithDisplayName("Offer")
                               .WithDescription("Grupo de endPoints para ofertantes de alimento.");

        requestRoutes.MapPost("", async (IOfferRepository offerRepository, Offer offer) => await offerRepository.Create(offer));
        requestRoutes.MapGet("", async (IOfferRepository offerRepository) => await offerRepository.Get());
        requestRoutes.MapPut("", async (IOfferRepository offerRepository, Offer offer) => await offerRepository.Change(offer));
        requestRoutes.MapDelete("{id}", async (IOfferRepository offerRepository, Guid id) => await offerRepository.Delete(id));
    }
}
