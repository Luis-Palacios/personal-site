using Microsoft.AspNetCore.Mvc;

namespace PersonalLuis.Site.Models.Blog
{
    public class Post
    {
        private readonly IUrlHelper urlHelper;

        public Post(IUrlHelper urlHelper)
        {
            this.urlHelper = urlHelper;
        }

        public string Title { get; set; }
        public string BannerUrl { get; set; }
        public string BanerThumbnailUrl { get; set; }
        public string Introduction { get; set; }
        public string Content { get; set; }
        public string Slug { get; set; }

        public bool isMedium { get; set; }
        public string ExternalUrl { get; set; }

        public string Url
        {
            get
            {
                if (isMedium)
                    return ExternalUrl;
                return urlHelper.Action("Detail", "Blog", new { postSlug = Slug });
            }
        }
    }
}
