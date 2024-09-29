using FoodShared.Core.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodShared.Infraestructure.Data;
public class FoodSharedContext : DbContext
{
    public FoodSharedContext(DbContextOptions<FoodSharedContext> options) : base(options) { ; }

    public DbSet<User> Users { get; set; }
    public DbSet<Offer> Offers { get; set; }
    public DbSet<Request> Requests { get; set; }
}
