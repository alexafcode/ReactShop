using System;
using System.Collections.Generic;
using System.Linq;
using ReactShop.Models;
using System.Threading.Tasks;

namespace ReactShop.Interfaces
{
    public interface IPhoneRepositorycs
    {
        IEnumerable<Phone> GetAll();
        Phone GetPhoneById(int id);
    }
}
