using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Interfaces.Repositories;
public interface IRequestRepository
{
    Task Create(Request request);
}
