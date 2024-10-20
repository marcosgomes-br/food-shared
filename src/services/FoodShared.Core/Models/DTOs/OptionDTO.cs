namespace FoodShared.Core.Models.DTOs;
public record OptionDTO(
    Guid id, 
    UserDTO user, 
    string timer, 
    string title, 
    string description,
    string image,
    string value);

public record UserDTO(string name, string profile);
