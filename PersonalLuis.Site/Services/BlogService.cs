using PersonalLuis.Site.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using PersonalLuis.Site.Models.Blog;
using Microsoft.AspNetCore.Mvc;

namespace PersonalLuis.Site.Services
{
    public class BlogService : IBlogService
    {
        private readonly IUrlHelper urlHelper;
        public BlogService(IUrlHelper urlHelper)
        {
            this.urlHelper = urlHelper;
        }

        public ICollection<Post> GetPostsData(string lang)
        {
            return new List<Post>
                {
                    new Post(urlHelper, lang)
                {
                    Title = "Powerfull linting in C#",
                    Introduction = @"For those that have used tools like eslint for javascript know that a great linting tool and configuration
                                      can take you code to the next level, not simply enforcing certain coding styles but also ensure good practices
                                      are forced. With a powerfull linting you can make sure to develop and keep a great code base that will feel like
                                      just one person wrote it, regardless of the size of the team.",
                    BanerThumbnailUrl="/images/posts/csharp-linting-thumb.png",
                    Slug="powerfull-linting-csharp",
                    Author="Luis Palacios",
                    Published = true,
                },
                new Post(urlHelper, lang)
                {
                    Id = 2,
                    Title = "Good terminal experience on windows",
                    TitleEs= "Buena experiencia de terminal en windows",
                    Introduction = @"With so many popular development tools that exist today that normally requires a CLI to work,
                                    the need for a good console application have become more clear. A console where you can be productive that has a nice
                                    look and feel is actually posible not only on UNIX Systems but also on Windows.",
                    IntroductionEs =@"Con tantas herramientas populares de desarrollo que existen hoy en día que requiere de una interfaz de linea de comando para trabajar,
                                        la necesidad de una buena aplicación de consola se ha vuelto más clara. Una consola donde podas ser productivo que se vea y sienta bien es
                                        posible de lograr no solo en sistemas basados en UNIX sino también en Windows",
                    BanerThumbnailUrl="/images/posts/cmder-thumb.png",
                    BannerUrl="/images/posts/cmder/main.png",
                    Slug="good-terminal-experience-on-windows",
                    SlugEs="buena-experiencia-terminal-en-windows",
                    Author="Luis Palacios",
                    Category ="DevTools",
                    PublishedDate=new DateTime(2019, 5, 15),
                    Content="GoodTerminalExperience",
                    ContentEs="es/BuenaExperienciaTerminal",
                    Published = true,
                },
                new Post(urlHelper, lang)
                {
                    Title = "Restoring multiple database in SQL Server from .bak files",
                    Introduction = @"Not always you get to live the dream of doing green field development, in fact most of the times you have to deal with old 
                                     legacy code and in the dotnet in the enterprise world DBAs are scared of code first approach, so instead you use database first.",
                    BanerThumbnailUrl="/images/posts/databases.webp,/images/posts/databases.png",
                    Slug="restoring-multiple-database-sql-server-from-bak-files",
                    IsMedium = true,
                    ExternalUrl = "https://medium.com/@Luis_Palacios/restoring-multiple-database-in-sql-server-from-bak-files-751051798ab4",
                    Author="Luis Palacios",
                    Published = true,
                },
                new Post(urlHelper, lang)
                {
                    Title = "Web pack for server side frameworks",
                    Introduction = @"I've spend one year and half just working on SPA and came to love Web pack,
                                      recently I had to come back to server side frameworks to do some works
                                     and I wanted to continue using web pack which is normally made for front-end frameworks",
                    BanerThumbnailUrl="/images/posts/webpack-server-side.png",
                    Slug="web-pack-for-server-side-frameworks",
                    Author="Luis Palacios"
                },
                new Post(urlHelper, lang)
                {
                    Title = "Get development started with Sitecore ",
                    Introduction = @"This series is about getting stronger in Sitecore core concepts and some third party tools
                                        that will be helpful in the future such as Unicorn and Glass mapper you can consider this
                                        series a possible next step after the Fundamental Course.",
                    BanerThumbnailUrl="/images/posts/sitecore-development.webp,/images/posts/sitecore-development.png",
                    Slug="sitecore-development",
                    IsMedium = true,
                    ExternalUrl = "https://medium.com/@Luis_Palacios/get-development-started-with-sitecore-part-1-set-up-40fff89ea0a",
                    Author="Luis Palacios",
                    Published = true,
                },
        };
        }
        public IEnumerable<Post> GetFeaturedPosts(string lang)
        {
            return GetPostsData(lang).Where(p => p.Published);
        }

        public IEnumerable<Post> GetPosts(string searchTerm, string lang)
        {
            if (string.IsNullOrEmpty(searchTerm))
            {
                return GetPostsData(lang).Where(p => p.Published);
            }
            else
            {
                searchTerm = searchTerm.ToLower();
                return GetPostsData(lang).Where(p => p.Published && (p.Title.ToLower().Contains(searchTerm) || p.Introduction.ToLower().Contains(searchTerm)));
            }
        }
    }
}
