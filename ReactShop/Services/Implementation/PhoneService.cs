using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Models;
using ReactShop.Services.Interfaces;
using ReactShop.Interfaces;
using ReactShop.Helpers;

namespace ReactShop.Services.Implementation
{
    public class PhoneService: IPhoneService
    {
        IPhoneRepositorycs _repository;
        public PhoneService(IPhoneRepositorycs repository)
        {
            _repository = repository;
        }
        public IEnumerable<Phone> GetAll()
        {
            return _repository.GetAll();
        }
        public Phone GetPhoneById(int id)
        {
            return _repository.GetPhoneById(id);
        }
    }
}
