using System;
// namespace Delegate
public delegate double Discount(double price);
public class Product
{
    public string ProductId;
    public string ProductName;
    public double ProductPrice;
    public Product(string id, string name, double price)
    {
        this.ProductId = id;
        this.ProductName = name;
        this.ProductPrice = price;
    }
    public void ShowProductDetails()
    {
        Console.WriteLine($"Product Id: {ProductId}");
        Console.WriteLine($"Product Name: {ProductName}");
        Console.WriteLine($"Product Price: {ProductPrice}");

    }

}
public class Customer
{
    public string CustomerId;
    public string CustomerName;
    public string CustomerType;
    public Customer(string id, string name, string type)
    {
        this.CustomerId = id;
        this.CustomerName = name;
        this.CustomerType = type;
    }
    public void ShowCustomerDetails()
    {
        Console.WriteLine($"Customer Id: {CustomerId}");
        Console.WriteLine($"Customer Name: {CustomerName}");
        Console.WriteLine($"Customer Type: {CustomerType}");
    }
}
class DiscountStrategies
{
    public double PremiumDiscount(double price) => price * 0.83; //17% Discount
    public double OccasionalDiscount(double price) => price * 0.72; // 28% Discount
}

class TestDelegate
{
    static void Main()
    {
        Product p1 = new Product ("P101", "Laptop", 50000);
        Customer c1 = new Customer ("C101", "Zaid", "Regular");
        p1.ShowProductDetails();
        c1.ShowCustomerDetails();
        // Create an instance of DiscountStrategies
        DiscountStrategies ds = new(); 
        

        if (c1.CustomerType == "Regular")
        {
            // Delegate instance pointing to PremiumDiscount method
            Discount discount = ds.PremiumDiscount;
            // Calculate final price using the delegate
            double finalPrice = discount(p1.ProductPrice);

            Console.WriteLine($"Final Price after Discount: {finalPrice}");
        }
        else if (c1.CustomerType == "Occasional")
        {
            // Delegate instance pointing to FestivalDiscount method
            Discount discount = ds.OccasionalDiscount;
            // Calculate final price using the delegate
            double finalPrice = discount(p1.ProductPrice);

            Console.WriteLine($"Final Price after Discount: {finalPrice}");
        }
    }
}
