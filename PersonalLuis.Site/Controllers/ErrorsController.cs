using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Services;
using PersonalLuis.Site.Services.Interfaces;

namespace PersonalLuis.Site.Controllers
{
    public class ErrorsController : Controller
    {
        private readonly IBlogService blogService;
        public ErrorsController(IBlogService blogService)
        {
            this.blogService = blogService;
        }
        [Route("Error/{statusCode}")]
        public IActionResult HandleErrorCode(int statusCode)
        {
            var statusCodeData = HttpContext.Features.Get<IStatusCodeReExecuteFeature>();

            switch (statusCode)
            {
                case 404:
                    ViewBag.ErrorMessage = "Sorry the page you requested could not be found";
                    ViewBag.RouteOfException = statusCodeData.OriginalPath;
                    ViewBag.FeaturedPosts = blogService.GetFeaturedPosts("en");
                    ViewData.Add("NotFound", true);
                    break;
                case 500:
                    ViewBag.ErrorMessage = "Sorry something went wrong on the server";
                    ViewBag.RouteOfException = statusCodeData.OriginalPath;
                    break;
            }

            return View();
        }
    }
}
