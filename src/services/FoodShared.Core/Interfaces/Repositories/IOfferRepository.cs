using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Interfaces.Repositories;
public interface IOfferRepository
{
    Task Change(Offer offer);
    Task Create(Offer offer);
    Task Delete(Guid id);
    Task<List<Offer>> Get();
    Task<List<Offer>> Get(Guid userId);
}
