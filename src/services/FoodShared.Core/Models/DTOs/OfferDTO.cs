namespace FoodShared.Core.Models.DTOs;
public record OfferDTO(
    Guid id, 
    UserDTO user, 
    string timer, 
    string title, 
    string description,
    string image,
    string price);

public record UserDTO(string name, string profile);
