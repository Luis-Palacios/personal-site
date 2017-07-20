using PersonalLuis.Site.Models.Blog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalLuis.Site.Services.Interfaces
{
    public interface IBlogService
    {
        IEnumerable<Post> GetFeaturedPosts();
    }
}
