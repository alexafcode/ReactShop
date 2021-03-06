﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactShop.Models;
using ReactShop.Interfaces;

namespace ReactShop.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }
        public User GetUser(string userName)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            return context.Users.FirstOrDefault(u => u.Login == userName);
        }
        public User Create(User user)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            if (!context.Users.Any(u => u.Login == user.Login) && !context.Users.Any(u => u.Email == user.Email))
            {
                context.Add(user);
                context.SaveChanges();
                return user;
            }
            return null;
        }
        public IEnumerable<User> GetAll()
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            return context.Users.ToList();
        }
        public User GetUserByName(string name)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            return context.Users.FirstOrDefault(u => u.Login == name);
        }
        public  User GetUserByEmail(string email)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            return context.Users.FirstOrDefault(u => u.Email == email);
        }
        public async Task UpdateUser(User user)
        {
            using var context = ContextFactory.CreateDbContext(ConnectionString);
            context.Users.Update(user);
            await context.SaveChangesAsync();
        }
    }
}
