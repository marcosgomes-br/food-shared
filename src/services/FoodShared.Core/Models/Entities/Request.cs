namespace FoodShared.Core.Models.Entities;
public class Request
{
    public Request(Guid userId, Guid offerId)
    {
        UserId = userId;
        OfferId = offerId;
    }

    public Guid UserId { get; }
    public Guid OfferId { get; }
    public User? User { get; set; }
    public Offer? Offer { get; set; }
}
