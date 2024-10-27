using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Interfaces.Services;

public interface IUserService
{
    Task<string> Create(User user, byte[] key);
}
