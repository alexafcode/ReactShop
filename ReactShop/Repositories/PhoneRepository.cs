using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Models;
using ReactShop.Interfaces;

namespace ReactShop.Repositories
{
    public class PhoneRepository : BaseRepository, IPhoneRepositorycs
    {
        public PhoneRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public IEnumerable<Phone> GetAll()
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            return context.Phones.ToList();
        }

        public Phone GetPhoneById(int id)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            return context.Phones.FirstOrDefault(p => p.Id == id);
        }
        public async Task AddPhone(Phone phone)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            if(!context.Phones.Any(p => p.PhoneName == phone.PhoneName))
            {
                context.Add(phone);
                await context.SaveChangesAsync();
            }
        }
    }
}
