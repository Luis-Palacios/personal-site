using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.TagHelpers;
using PersonalLuis.Site.Models.ViewModels;

namespace PersonalLuis.Site.ViewComponents
{
    [HtmlTargetElement("og-image", TagStructure = TagStructure.WithoutEndTag)]
    public class OgImageViewComponent: ViewComponent
    {
        public IViewComponentResult Invoke(string src, int width, int height)
        {
            var model = new OgImageVm(src, width, height);
            return View(model);
        }
    }
}
