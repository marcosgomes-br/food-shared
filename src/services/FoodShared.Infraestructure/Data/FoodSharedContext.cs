using FoodShared.Core.Models.Entities;
using FoodShared.Infraestructure.Data.Mappings;
using Microsoft.EntityFrameworkCore;

namespace FoodShared.Infraestructure.Data;
public class FoodSharedContext : DbContext
{
    public FoodSharedContext(DbContextOptions<FoodSharedContext> options) : base(options) { ; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new OfferMapping());
        modelBuilder.ApplyConfiguration(new UserMapping());
        modelBuilder.ApplyConfiguration(new RequestMapping());
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Offer> Offers { get; set; }
    public DbSet<Request> Requests { get; set; }
}
