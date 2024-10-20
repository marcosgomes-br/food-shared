using FoodShared.Core.Models.Validators;
using System.Text.Json.Serialization;

namespace FoodShared.Core.Models.Entities;
public class User
{
    public User(Guid id, string firstName, string lastName, 
        string phoneNumber, string email, string password)
    {
        Id = id;
        FirstName = firstName;
        LastName = lastName;
        PhoneNumber = phoneNumber;
        Email = email;
        Password = password;

        var validator = new UserValidator().Validate(this);
        if (!validator.IsValid)
            throw new ApplicationException(validator.ToString("\n"));
    }

    public Guid Id { get; private set; } = Guid.NewGuid();
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string PhoneNumber { get; private set; }
    public string Email { get; private set; }
    public string Password { get; private set; }

    [JsonIgnore]
    public List<Request> Requests { get; set; } = new();

    [JsonIgnore]
    public List<Offer> Offers { get; set; } = new();

    public void ChangePassword(string password) => Password = password;
}