using FoodShared.Core.Models.DTOs;
using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Interfaces.Services;
public interface IOfferService
{
    Task Create(Offer offer, string token);
    Task<List<OfferDTO>> Get(string token);
}
