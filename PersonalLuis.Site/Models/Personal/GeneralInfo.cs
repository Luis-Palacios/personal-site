using System;

namespace PersonalLuis.Site.Models.Personal
{
    public class GeneralInfo
    {
        public string History { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string PictureUrl { get; set; }

        public int Age
        {
            get
            {
                // Save today's date.
                var today = DateTime.Today;
                // Calculate the age.
                var age = today.Year - BirthDate.Year;
                // Go back to the year the person was born in case of a leap year
                if (BirthDate > today.AddYears(-age)) age--;
                return age;
            }
        }


    }
}
