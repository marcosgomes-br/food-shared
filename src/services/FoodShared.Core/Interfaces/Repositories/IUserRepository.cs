
using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Interfaces.Repositories;
public interface IUserRepository
{
    Task ChangePassword(string password);
    Task Create(User user);
    Task<User?> Find(string email, string password);
}
