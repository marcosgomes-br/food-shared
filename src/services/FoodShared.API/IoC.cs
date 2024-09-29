using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Infraestructure.Data.Repositories;

namespace FoodShared.API;
public static class IoC
{
    internal static void AddDependencies(this IServiceCollection services)
    {
        services.AddScoped<IRequestRepository, RequestRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IOfferRepository, OfferRepository>();
    }
}
