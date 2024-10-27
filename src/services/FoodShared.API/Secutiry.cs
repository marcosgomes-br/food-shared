using System.Text;

namespace FoodShared.API;

internal static class Secutiry
{
    public static byte[] Key { get; } = Encoding.UTF8.GetBytes("5+IV)E2glD3xXD12rNdlZ_at9(TbG1N(E=pH)29*");
}
