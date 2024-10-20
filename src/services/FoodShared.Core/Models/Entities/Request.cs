using System.Text.Json.Serialization;

namespace FoodShared.Core.Models.Entities;
public class Request
{
    public Request(Guid userId, Guid offerId)
    {
        UserId = userId;
        OfferId = offerId;
    }
    public Guid Id { get; private set; } = Guid.NewGuid();
    public Guid UserId { get; private set; }
    public Guid OfferId { get; private set; }

    [JsonIgnore]
    public User? User { get; set; }

    [JsonIgnore]
    public Offer? Offer { get; set; }
}
