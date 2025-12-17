using System;

public delegate void Payment();
public class PaymentMethods
{
    public void UPI()
    {
        Console.WriteLine("Paying Through UPI");
    }
    public void CreditCard()
    {
        Console.WriteLine("Paying Through Credit Card");
    }
    public void NetBanking()
    {
        Console.WriteLine("Paying Through NetBanking");
    }

}

class TestPayment
{
    static void Main(string[] args)
    {
        PaymentMethods pm = new();
        Console.WriteLine("Enter 1 for UPI, 2 for NetBanking and 3 for CreditCard:");
        Console.WriteLine("Choose Your Payment Method:");
        int userinput = int.Parse(Console.ReadLine());

        //Type conversion from int to string
        string userchoice = userinput.ToString();

        switch (userchoice)
        {
            case "1":
                Payment pd = pm.UPI;
                pd();
                break;
            case "2":
                pd = pm.NetBanking;
                pd();
                break;
            case "3":
                pd = pm.CreditCard;
                pd();
                break;
            default:
            Console.WriteLine("Enter The Valid Choice");
            break;
        }

    }
}