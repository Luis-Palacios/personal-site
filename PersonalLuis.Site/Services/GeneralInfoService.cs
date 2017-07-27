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
                 Position="Software Developer",
                 Description="Just getting started!"
             },
            new Company
             {
                 Name="OOQIA",
                 PictureUrl="/images/companies/ooqia-logo.png",
                 WebPageUrl="http://ooqia.com/",
                 StartDate="May 2016",
                 EndDate="July 2017",
                 Position="Lead Developer",
                 Description=@"Developing software solutions, for different industries and market segments, 
                                implementing the best tech stack according to the type of the project."
             },
            new Company
             {
                 Name="PartsBase Inc.",
                 PictureUrl="/images/companies/parts-base.png",
                 WebPageUrl="https://www.partsbase.com/",
                 StartDate="Aug 2015",
                 EndDate="May 2016",
                 Position="Web Developer",
                 Description=@"Worked with a team of developers across different countries in web projects
                                related to inventory, e-commerce and service providers using enterprise architecture 
                                with ASP.Net for REST APIs and AngularJs for SPA application."
             },
            new Company
             {
                 Name="Pinolero Media",
                 PictureUrl="/images/companies/pinolero-media.png",
                 WebPageUrl="https://www.pinoleromedia.com/",
                 StartDate="Feb 2015",
                 EndDate="Present",
                 Position="Full Stack Developer",
                 Description=@"Developing and implementing websites with online payments, REST APIs and integrations 
                                for Quickbooks with Django, Django Rest Framework, Postgresql, 
                                NodeJs tools such as Bower, Gulp, and different front-end libraries. Applied quality improvement 
                                processes like unit testing, code reviews, and continuous delivery."
             }
           };
        }

        public IEnumerable<Contact> GetContacts()
        {
            return new List<Contact>
            {
                new Contact
                {
                    Name = "Vanessa Lacayo",
                    PersonalUrl="https://www.linkedin.com/in/vanessalacayo/",
                    PictureUrl="/images/contacts/vanessa-lacayo.jpg",
                    Position="Front-end Developer",
                    ShortDescription=@"I'm a very detailed front-end developer with a very high level of html and css (sass, less)
                                        which leads me to produce very clean and maintainable code with great html semantics. I also know Vue.js
                                        and I've worked with django, laravel, and recently working with wordpress",
                },
                new Contact
                {
                    Name = "Wuelber Castillo",
                    PersonalUrl="https://www.linkedin.com/in/wuelber-castillo-821a93115/",
                    PictureUrl="/images/contacts/wuelber-castillo.jpg",
                    Position="Web Developer",
                    ShortDescription=@"",
                },
                new Contact
                {
                    Name = "Jarbit Lira",
                    PersonalUrl="https://www.linkedin.com/in/jarbitlira/",
                    PictureUrl="/images/contacts/jarbit-lira.jpg",
                    Position="Full Stack Developer",
                    ShortDescription=@"",
                },
                new Contact
                {
                    Name = "Amadeus Nicoya",
                    PersonalUrl="https://www.linkedin.com/in/amadeusj5/",
                    PictureUrl="/images/contacts/amadeus-nicoya.jpg",
                    Position="Web Developer",
                    ShortDescription=@"I'm a Web developer with over 5 years of professional experience and strong skills in both Front End and Back End. 
                                        Strong Knowledge ont the latest technologies: Vue, Angular, React. HTML5, SASS, .NET Platform (Entity Framework), and Laravel.",
                },
                new Contact
                {
                    Name = "Carlos Lenon",
                    PersonalUrl="https://www.linkedin.com/in/clenondavis/",
                    PictureUrl="/images/contacts/carlos-lenon.png",
                    Position="UI/UX Frontend Developer",
                    ShortDescription=@"I'm a passionate entrepreneur, very detailed front-end developer with a high level of HTML and css (sass, less, stylus), 
                                    wich leads me to produce very clean and maintainable code with great HTML semantics. I worked already with Vuejs, AngularJs and currently working with Reactjs",
                },
                new Contact
                {
                    Name = "Harold Hurtado",
                    PersonalUrl="https://www.linkedin.com/in/amadeusj5/",
                    PictureUrl="/images/contacts/harold-hurtado.png",
                    Position="Mobile / Web Developer",
                    ShortDescription=@"I like mobile development I have experience in the android environment, 
                                       I feel a lot of attraction for the web world, and I used Angular 2, 4 
                                       and probably will be aware of the new versions, and worked with React on Meteor and 
                                       Ruby on Rails, I like the Java language (knowing kotlin for android) and Ruby.",
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
                    PictureUrl="/images/devtools/Node.js_logo.png",
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
                },
                 new DevTool
                 {
                    Name="Angular.Js",
                    Order = 8,
                    Url="https://angularjs.org/",
                    PictureUrl="/images/devtools/angular.png",
                    ShortDescription=@"AgularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, 
                                        readable, and quick to develop."
                 },
                  new DevTool
                 {
                    Name="webpack",
                    Order = 9,
                    Url="https://webpack.js.org/",
                    PictureUrl="/images/devtools/webpack.png",
                    ShortDescription=@"webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, 
                                    or packaging just about any resource or asset."
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
                History = @"Back in 1996 when I was seven years old, I learned how to start Prince of Persia game in a computer with MS-DOS and from then 
                            I knew that my history with the tech world had just begun.
                            <br />
                            <br />
                            I have faced multiple challenges that my career presents, but they have reassured me that I have chosen the right path for me, 
                            whether it is maintaining a huge poorly designed and poorly coded application, architecting a new software project or 
                            keeping my skills up to date with the latest frameworks, languages, libraries and tools. "
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

        public IEnumerable<Recommendation> GetRecommendations()
        {
            return new List<Recommendation>
            {
                 new Recommendation
                {
                    Company="SafetyPay,INC",
                    Name="Jorge Alfaro",
                    Position="CTO",
                    PictureUrl="/images/recommendations/jorge-alfaro.jpg",
                    Url="https://www.linkedin.com/in/jorge-alfaro-16b9782/",
                    Testimonial=@"As one of my recruiting ventures in Nicaragua looking for offshore talent, I had the pleasure to interview Luis as a candidate for a .NET Software Developer. 
                                    After interviewing approximately 50 candidates, he was the first one who made the next round of interviews.
                                    Luis has a great spirit and he is a quick learner. In a very short time, he showed excellent skills and became a valuable asset to the company"
                },
                new Recommendation
                {
                    Company="BLAU Consulting Group",
                    Name="Carlos Avendano",
                    Position="CEO",
                    PictureUrl="/images/recommendations/carlos-avendano.jpg",
                    Url="https://www.linkedin.com/in/caavendano/",
                    Testimonial=@"Luis, proved to be a professional with technical and human characteristics to carry out the assigned tasks,
                                  he was very useful for the team because of his gift to easily learn new technologies and put them into practice while teaching the rest of the team"
                },
                new Recommendation
                {
                    Company="MPESO",
                    Name="Harvin Toledo",
                    Position="System Analyst",
                    PictureUrl="/images/recommendations/harvin-toledo.jpg",
                    Url="https://www.linkedin.com/in/harvin-toledo-1227bb58/",
                    Testimonial="Luis Palacios is a very intelligent person he is predisposed and proactive to engage in any task assigned to him. I'm sure He will do a quality job for any company."
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
                },
                  new SocialMediaInfo
                {
                    SocialMediaType = SocialMediaType.Medium,
                    Url = "https://medium.com/@Luis_Palacios"
                }

            };
        }
    }
}
