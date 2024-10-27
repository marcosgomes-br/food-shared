namespace FoodShared.Core.Helpers;
public static class DateTimeFormatter
{
    public static string FormartDataAndHours(this DateTime date)
    {
        DateTime today = DateTime.Today;
        DateTime yesterday = today.AddDays(-1);

        if (date.Date == today.Date)
            return $"Hoje, {date:HH:mm}";
        else if (date.Date == yesterday.Date)
            return $"Ontem, {date:HH:mm}";

        return $"{date.ToString("dddd")}, {date:HH:mm}";
    }
}
