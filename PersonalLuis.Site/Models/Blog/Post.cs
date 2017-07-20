using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalLuis.Site.Models.Blog
{
    public class Post
    {
        public string Title { get; set; }
        public string BannerUrl { get; set; }
        public string BanerThumbnailUrl { get; set; }
        public string Introduction { get; set; }
        public string Content { get; set; }
        public string Slug { get; set; }
    }
}
