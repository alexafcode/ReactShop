using System.ComponentModel.DataAnnotations;

namespace ReactShop.ViewModels
{
    public class AddPhoneRequest
    {
        [Required]
        public string Manufacturer { get; set; }
        [Required]
        public string PhoneName { get; set; }
        [Required]
        public string CPUName { get; set; }
        [Required]
        public int CPUCore { get; set; }
        [Required]
        public int Ram { get; set; }
        [Required]
        public int Sim { get; set; }
        [Required]
        public int ScreenWidth { get; set; }
        [Required]
        public int ScreenHeight { get; set; }
        [Required]
        public int ScreenSize { get; set; }
        [Required]
        public int Resolution { get; set; }
        [Required]
        public int Rom { get; set; }
        [Required]
        public int Camera { get; set; }
        [Required]
        public int Battery { get; set; }
        [Required]
        public string OS { get; set; }
        [Required]
        public int Rating { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public string ImagePreview { get; set; }
        [Required]
        public string ImageLarge { get; set; }
        [Required]
        public int Price { get; set; }
    }
}
