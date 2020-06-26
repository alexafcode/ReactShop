using System.ComponentModel.DataAnnotations;

namespace ReactShop.ViewModels
{
    public class UserRequest
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
