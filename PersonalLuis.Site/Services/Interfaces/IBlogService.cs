using PersonalLuis.Site.Models.Blog;
using System.Collections.Generic;

namespace PersonalLuis.Site.Services.Interfaces
{
    public interface IBlogService
    {
        IEnumerable<Post> GetFeaturedPosts(string lang);
        IEnumerable<Post> GetPosts(string searchTerm, string lang);
    }
}
