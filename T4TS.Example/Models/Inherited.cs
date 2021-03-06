﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T4TS.Example.Models
{
    [TypeScriptInterface(Name="OverridenName")]
    public class Inherited: List<Barfoo>
    {
        [TypeScriptMember(Optional=true, Name="OtherName")]
        public string StringProperty { get; set; }
        public int[] Integers { get; set; }
        public List<double> Doubles { get; set; }
        public List<List<int>> TwoDimList { get; set; }
    }
}
