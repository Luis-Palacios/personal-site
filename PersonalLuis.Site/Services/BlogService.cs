﻿using PersonalLuis.Site.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public IEnumerable<Post> GetFeaturedPosts()
        {
            return new List<Post>
            {
                new Post(urlHelper)
                {
                    Title = "Powerfull linting in C#",
                    Introduction = @"For those that have used tools like eslint for javascript know that a great linting tool and configuration
                                      can take you code to the next level, not simply enforcing certain coding styles but also ensure good practices
                                      are forced. With a powerfull linting you can make sure to develop and keep a great code base that will feel like
                                      just one person wrote it, regardless of the size of the team.",
                    BanerThumbnailUrl="/images/posts/csharp-linting-thumb.png",
                    Slug="powerfull-linting-csharp",
                    Author="Luis Palacios"

                },
                new Post(urlHelper)
                {
                    Title = "Good console experience on windows",
                    Introduction = @"With so many popular development tools that exist today that normally requires a CLI
                                    to work the need for a good console is clear even dotnet core has moved to use more and more CLI tools and while you can integrate all of this directly
                                    into Visual Studio so that those scripts will be run automatically when you build or execute your solution from Visual Studio.
                                    The truth is many people is shifting away from the big IDE experience and using more lightweights editors such as Visual Studio Code and
                                    terminal commands and if you are doing Development in other languages such as python, javascript or ruby you cannot
                                    escape the need for a better console.",
                    BanerThumbnailUrl="/images/posts/cmder-thumb.png",
                    Slug="good-console-experience-on-windows",
                    Author="Luis Palacios",
                    Category ="DevTools",
                    PublishedDate=new DateTime(2019, 5, 11),
                    Content="GoodConsoleExperience",
                },
                new Post(urlHelper)
                {
                    Title = "Restoring multiple database in SQL Server from .bak files",
                    Introduction = @"Not always you get to live the dream of doing green field development, in fact most of the times you have to deal with old 
                                     legacy code and in the dotnet in the enterprise world DBAs are scared of code first approach, so instead you use database first.",
                    BanerThumbnailUrl="/images/posts/databases.png",
                    Slug="restoring-multiple-database-sql-server-from-bak-files",
                    IsMedium = true,
                    ExternalUrl = "https://medium.com/@Luis_Palacios/restoring-multiple-database-in-sql-server-from-bak-files-751051798ab4",
                    Author="Luis Palacios"
                },
                new Post(urlHelper)
                {
                    Title = "Web pack for server side frameworks",
                    Introduction = @"I've spend one year and half just working on SPA and came to love Web pack,
                                      recently I had to come back to server side frameworks to do some works
                                     and I wanted to continue using web pack which is normally made for front-end frameworks",
                    BanerThumbnailUrl="/images/posts/webpack-server-side.png",
                    Slug="web-pack-for-server-side-frameworks",
                    Author="Luis Palacios"
                },
                new Post(urlHelper)
                {
                    Title = "Get development started with Sitecore ",
                    Introduction = @"This series is about getting stronger in Sitecore core concepts and some third party tools
                                        that will be helpful in the future such as Unicorn and Glass mapper you can consider this
                                        series a possible next step after the Fundamental Course.",
                    BanerThumbnailUrl="/images/posts/sitecore-development.png",
                    Slug="sitecore-development",
                    IsMedium = true,
                    ExternalUrl = "https://medium.com/@Luis_Palacios/get-development-started-with-sitecore-part-1-set-up-40fff89ea0a",
                    Author="Luis Palacios"
                },
            };
        }
    }
}
