using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models;
using PersonalLuis.Site.Models.ViewModels;
using PersonalLuis.Site.Services.Interfaces;
using PersonalLuis.Site.Utils;

namespace PersonalLuis.Site.Controllers
{
    public class HomeController : Controller
    {
        private readonly IGeneralInfoService generalInfoService;
        private readonly IBlogService blogService;

        public HomeController(IGeneralInfoService generalInfoService, IBlogService blogService)
        {
            this.generalInfoService = generalInfoService;
            this.blogService = blogService;
        }
        public IActionResult Index()
        {
            ViewBag.MetaDescription = Constants.HomeMetaDescription;
            HomeVm homeVm = new HomeVm
            {
                GeneralInfo = this.generalInfoService.GetGeneralInfo(),
                Languages = this.generalInfoService.GetLanguages(),
                SocialMediaUrls = this.generalInfoService.GetSocialMediaLinks(),
                DevTools = this.generalInfoService.GetDevTools(),
                Companies = this.generalInfoService.GetCompanies(),
                Books = this.generalInfoService.GetBooks(),
                Recommentations = this.generalInfoService.GetRecommendations(),
                FeaturedPosts = this.blogService.GetFeaturedPosts()
            };
            return View(homeVm);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
