using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models.ViewModels;
using System.Collections.Generic;

namespace PersonalLuis.Site.ViewComponents
{
    public class PictureViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(ICollection<string> imagesUrls, string imageAlt, string imageClass, string pictureClass = "", bool lazy = false)
        {
            var model = new PictureComponentVm(imagesUrls, imageAlt, imageClass, lazy, pictureClass);
            return View(model);
        }
    }
}
