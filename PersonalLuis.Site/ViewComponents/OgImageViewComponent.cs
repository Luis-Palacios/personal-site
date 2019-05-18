using Microsoft.AspNetCore.Mvc;
using PersonalLuis.Site.Models.ViewModels;

namespace PersonalLuis.Site.ViewComponents
{
    public class OgImageViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke(string src, int width, int height)
        {
            var model = new OgImageVm(src, width, height);
            return View(model);
        }
    }
}
