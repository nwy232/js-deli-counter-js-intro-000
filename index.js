var katzDeli=[];

function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing()
{
  if(katzDeliLine.length==0)
  {
    console.log('There is nobody waiting to be served!')
  }

  else {
    console.log(`currently serving ${katzDeliLine[0]}.`)
    katzDeliLine.shift()
  }
}

function currentLine()
{
  if(katzDeliLine.length==0)
  {
    console.log('The line is currently empty.')
  }

  else {
    console.log('The line is currently: ')
    for(var i<0;i<katzDeliLine.length;i++)
    {
      console.log(`${i}. ${katzDeliLine[i]},`)
    }
  }

}
