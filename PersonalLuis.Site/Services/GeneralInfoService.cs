using System;
using System.Collections.Generic;
using PersonalLuis.Site.Models.Enums;
using PersonalLuis.Site.Models.Personal;
using PersonalLuis.Site.Services.Interfaces;

namespace PersonalLuis.Site.Services
{
    public class GeneralInfoService : IGeneralInfoService
    {
        public IEnumerable<Company> GetCompanies()
        {
           return new List<Company>
           {
             new Company
             {
                 Name="Rain",
                 PictureUrl="/images/companies/rain-logo.jpg",
                 WebPageUrl="https://rain.agency/",
                 StartDate="July 2017",
                 EndDate="Present",
                 Position="Software Developer"
             },
            new Company
             {
                 Name="OOQIA",
                 PictureUrl="/images/companies/ooqia-logo.png",
                 WebPageUrl="http://ooqia.com/",
                 StartDate="May 2016",
                 EndDate="July 2017",
                 Position="Lead Developer"
             }
           };
        }

        public IEnumerable<DevTool> GetDevTools()
        {
            return new List<DevTool>
            {
                new DevTool
                {
                    Name="ASP.NET",
                    Order = 1,
                    Url="https://www.asp.net/",
                    PictureUrl="/images/devtools/asp-net.png",
                    ShortDescription=@"ASP.NET is an open-source server-side web application framework 
                                       designed for web development to produce dynamic web pages. 
                                       It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services."
                },
                new DevTool
                {
                    Name="Node.js",
                    Order = 2,
                    Url="https://nodejs.org/",
                    PictureUrl="/images/devtools/Node.js_logo.svg",
                    ShortDescription=@"Node.js® is a JavaScript runtime built on <a href='https://developers.google.com/v8/'>Chrome's V8 JavaScript engine</a>.
                                       Node.js uses an event-driven, non-blocking I/O model that makes it
                                       lightweight and efficient. Node.js' package ecosystem, <a href='https://www.npmjs.com/'>npm</a>, is the largest ecosystem of open
                                        source libraries in the world."
                },
                new DevTool
                {
                    Name="Django",
                    Order = 3,
                    Url="https://www.djangoproject.com/",
                    PictureUrl="/images/devtools/django.jpg",
                    ShortDescription=@"Django is a high-level Python Web framework that encourages rapid development and clean, 
                                       pragmatic design. Built by experienced developers, it takes care of much of the hassle of 
                                       Web development, so you can focus on writing your app without needing to reinvent the wheel. 
                                       It’s free and open source."
                },
                new DevTool
                {
                    Name="SQL Server",
                    Order = 4,
                    Url="https://www.microsoft.com/en-us/sql-server/sql-server-2016",
                    PictureUrl="/images/devtools/sql-server.png",
                    ShortDescription=@"Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server,
                                       it is a software product with the primary function of storing and retrieving data as requested by other software
                                      applications—which may run either on the same computer or on another computer across a network (including the Internet)."
                },
                 new DevTool
                {
                    Name="PostgreSQL",
                    Order = 5,
                    Url="https://www.postgresql.org/",
                    PictureUrl="/images/devtools/postgresql_logo.png",
                    ShortDescription=@"PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development
                                        and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness."
                },
                new DevTool
                {
                    Name="MongoDB",
                    Order = 6,
                    Url="https://www.mongodb.com/",
                    PictureUrl="/images/devtools/mongodb-logo.png",
                    ShortDescription=@"MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need"
                },
                 new DevTool
                {
                    Name="React.js",
                    Order = 7,
                    Url="https://facebook.github.io/react/",
                    PictureUrl="/images/devtools/react-logo.png",
                    ShortDescription=@"React makes it painless to create interactive UIs. Design simple views for each state in your application,
                                       and React will efficiently update and render just the right components when your data changes."
                }
            };
        }

        public GeneralInfo GetGeneralInfo()
        {
            return new GeneralInfo
            {
                Name = "Luis Palacios",
                Address = "Managua, Nicaragua",
                BirthDate = new DateTime(1989, 4, 22),
                Email = "lrpalaciosdev@gmail.com",
                PictureUrl = "/images/luis-palacios.png",
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
                    Language="SQL",
                    Level= 70
                },
                new LanguageLevel
                {
                    Language="PHP",
                    Level= 60
                },
                new LanguageLevel
                {
                    Language = "HTML",
                    Level = 80
                },
                 new LanguageLevel
                {
                    Language = "CSS",
                    Level = 70
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
                }
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
