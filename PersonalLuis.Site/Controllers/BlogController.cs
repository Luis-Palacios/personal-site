using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
                FeaturedPosts = blogService.GetPosts(searchTerm)
            };
            return View(blogVm);
        }

        public IActionResult Detail(string postSlug)
        {
            var post = blogService.GetFeaturedPosts()
                .FirstOrDefault(p => p.Slug == postSlug);
            return View(post);
        }
    }
}
