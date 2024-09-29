using FoodShared.Core.Models.Validators;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodShared.Core.Models.Entities;
public class Offer
{
    public Offer(
        Guid id, 
        string title, 
        string description, 
        int quantity, 
        long latitude,
        long longitude,
        Guid offerUserId)
    {
        Id = id;
        Title = title;
        Description = description;
        Quantity = quantity;
        Latitude = latitude;
        Longitude = longitude;
        OfferUserId = offerUserId;

        var validator = new OfferValidator().Validate(this);
        if (!validator.IsValid)
            throw new ApplicationException(validator.ToString("\n"));
    }

    public Guid Id { get; }
    public string Title { get; }
    public string Description { get; }
    public int Quantity { get; private set; }
    public long Latitude { get; set; }
    public long Longitude { get; set; }
    public Guid OfferUserId { get; }
    public User? User { get; set; }
    public List<Request> Requests { get; set; } = new();
    
    [NotMapped]
    public int AvailableQuantity { get => Quantity - Requests.Count; }

    public void ChangeQuantity(int quantity) => Quantity = quantity;
}