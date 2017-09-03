using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Company_Roster
{
    public class Employee
    {
        // Fields
        string name;
        decimal salary;
        string position;
        string departament;

        // Constructors
        public Employee(string name, decimal salary, string position, string departament)
        {
            this.name = name;
            this.salary = salary;
            this.position = position;
            this.departament = departament;
            this.Email = "n/a";
        }
        //public Employee(string name, decimal salary, string position, string departament, string email, int age)
        //    : this(name, salary, position, departament)
        //{
        //    this.email = email;
        //    this.age = age;
        //}

        // Properies
        public string Email { get; set; }
        public int Age { get; set; }
    }
}
