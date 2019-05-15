using Microsoft.AspNetCore.Http;

namespace PersonalLuis.Site.Utils
{
    public static class RequestExtensions
    {
        public static string GetBaseUrl(this HttpRequest request)
        {
            return $"{request.Scheme}://{request.Host}";
        }

        public static string GetAbsoluteUrl(this HttpRequest request)
        {
            if(request.Path.HasValue)
                return $"{request.GetBaseUrl()}{request.Path.Value}";
            return request.GetBaseUrl();
        }
    }
}
