using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Models.Entities;
using Microsoft.EntityFrameworkCore;

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

    public async Task<User?> Find(string email, string password) => 
        await context.Users.FirstOrDefaultAsync(x => x.Email.ToLower() == email.ToLower().Trim() && x.Password == password);
}
