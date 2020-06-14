using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactShop.Models;

namespace ReactShop.Interfaces
{
    public interface IRepositoryContextFactory
    {
        RepositoryContext CreateDbContext(string connectionString);
    }
}
