using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ReactShop.Models
{
    public class RepositoryContextFactory : IRepositoryContextFactory
    {
        public RepositoryContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RepositoryContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new RepositoryContext(optionsBuilder.Options);
        }
    }
}
