using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_3.Opinion_Poll
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>();
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] info = Console.ReadLine().Split(' ');
                string name = info[0];
                int age = int.Parse(info[1]);
                people.Add(new Person(name, age));
            }

            var sorted = people.OrderBy(x => x.name);
            Console.WriteLine();
            foreach (var p in sorted)
            {
                if (p.age > 30)
                {
                    Console.WriteLine("{0} - {1}", p.name, p.age);
                }
            }
        }
    }
}
