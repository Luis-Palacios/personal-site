using System.Collections.Generic;
using PersonalLuis.Site.Models.Personal;

namespace PersonalLuis.Site.Services.Interfaces
{
    public interface IGeneralInfoService
    {
         GeneralInfo GetGeneralInfo();

         IEnumerable<LanguageLevel> GetLanguages();

         IEnumerable<SocialMediaInfo> GetSocialMediaLinks();

         IEnumerable<DevTool> GetDevTools();

         IEnumerable<Company> GetCompanies();
    }
}
