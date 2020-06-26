using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Models;
using ReactShop.Services.Interfaces;
using ReactShop.Interfaces;
using ReactShop.Helpers;
using ReactShop.ViewModels;

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
        public async Task AddPhone (AddPhoneRequest request)
        {
            Phone phone = new Phone
            {
                PhoneName = request.PhoneName,
                Manufacturer = request.Manufacturer,
                CPUName = request.CPUName,
                CPUCore = request.CPUCore,
                Ram = request.Ram,
                Sim = request.Sim,
                ScreenWidth = request.ScreenWidth,
                ScreenHeight = request.ScreenHeight,
                ScreenSize = request.ScreenSize,
                Resolution = request.Resolution,
                Rom = request.Rom,
                Camera = request.Camera,
                Battery = request.Battery,
                OS = request.OS,
                Rating = request.Rating,
                Image = request.Image,
                ImagePreview = request.ImagePreview,
                ImageLarge = request.ImageLarge,
                Price = request.Price
            };
            await _repository.AddPhone(phone);
        }
    }
}