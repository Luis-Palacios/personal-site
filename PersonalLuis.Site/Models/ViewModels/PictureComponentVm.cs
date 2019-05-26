using System.Collections.Generic;

namespace PersonalLuis.Site.Models.ViewModels
{
    public class PictureComponentVm
    {
        public ICollection<string> ImageUrls { get; set; }
        public string ImageAlt { get; set; }
        public string ImageClass { get; set; }
        public bool LazyLoad { get; set; }
        public string PictureClass { get; set; }

        public PictureComponentVm(ICollection<string> imageUrls, string imageAlt, string imageClass, bool lazyLoad, string pictureClass)
        {
            ImageUrls = imageUrls;
            ImageAlt = imageAlt;
            ImageClass = imageClass;
            LazyLoad = lazyLoad;
            PictureClass = pictureClass;
        }
    }
}
