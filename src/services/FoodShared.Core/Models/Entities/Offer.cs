using FoodShared.Core.Models.Validators;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FoodShared.Core.Models.Entities;
public class Offer
{
    public Offer(
        Guid id, 
        string title, 
        string description, 
        string image,
        int quantity, 
        decimal price)
    {
        Id = id == Guid.Empty ? Guid.NewGuid() : id;
        Title = title;
        Description = description;
        Image = image;
        Quantity = quantity;
        Price = price;

        var validator = new OfferValidator().Validate(this);
        if (!validator.IsValid)
            throw new ApplicationException(validator.ToString("\n"));
    }

    public Guid Id { get; private set; }
    public string Title { get; private set; }
    public string Description { get; private set; }
    public string Image { get; private set; }
    public int Quantity { get; private set; }
    public decimal Price { get; private set; }

    [JsonIgnore]
    public Guid UserId { get; private set; }

    [JsonIgnore]
    public DateTime CreatedIn { get; } = DateTime.Now;

    [JsonIgnore]
    public User? User { get; set; }

    [JsonIgnore]
    public List<Request> Requests { get; set; } = new();
    
    [NotMapped]
    public int AvailableQuantity { get => Quantity - Requests.Count; }

    public void ChangeQuantity(int quantity) => Quantity = quantity;

    public void SetUserId(Guid userId) => UserId = userId;
}