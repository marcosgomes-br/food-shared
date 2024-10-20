﻿using FoodShared.Core.Models.Validators;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FoodShared.Core.Models.Entities;
public class Offer
{
    public Offer(
        Guid id, 
        string title, 
        string description, 
        int quantity, 
        Guid offerUserId)
    {
        Id = id;
        Title = title;
        Description = description;
        Quantity = quantity;
        OfferUserId = offerUserId;

        var validator = new OfferValidator().Validate(this);
        if (!validator.IsValid)
            throw new ApplicationException(validator.ToString("\n"));
    }

    public Guid Id { get; private set; } = Guid.NewGuid();
    public string Title { get; private set; }
    public string Description { get; private set; }
    public int Quantity { get; private set; }
    public Guid OfferUserId { get; }

    [JsonIgnore]
    public User? User { get; set; }

    [JsonIgnore]
    public List<Request> Requests { get; set; } = new();
    
    [NotMapped]
    public int AvailableQuantity { get => Quantity - Requests.Count; }

    public void ChangeQuantity(int quantity) => Quantity = quantity;
}