using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string PhoneName { get; set; }
        public string CPUName { get; set; }
        public int  CPUCore { get; set; }
        public int Ram { get; set; }
        public int Sim { get; set; }
        public int ScreenWidth { get; set; }
        public int ScreenHeight { get; set; }
        public decimal ScreenSize { get; set; }
        public int Resolution { get; set; }
        public int Rom { get; set; }
        public int Camera { get; set; }
        public int Battery { get; set; }
        public string OS { get; set; }
        public decimal Rating { get; set; }
        public string Image { get; set; }
        public string ImagePreview { get; set; }
        public string ImageLarge { get; set; }
        public int Price { get; set; }
    }
}

