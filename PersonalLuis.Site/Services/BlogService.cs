using PersonalLuis.Site.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalLuis.Site.Models.Blog;

namespace PersonalLuis.Site.Services
{
    public class BlogService : IBlogService
    {
        public IEnumerable<Post> GetFeaturedPosts()
        {
            return new List<Post>
            {
                new Post
                {
                    Title = "Powerfull linting in C#",
                    Introduction = @"For those that have used tools like eslint for javascript know that a great linting tool and configuration
                                      can take you code to the next level, not simply enforcing certain coding styles but also ensure good practices
                                      are forced. With a powerfull linting you can make sure to develop and keep a great code base that will feel like
                                      just one person wrote it, regardless of the size of the team.",
                    BanerThumbnailUrl="/images/posts/csharp-linting-thumb.png",
                    Slug="powerfull-linting-csharp"
                   
                },
                new Post
                {
                    Title = "Cmder the must have windows console",
                    Introduction = @"If you have been doing development in windows and in need to use the command line, you probably already realize
                                     that the native console that the command prompt is bad, well the creator of cmder realized that too and they have build
                                     this amazing console that you will love!",
                    BanerThumbnailUrl="/images/posts/cmder-thumb.png",
                    Slug="cmder-must-have-windows-console"
                },

            };
        }
    }
}
