using Carter;

namespace FoodShared.API.Modules;
public class OfferModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var requestRoutes = app.MapGroup("offer")
                               .WithDisplayName("Offer")
                               .WithDescription("Grupo de endPoints para ofertantes de alimento.");
    }
}
