using Microsoft.AspNetCore.Mvc;
using System;

namespace PersonalLuis.Site.Models.Blog
{
    public class Post
    {
        private readonly IUrlHelper urlHelper;
        private readonly string lang;

        public Post(IUrlHelper urlHelper, string lang)
        {
            this.urlHelper = urlHelper;
            this.lang = lang;
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

        public string TitleEs { get; set; }
        public string SlugEs { get; set; }
        public string IntroductionEs { get; set; }
        public string ContentEs { get; set; }

        public string PostTitle
        {
            get
            {
                return (lang == "en") ? Title : TitleEs;
            }
        }

        public string PostContent
        {
            get
            {
                return (lang == "en") ? Content : ContentEs;
            }
        }

        public string PostIntroduction
        {
            get
            {
                return (lang == "en") ? Introduction : IntroductionEs;
            }
        }

        public string Url
        {
            get
            {
                if (IsMedium)
                    return ExternalUrl;
                return urlHelper.RouteUrl("blog", new { postSlug = Slug });
            }
        }

        public string SpanishUrl
        {
            get
            {
                return urlHelper.Action("Detail", "Blog", new { postSlug = SlugEs, lang = "es" });
            }
        }
    }
}
