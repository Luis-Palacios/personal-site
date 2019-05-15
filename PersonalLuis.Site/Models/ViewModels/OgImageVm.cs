namespace PersonalLuis.Site.Models.ViewModels
{
    public class OgImageVm
    {
        public OgImageVm(string src, int width, int height)
        {
            Src = src;
            Width = width;
            Height = height;
        }

        public string Src { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}
