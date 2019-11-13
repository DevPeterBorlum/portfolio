using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WPSSAflevering.Models
{
    public partial class PeterDatabaseContext : DbContext
    {
        public PeterDatabaseContext()
        {
        }

        public PeterDatabaseContext(DbContextOptions<PeterDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Names> Names { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Names>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.FirstName).HasMaxLength(255);

                entity.Property(e => e.Sex).HasMaxLength(255);
            });
        }
    }
}
