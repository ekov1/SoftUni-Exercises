namespace _03.Opinion_Poll
{
    public class Person
    {
        // Fields
        public string name;
        public int age;

        // Constructors
        public Person()
        {
            this.name = "No name";
            this.age = 1;
        }

        public Person(int age)
        {
            this.name = "No name";
            this.age = age;
        }

        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }
    }
}
