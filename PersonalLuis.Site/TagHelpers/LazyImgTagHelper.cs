using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text.Encodings.Web;

namespace PersonalLuis.Site.TagHelpers
{
    [HtmlTargetElement("lazy-img", TagStructure = TagStructure.WithoutEndTag)]
    public class LazyImgTagHelper: TagHelper
    {
        public string Src { get; set; }
        public string Class { get; set; }
        public string Alt { get; set; }
        public bool NoLazyClass { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            base.Process(context, output);
            
            output.TagName = "img";
            output.Attributes.SetAttribute("data-src", Src);
            output.Attributes.SetAttribute("src", "/images/blur.png");
            if(!NoLazyClass)
                output.Attributes.SetAttribute("class", "lazy");
            output.AddClass(Class, HtmlEncoder.Default);
            output.Attributes.SetAttribute("alt", Alt);
        }

    }
}
