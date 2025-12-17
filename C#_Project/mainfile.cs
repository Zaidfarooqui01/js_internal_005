using System;

namespace HospitalManagementSystem
{
    /* =========================
       DELEGATE
    ========================= */
    public delegate double BillingDelegate(double baseAmount);

    /* =========================
       INTERFACE
    ========================= */
    public interface IBillingStrategy
    {
        double ApplyBilling(double amount);
    }

    /* =========================
       BILLING STRATEGIES
    ========================= */
    public class GeneralBilling : IBillingStrategy
    {
        public double ApplyBilling(double amount) => amount;
    }

    public class ICUBilling : IBillingStrategy
    {
        public double ApplyBilling(double amount) => amount * 1.5;
    }

    public class EmergencyBilling : IBillingStrategy
    {
        public double ApplyBilling(double amount) => amount * 2;
    }

    /* =========================
       BASE CLASS
    ========================= */
    public abstract class Patient
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public double BaseTreatmentCost { get; set; }

        public abstract IBillingStrategy GetBillingStrategy();
    }

    /* =========================
       DERIVED CLASSES
    ========================= */
    public class GeneralPatient : Patient
    {
        public override IBillingStrategy GetBillingStrategy() => new GeneralBilling();
    }

    public class ICUPatient : Patient
    {
        public override IBillingStrategy GetBillingStrategy() => new ICUBilling();
    }

    public class EmergencyPatient : Patient
    {
        public override IBillingStrategy GetBillingStrategy() => new EmergencyBilling();
    }

    /* =========================
       HOSPITAL CLASS (EVENTS)
    ========================= */
    public class Hospital
    {
        public event Action<string> PatientAdmitted;
        public event Action<string> BillGenerated;

        public void AdmitPatient(Patient patient)
        {
            PatientAdmitted?.Invoke($"Patient Admitted: {patient.Name} (ID: {patient.PatientId})");
        }

        public double GenerateBill(Patient patient)
        {
            BillingDelegate billingDelegate = patient.GetBillingStrategy().ApplyBilling;
            double finalBill = billingDelegate(patient.BaseTreatmentCost);

            BillGenerated?.Invoke($"Bill Generated for {patient.Name}: ₹{finalBill}");
            return finalBill;
        }
    }

    /* =========================
       MAIN PROGRAM
    ========================= */
    class Program
    {
        static void Main()
        {
            Hospital hospital = new Hospital();

            hospital.PatientAdmitted += msg => Console.WriteLine("NOTIFICATION: " + msg);
            hospital.BillGenerated += msg => Console.WriteLine("NOTIFICATION: " + msg);

            Console.WriteLine("Enter Patient ID:");
            int id = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter Patient Name:");
            string name = Console.ReadLine();

            Console.WriteLine("Enter Base Treatment Cost:");
            double cost = double.Parse(Console.ReadLine());

            Console.WriteLine("Select Patient Type:");
            Console.WriteLine("1. General");
            Console.WriteLine("2. ICU");
            Console.WriteLine("3. Emergency");

            int choice = int.Parse(Console.ReadLine());

            Patient patient = choice switch
            {
                2 => new ICUPatient(),
                3 => new EmergencyPatient(),
                _ => new GeneralPatient()
            };

            patient.PatientId = id;
            patient.Name = name;
            patient.BaseTreatmentCost = cost;

            hospital.AdmitPatient(patient);
            hospital.GenerateBill(patient);

            Console.ReadLine();
        }
    }
}
