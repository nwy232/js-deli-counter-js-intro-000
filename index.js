var katzDeli=[];

function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing()
{
  if(katzDeli.length==0)
  {
    console.log('There is nobody waiting to be served!')
  }

  else {
    console.log(`currently serving ${katzDeli[0]}.`)
    katzDeli.shift()
  }
}

function currentLine()
{
  if(katzDeli.length==0)
  {
    console.log('The line is currently empty.')
  }

  else {
    console.log('The line is currently: ')
    for(var i=0;i<katzDeli.length;i++)
    {
      console.log(`${i}. ${katzDeli[i]},`)
    }
  }

}
