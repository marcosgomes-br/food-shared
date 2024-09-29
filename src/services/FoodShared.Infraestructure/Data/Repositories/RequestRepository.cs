using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodShared.Infraestructure.Data.Repositories;
public class RequestRepository(FoodSharedContext context) : IRequestRepository
{
    public async Task Create(Request request)
    {
        context.Requests.Add(request);
        await context.SaveChangesAsync();
    }

    public async Task Delete(Guid idOffer)
    {
        var request = context.Requests.FirstOrDefault(x => x.OfferId == idOffer);
        if (request == null)
            throw new Exception("Request inválida!");

        context.Requests.Remove(request);
        await context.SaveChangesAsync();
    }

    public async Task<List<Request>> GetOptions() => await context.Requests.ToListAsync();
}
