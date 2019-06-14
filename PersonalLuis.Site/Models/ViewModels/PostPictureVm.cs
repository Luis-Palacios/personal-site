namespace PersonalLuis.Site.Models.ViewModels
{
    public class PostPictureVm
    {
        public PostPictureVm(string imageName, string imageAlt, string fallBack, bool lazy)
        {
            ImageName = imageName;
            ImageAlt = imageAlt;
            FallBack = fallBack;
            Lazy = lazy;
        }

        public string ImageName { get; set; }
        public string ImageAlt { get; set; }
        public string FallBack { get; set; }
        public bool Lazy { get; set; }
    }
}
