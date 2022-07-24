//auto text system
//  let auto = new Typed("#example1" ,{
    
// });
// loging procces
let typed1 = new Typed('#typed1', {
  strings: ['`using System;`^1000\n`using System.Collection;`^1000\n`using System.Reflection;`^2000\n\nnamespace SecTest'],
  typeSpeed: 40,
  backSpeed: 0,
  cursorChar: '_',
  loop: false
});

let typed2 = new Typed('#typed6', {
  strings: ['`class Program`^1000\n`   static void Main(string[] args);`^1000\n`        Assembly.LoadFrom(@"F\\Temp\\test\\test\\bin\\Debug\\test.exe:");`^2000\n\n`        Console.WriteLine("***** Evidence Viewer *****\\n");\n\n` ^3000 `       if (asb != null)\n\n` ^500 `       { \n\n` ^1000 `           DisplayEvidence(asb); \n\n ` ^500 `      } \n ` ^500 `      Console.ReadLine();`'],
  typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    cursorChar: '_',
    loop: false
    // onReset: function(runScript) { prettyLog('onReset ' + self) },
});

// register procces
let typed6 = new Typed('#typed', {
    strings: ['Register process start ^1000\n`installing components...`^1000\n`Fetching from source...`'],
    typeSpeed: 40,
    backSpeed: 0,
    loop: false
  });


//   using System; <br>
//   using System.Collections;<br>
//   using System.Security.Policy;<br>
//   using System.Reflection;<br>
  
//   namespace SecTest<br>
// {<br>
// class Program<br>
// {<br>
//   static void Main(string[] args)<br>
//   {<br><br>
      
//       Assembly asb = Assembly.LoadFrom(@"F:\Temp\test\test\bin\Debug\test.exe");<br>

//       Console.WriteLine("***** Evidence Viewer *****\n");<br>

//       if (asb != null)<br>
//       {<br>
//           DisplayEvidence(asb);
//       }<br>
//       Console.ReadLine();
//   }

//   private static void DisplayEvidence(Assembly asm)
//   {
  
//       Evidence e = asm.Evidence;<br>
//       IEnumerator obj = e.GetHostEnumerator();<br>
//       // Now print out the evidence.<br>
//       while (obj.MoveNext())<br>
//       {
//           Console.WriteLine(" **** Press Enter to continue ****");<br>
//           Console.ReadLine();<br>
//           Console.WriteLine(obj.Current);
//       }<br>
//   }
// }<br>
// }<br>



// FileIOPermission ff = new FileIOPermission(FileIOPermissionAccess.Write,"c:/temp/xyz.txt");
// ff.Assert();