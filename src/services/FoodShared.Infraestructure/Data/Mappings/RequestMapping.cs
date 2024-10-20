using FoodShared.Core.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodShared.Infraestructure.Data.Mappings;
public class RequestMapping : IEntityTypeConfiguration<Request>
{
    public void Configure(EntityTypeBuilder<Request> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.User).WithMany(x => x.Requests).HasForeignKey(x => x.UserId);
        builder.HasOne(x => x.Offer).WithMany(x => x.Requests).HasForeignKey(x => x.OfferId);
    }
}
