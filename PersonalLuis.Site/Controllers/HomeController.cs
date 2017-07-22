﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models;
using PersonalLuis.Site.Models.ViewModels;
using PersonalLuis.Site.Services.Interfaces;

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
            HomeVm homeVm = new HomeVm();
            homeVm.GeneralInfo = this.generalInfoService.GetGeneralInfo(); 
            homeVm.Languages = this.generalInfoService.GetLanguages();
            homeVm.SocialMediaUrls = this.generalInfoService.GetSocialMediaLinks();
            homeVm.DevTools = this.generalInfoService.GetDevTools();
            homeVm.Companies = this.generalInfoService.GetCompanies();
            homeVm.Contacts = this.generalInfoService.GetContacts();
            homeVm.Recommentations = this.generalInfoService.GetRecommendations();
            homeVm.FeaturedPosts = this.blogService.GetFeaturedPosts();
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