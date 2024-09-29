using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodShared.Infraestructure.Data.Repositories;
public class OfferRepository(FoodSharedContext context) : IOfferRepository
{
    public async Task Change(Offer offer)
    {
        context.Offers.Update(offer);
        await context.SaveChangesAsync();
    }

    public async Task Create(Offer offer)
    {
        context.Offers.Add(offer);
        await context.SaveChangesAsync();
    }

    public async Task Delete(Guid id)
    {
        var offer = context.Offers.FirstOrDefault(o => o.Id == id);
        if (offer == null)
            throw new Exception("Offer inválida!");

        context.Offers.Remove(offer);
        await context.SaveChangesAsync();
    }

    public async Task<List<Offer>> Get() => await context.Offers.ToListAsync();
}
