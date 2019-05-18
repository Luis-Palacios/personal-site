using System.Linq;

namespace PersonalLuis.Site.Utils
{
    public static class StringExtensions
    {
        public static string GetExtension(this string url)
        {
            return url.Split('.').LastOrDefault();
        }
    }
}
