let a = 10;
{
  let a = 20;
  {
    let a = 30;
    {
      let a = 40;
      console.log(a);
    }
  }
}

console.log(a);
