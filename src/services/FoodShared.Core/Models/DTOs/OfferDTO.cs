namespace FoodShared.Core.Models.DTOs;
public record OfferDTO(
    Guid id, 
    string timer, 
    string title, 
    string description,
    string image,
    string price,
    UserDTO? user = null,
    List<string>? requests = null);

public record UserDTO(string name, string profile);
