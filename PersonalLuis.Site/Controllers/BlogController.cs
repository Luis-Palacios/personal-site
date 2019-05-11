using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models.ViewModels;
using PersonalLuis.Site.Services.Interfaces;

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
            BlogVm blogVm = new BlogVm
            {
                FeaturedPosts = blogService.GetFeaturedPosts()
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
