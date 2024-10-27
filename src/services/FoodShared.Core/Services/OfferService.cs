using FoodShared.Core.Helpers;
using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;
using FoodShared.Core.Models.Entities;
using System.Globalization;

namespace FoodShared.Core.Services;
public class OfferService(IOfferRepository repository) : IOfferService
{
    public async Task Create(Offer offer, string token)
    {
        var jwtSecurityToken = SecurityToken.Read(token);
        Guid.TryParse(jwtSecurityToken.Claims.First(x => x.Type == "id").Value, out var userId);
        offer.SetUserId(userId);
        await repository.Create(offer);
    }

    public async Task<List<OfferDTO>> Get(string token)
    {
        var jwtSecurityToken = SecurityToken.Read(token);
        Guid.TryParse(jwtSecurityToken.Claims.First(x => x.Type == "id").Value, out var userId);
        var offers = await repository.Get(userId);
        return offers.Select(x => new OfferDTO(
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
