using Carter;

namespace FoodShared.API.Modules;

public class RequestModule : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var requestRoutes = app.MapGroup("request")
                               .WithTags("Request");

        requestRoutes.MapGet("options", GetOptions);
    }

    private Task GetOptions() => Task.FromResult(0);
}
