﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactShop.Interfaces;

namespace ReactShop.Repositories
{
    public class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IRepositoryContextFactory ContextFactory { get; }
        public BaseRepository(string connectionString, IRepositoryContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}
