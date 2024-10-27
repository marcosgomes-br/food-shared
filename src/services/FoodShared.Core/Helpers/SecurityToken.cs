using System.IdentityModel.Tokens.Jwt;

namespace FoodShared.Core.Helpers;
internal static class SecurityToken
{
    public static JwtSecurityToken Read(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var jwtSecurityToken = handler.ReadJwtToken(token.Replace("Bearer ", ""));
        return jwtSecurityToken;
    }
}
