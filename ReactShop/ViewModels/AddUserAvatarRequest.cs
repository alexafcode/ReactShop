using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.ViewModels
{
    public class AddUserAvatarRequest
    {
        public string Name { get; set; }
        public IFormFile Image { get; set; }
    }
}
