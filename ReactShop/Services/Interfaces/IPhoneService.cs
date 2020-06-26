using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Models;
using System.Security.Claims;
using ReactShop.ViewModels;

namespace ReactShop.Services.Interfaces
{
    public interface IPhoneService
    {
        IEnumerable<Phone> GetAll();
        Phone GetPhoneById(int id);
        Task AddPhone(AddPhoneRequest request);
    }
}
