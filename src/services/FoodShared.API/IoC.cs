using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Services;
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
        
        #region Repositories
        services.AddScoped<IRequestRepository, RequestRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IOfferRepository, OfferRepository>();
        #endregion

        #region Services
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IRequestService, RequestService>();
        services.AddScoped<IOfferService, OfferService>();
        services.AddScoped<IUserService, UserService>();
        #endregion
    }
}
