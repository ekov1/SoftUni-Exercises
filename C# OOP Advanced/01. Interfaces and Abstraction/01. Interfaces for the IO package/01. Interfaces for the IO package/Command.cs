using _01.Interfaces_for_the_IO_package.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Interfaces_for_the_IO_package
{
    public abstract class Command : IExecutable
    {
        public void Execute()
        {
            throw new NotImplementedException();
        }
    }
}
