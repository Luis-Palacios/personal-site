using System.Collections.Generic;
using PersonalLuis.Site.Models.Personal;

namespace PersonalLuis.Site.Models.ViewModels
{
    public class HomeVm
    {
        public HomeVm()
        {
            Languages = new List<LanguageLevel>();
            SocialMediaUrls = new List<SocialMediaInfo>();
            DevTools = new List<DevTool>();
            Companies = new List<Company>();
        }
        public GeneralInfo GeneralInfo { get; set; }
        public IEnumerable<LanguageLevel> Languages { get; set; }
        public IEnumerable<SocialMediaInfo> SocialMediaUrls { get; set; }
        public IEnumerable<DevTool> DevTools { get; set; }
        public IEnumerable<Company> Companies { get; set; }
    }
}
