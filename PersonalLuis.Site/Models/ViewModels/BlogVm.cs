using System.Collections.Generic;
using PersonalLuis.Site.Models.Personal;
using PersonalLuis.Site.Models.Blog;

namespace PersonalLuis.Site.Models.ViewModels
{
    public class BlogVm
    {
        public BlogVm()
        {
            FeaturedPosts = new HashSet<Post>();
        }
        
        public IEnumerable<Post> FeaturedPosts { get; set; }
    }

}
