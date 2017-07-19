using System;
using System.Collections.Generic;
using PersonalLuis.Site.Models.Enums;
using PersonalLuis.Site.Models.Personal;
using PersonalLuis.Site.Services.Interfaces;

namespace PersonalLuis.Site.Services
{
    public class GeneralInfoService : IGeneralInfoService
    {
        public GeneralInfo GetGeneralInfo()
        {
            return new GeneralInfo
            {
                Name = "Luis Palacios",
                Address = "Managua, Nicaragua",
                BirthDate = new DateTime(1989, 4, 22),
                Email = "lrpalaciosdev@gmail.com",
                PictureUrl="/images/luis-palacios.png",
                History = @"Hello, I’m a Full Stack Developer &amp; Computer Engineer from Managua, Nicaragua. I hold a bachelor degree of computer science from National University of Engineering. <br />
                            And scrambled it to make a type specimen book. It has survived not only five centuries"
            };
        }

        public IEnumerable<LanguageLevel> GetLanguages()
        {
            return new List<LanguageLevel>
            {
                new LanguageLevel
                {
                    Language = "C#",
                    Level = 85
                },
                new LanguageLevel
                {
                    Language = "Javascript",
                    Level = 75
                },
                new LanguageLevel
                {
                    Language = "Python",
                    Level = 70
                },
                new LanguageLevel
                {
                    Language = "HTML",
                    Level = 80
                },
                 new LanguageLevel
                {
                    Language = "Java",
                    Level = 65
                },
                 new LanguageLevel
                {
                    Language = "C",
                    Level = 60
                },
            };
        }

        public IEnumerable<SocialMediaInfo> GetSocialMediaLinks()
        {
            return new List<SocialMediaInfo>
            {
                new SocialMediaInfo
                {
                    SocialMediaType = SocialMediaType.Facebook,
                    Url = "https://www.facebook.com/luisrodolfopalacios"
                },
                new SocialMediaInfo
                {
                    SocialMediaType = SocialMediaType.Twitter,
                    Url = "https://twitter.com/LRPalacios"
                },
                new SocialMediaInfo
                {
                    SocialMediaType = SocialMediaType.GooglePlus,
                    Url = "https://plus.google.com/+LuisPalaciosLR"
                },
                 new SocialMediaInfo
                {
                    SocialMediaType = SocialMediaType.LinkedIn,
                    Url = "https://www.linkedin.com/in/luisrodolfopalacios/"
                },
                 new SocialMediaInfo
                {
                    SocialMediaType = SocialMediaType.Github,
                    Url = "https://github.com/Luis-Palacios"
                }
                
            };
        }
    }
}
