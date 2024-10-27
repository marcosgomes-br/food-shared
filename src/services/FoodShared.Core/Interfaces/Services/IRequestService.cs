using FoodShared.Core.Models.DTOs;

namespace FoodShared.Core.Interfaces.Services;
public interface IRequestService
{
    Task Create(Guid offerId, string token);
    Task<List<OfferDTO>> GetOptions();
}
