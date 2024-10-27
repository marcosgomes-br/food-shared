using FoodShared.Core.Helpers;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;
using FoodShared.Core.Models.Entities;
using System.Globalization;

namespace FoodShared.Core.Services;
public class RequestService(
    IRequestRepository repository,
    IOfferRepository offerRepository) : IRequestService
{
    public async Task Create(Guid offerId, string token)
    {
        var jwtSecurityToken = SecurityToken.Read(token);
        Guid.TryParse(jwtSecurityToken.Claims.First(x => x.Type == "id").Value, out var userId);
        await repository.Create(new Request(userId, offerId));
    }

    public async Task<List<OfferDTO>> GetOptions()
    {
        var offers = await offerRepository.Get();
        return offers.Where(x => x.AvailableQuantity > 0)
                     .Select(x => new OfferDTO(
                         id: x.Id,
                         user: new(
                             name: x.User!.FullName(),
                             profile: x.User!.Profile()
                         ),
                         timer: x.CreatedIn.FormartDataAndHours(),
                         title: x.Title,
                         description: x.Description,
                         image: x.Image,
                         price: x.Price.ToString("C", new CultureInfo("pt-BR"))
                     )).ToList();
    }
}