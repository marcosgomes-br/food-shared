using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;

namespace FoodShared.Infraestructure.Data.Repositories;
public class UserRepository(FoodSharedContext context) : IUserRepository
{
    public Task ChangePassword(string password)
    {
        throw new NotImplementedException();
    }

    public async Task Create(User user)
    {
        context.Users.Add(user);
        await context.SaveChangesAsync();
    }
}
