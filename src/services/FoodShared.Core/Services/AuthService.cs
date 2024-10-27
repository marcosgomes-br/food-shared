using FoodShared.Core.Interfaces.Repositories;
using FoodShared.Core.Interfaces.Services;
using FoodShared.Core.Models.DTOs;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace FoodShared.Core.Services;
public class AuthService(IUserRepository userRepository) : IAuthService
{
    public async Task<string> LogIn(AuthDTO dto, byte[] key)
    {
        var user = await userRepository.Find(dto.email, dto.password);
        if (user == null)
            throw new Exception("Usuário ou senha inválido");

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("id", user.Id.ToString()),
                new Claim("name", user.FirstName),
                new Claim("email", user.Email),
                new Claim("jti", Guid.NewGuid().ToString())
            }),
            Expires = DateTime.UtcNow.AddMinutes(30),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    public Task LogOff()
    {
        throw new NotImplementedException();
    }
}
