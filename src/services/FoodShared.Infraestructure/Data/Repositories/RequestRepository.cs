using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;

namespace FoodShared.Infraestructure.Data.Repositories;
public class RequestRepository(FoodSharedContext context) : IRequestRepository
{
    public async Task Create(Request request)
    {
        context.Requests.Add(request);
        await context.SaveChangesAsync();
    }
}
