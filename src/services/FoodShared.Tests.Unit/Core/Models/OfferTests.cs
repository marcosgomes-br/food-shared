using FoodShared.Core.Models.Entities;

namespace FoodShared.Tests.Unit.Core.Models;
public class OfferTests
{
    [Fact(DisplayName = "Oferta Instânciada com Sucesso")]
    public void OfferSuccess()
    {
        var offer = new Offer(Guid.NewGuid(), "Arroz", "Delicioso Arroz", "http://image.com", 10, 10);
        Assert.True(offer != null);
    }

    [Fact(DisplayName = "Oferta Instânciada com Falha - Título Inválido")]
    
    public void OfferFailure_Title()
    {
        Assert.Throws<ApplicationException>(() => new Offer(Guid.NewGuid(), "", "Descrição", "http://imagem.com", 10, 0));
    }

    [Fact(DisplayName = "Oferta Instânciada com Falha - Descrição Inválido")]

    public void OfferFailure_Description()
    {
        Assert.Throws<ApplicationException>(() => new Offer(Guid.NewGuid(), "Title", "", "http://image.com", 10, 0));
    }

    [Fact(DisplayName = "Oferta Instânciada com Falha - Imagem Inválida")]

    public void OfferFailure()
    {
        Assert.Throws<ApplicationException>(() => new Offer(Guid.NewGuid(), "Title", "Description", "", 0, 0));
    }
}
