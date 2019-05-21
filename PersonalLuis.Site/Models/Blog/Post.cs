using Microsoft.AspNetCore.Mvc;
using System;

namespace PersonalLuis.Site.Models.Blog
{
    public class Post
    {
        private readonly IUrlHelper urlHelper;

        public Post(IUrlHelper urlHelper)
        {
            this.urlHelper = urlHelper;
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string BannerUrl { get; set; }
        public string BanerThumbnailUrl { get; set; }
        public string Introduction { get; set; }
        public string Content { get; set; }
        public string Slug { get; set; }
        public string Author { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Category { get; set; }
        public bool Published { get; set; }

        public bool IsMedium { get; set; }
        public string ExternalUrl { get; set; }

        public string Url
        {
            get
            {
                if (IsMedium)
                    return ExternalUrl;
                return urlHelper.Action("Detail", "Blog", new { postSlug = Slug });
            }
        }
    }
}
