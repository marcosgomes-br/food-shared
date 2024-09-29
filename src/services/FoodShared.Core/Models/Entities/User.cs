using FoodShared.Core.Models.Validators;

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

    public Guid Id { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string PhoneNumber { get; }
    public string Email { get; }
    public string Password { get; }
}