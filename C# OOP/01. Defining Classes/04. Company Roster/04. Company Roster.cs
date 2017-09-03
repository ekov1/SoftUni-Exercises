using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Company_Roster
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>();
            string name;
            decimal salary;
            string position;
            string departament;
            string email;
            int age;

            int numberOfEmploees = int.Parse(Console.ReadLine());

            for (int i = 0; i < numberOfEmploees; i++)
            {
                string[] employeeInfo = Console.ReadLine().Split(' ');

                name = employeeInfo[0];
                salary = decimal.Parse(employeeInfo[1]);
                position = employeeInfo[2];
                departament = employeeInfo[3];

                Employee employee = new Employee(name, salary, position, departament);

                if (employeeInfo.Length == 5)
                {
                    var ageOrEmail = employeeInfo[4];
                    if (ageOrEmail.Contains("@"))
                    {
                        email = ageOrEmail;
                        employee.Email = email;
                    }
                    else
                    {
                        age = int.Parse(ageOrEmail);
                        employee.Age = age;
                    }
                }

                if (employeeInfo.Length > 5)
                {
                    email = employeeInfo[4];
                    age = int.Parse(employeeInfo[5]);

                    employee.Email = email;
                    employee.Age = age;
                }

                employees.Add(employee);
            }
        }
    }
}
