using FluentValidation;
using FoodShared.Core.Models.Entities;

namespace FoodShared.Core.Models.Validators;
public class OfferValidator : AbstractValidator<Offer>
{
    public OfferValidator()
    {
        RuleFor(x => x.Title).NotEmpty();
        RuleFor(x => x.Description).NotEmpty();
        RuleFor(x => x.Quantity).Must(x => x > 0);
    }
}
