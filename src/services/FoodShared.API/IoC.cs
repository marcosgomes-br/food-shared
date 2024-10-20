using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Infraestructure.Data;
using FoodShared.Infraestructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FoodShared.API;
public static class IoC
{
    internal static void AddDependencies(this IServiceCollection services)
    {
        services.AddDbContext<FoodSharedContext>(opt =>
         {
             opt.UseInMemoryDatabase("Suppliers");
         });
        services.AddScoped<IRequestRepository, RequestRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IOfferRepository, OfferRepository>();
    }
}
