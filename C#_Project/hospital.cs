using System;

namespace HospitalManagementSystem
{
    // Delegate for billing calculation
    public delegate double BillingDelegate(double baseAmount);

    // Interface for billing strategy
    public interface IBillingStrategy
    {
        double ApplyBilling(double amount);
    }

    // Concrete billing strategies
    public class GeneralBilling : IBillingStrategy
    {
        public double ApplyBilling(double amount)
        {
            return amount;
        }
    }

    public class ICUBilling : IBillingStrategy
    {
        public double ApplyBilling(double amount)
        {
            return amount * 1.5;
        }
    }

    public class EmergencyBilling : IBillingStrategy
    {
        public double ApplyBilling(double amount)
        {
            return amount * 2;
        }
    }

    // Abstract Patient class
    public abstract class Patient
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public double BaseTreatmentCost { get; set; }

        public abstract IBillingStrategy GetBillingStrategy();
    }

    // Concrete Patient types
    public class GeneralPatient : Patient
    {
        public override IBillingStrategy GetBillingStrategy()
        {
            return new GeneralBilling();
        }
    }

    public class ICUPatient : Patient
    {
        public override IBillingStrategy GetBillingStrategy()
        {
            return new ICUBilling();
        }
    }

    public class EmergencyPatient : Patient
    {
        public override IBillingStrategy GetBillingStrategy()
        {
            return new EmergencyBilling();
        }
    }

    // Hospital class with events
    public class Hospital
    {
        public event Action<string> PatientAdmitted;
        public event Action<string> BillGenerated;

        public void AdmitPatient(Patient patient)
        {
            PatientAdmitted?.Invoke($"Patient Admitted: {patient.Name}");
        }

        public double GenerateBill(Patient patient)
        {
            BillingDelegate billingDelegate = patient.GetBillingStrategy().ApplyBilling;
            double finalBill = billingDelegate(patient.BaseTreatmentCost);

            BillGenerated?.Invoke($"Bill Generated for {patient.Name}: ₹{finalBill}");
            return finalBill;
        }
    }

    // Main Program
    class Program
    {
        static void Main()
        {
            Hospital hospital = new Hospital();

            hospital.PatientAdmitted += msg => Console.WriteLine("NOTIFICATION: " + msg);
            hospital.BillGenerated += msg => Console.WriteLine("NOTIFICATION: " + msg);

            Console.WriteLine("Select Patient Type:");
            Console.WriteLine("1. General");
            Console.WriteLine("2. ICU");
            Console.WriteLine("3. Emergency");

            int choice = int.Parse(Console.ReadLine());

            Patient patient;

            switch (choice)
            {
                case 2:
                    patient = new ICUPatient();
                    break;
                case 3:
                    patient = new EmergencyPatient();
                    break;
                default:
                    patient = new GeneralPatient();
                    break;
            }

            patient.PatientId = 101;
            patient.Name = "Mohammad Zaid";
            patient.BaseTreatmentCost = 5000;

            hospital.AdmitPatient(patient);
            hospital.GenerateBill(patient);

            Console.ReadLine();
        }
    }
}
