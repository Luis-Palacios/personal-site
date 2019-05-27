using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models.ViewModels;

namespace PersonalLuis.Site.ViewComponents
{
    public class PostPictureViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(string imageName, string imageAlt, string fallBack, bool lazy)
        {
            var model = new PostPictureVm(imageName, imageAlt, fallBack, lazy);
            return View(model);
        }
    }
}
