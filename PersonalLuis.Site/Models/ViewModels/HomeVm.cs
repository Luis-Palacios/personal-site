using System.Collections.Generic;
using PersonalLuis.Site.Models.Personal;
using PersonalLuis.Site.Models.Blog;

namespace PersonalLuis.Site.Models.ViewModels
{
    public class HomeVm
    {
        public HomeVm()
        {
            Languages = new List<LanguageLevel>();
            SocialMediaUrls = new List<SocialMediaInfo>();
            DevTools = new List<DevTool>();
            Companies = new List<Company>();
            Books = new List<Book>();
            Recommentations = new List<Recommendation>();
            FeaturedPosts = new List<Post>();
        }

        public GeneralInfo GeneralInfo { get; set; }
        public IEnumerable<LanguageLevel> Languages { get; set; }
        public IEnumerable<SocialMediaInfo> SocialMediaUrls { get; set; }
        public IEnumerable<DevTool> DevTools { get; set; }
        public IEnumerable<Company> Companies { get; set; }
        public IEnumerable<Book> Books { get; set; }
        public IEnumerable<Recommendation> Recommentations { get; set; }
        public IEnumerable<Post> FeaturedPosts { get; set; }
    }
}
