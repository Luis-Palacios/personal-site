using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models.Blog;
using PersonalLuis.Site.Models.ViewModels;
using PersonalLuis.Site.Services.Interfaces;
using PersonalLuis.Site.Utils;

namespace PersonalLuis.Site.Controllers
{
    public class BlogController : Controller
    {
        private readonly IBlogService blogService;

        public BlogController(IBlogService blogService)
        {
            this.blogService = blogService;
        }

        public IActionResult Index(string searchTerm)
        {
            ViewBag.SearchTerm = searchTerm;
            ViewBag.MetaDescription = Constants.BlogMetaDescription;
            BlogVm blogVm = new BlogVm
            {
                FeaturedPosts = blogService.GetPosts(searchTerm, "en")
            };
            return View(blogVm);
        }

        public IActionResult Detail(string postSlug, string lang = "en")
        {
            ViewBag.Lang = lang;
            Post post;
            if (lang == "en")
            {
                post = blogService.GetFeaturedPosts(lang)
                    .FirstOrDefault(p => p.Slug == postSlug);
            }
            else
            {
                post = blogService.GetFeaturedPosts(lang)
                    .FirstOrDefault(p => p.SlugEs == postSlug);
            }
            return View(post);
        }
    }
}
